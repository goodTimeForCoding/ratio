import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();

export const locationModule = {
  state: () => ({
    locationData: null,
    isLocationLoading: false,
  }),

  getters: {
    all(state) {
      return state.locationData;
    },
  },

  mutations: {
    setLocationData(state, locationData) {
      state.locationData = locationData;
    },

    setLocationLoading(state, isLoading) {
      state.isLocationLoading = isLoading;
    },
  },

  actions: {
    async fetchLocationData({ state, commit }) {
      try {
        commit("setLocationLoading", true);
        const response = await axios.get(
          "https://module5.vue.panfilov.academy/hotel/location"
        );
        const locationData = response.data;
        commit("setLocationData", locationData);
      } catch (error) {
        toast.error(error.message);
      } finally {
        commit("setLocationLoading", false);
      }
    },
  },

  namespaced: true,
};
