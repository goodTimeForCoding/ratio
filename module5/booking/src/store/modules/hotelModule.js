import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();

export const hotelModule = {

  state: () => ({
    hotelData: null,
    isHotelLoading: false,
    isDataLoaded: false,
  }),

  getters: {
    all(state) {
      return state.hotelData;
    },
    coords(state) {
      const coords = [];
      coords.push({
        lat: state.hotelData.coords[0],
        lng: state.hotelData.coords[1],
      });
      return coords;
    },
  },

  mutations: {
    setHotelData(state, hotelData) {
      state.hotelData = hotelData;
    },

    setHotelLoading(state, isLoading) {
      state.isHotelLoading = isLoading;
    },

    setDataLoaded(state, isDataLoaded) {
      state.isDataLoaded = isDataLoaded;
    },
  },

  actions: {
    async fetchHotelData({ commit }, id) {
      try {
        commit("setHotelLoading", true);
        const response = await axios.get(
          "https://module5.vue.panfilov.academy/hotel/detail/" + id
        );
        commit("setHotelData", response.data);
        commit("setDataLoaded", true);
      } catch (error) {
        toast.error(error.message);
      } finally {
        commit("setHotelLoading", false);
      }
    },
  },

  namespaced: true,
};
