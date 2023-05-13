import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();

export const coordsModule = {
  state: () => ({
    lat: null,
    lng: null,
    markers: null,
    isCoordsDataLoading: false,
  }),

  getters: {
    center(state) {
      return { lat: +state.lat, lng: +state.lng };
    },
    markers(state) {
      return state.markers;
    },
  },

  mutations: {
    setMarkers(state, markers) {
      state.markers = markers;
    },

    setLat(state, lat) {
      state.lat = lat;
    },

    setLng(state, lng) {
      state.lng = lng;
    },

    setCoordsDataLoading(state, isLoading) {
      state.isCoordsDataLoading = isLoading;
    },
  },

  /*используем rootGetters для получения id найденных отелей, далее получаем координаты используя запрос  
  полной информации об отеле*/
  actions: {
    async fetchCoordsData({ state, commit, rootGetters }) {
      const searchData = rootGetters["search/all"];
      const result = [];
      for (let i = 0; i <= searchData.length - 1; i++) {
        try {
          commit("setCoordsDataLoading", true);
          const responseLocationData = await axios.get(
            "https://module5.vue.panfilov.academy/hotel/detail/" +
              searchData[i]._id
          );
          result.push({
            position: {
              lat: +responseLocationData.data.coords[0],
              lng: +responseLocationData.data.coords[1],
            },
          });
        } catch (error) {
          toast.error(error.message);
        } finally {
          commit("setCoordsDataLoading", false);
        }
      }
      commit("setLat", result[0].position.lat);
      commit("setLng", result[0].position.lng);
      commit("setMarkers", result);
    },
  },
  namespaced: true,
};
