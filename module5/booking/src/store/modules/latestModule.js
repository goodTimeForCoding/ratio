import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();

export const latestModule = {
  state: () => ({
    latestData: null,
    isLatestLoading: false,
  }),

  getters: {
    all(state) {
      return state.latestData;
    },
  },

  mutations: {
    setLatestData(state, latestData) {
      state.latestData = latestData;
    },

    setLatestLoading(state, isLoading) {
      state.isLatestLoading = isLoading;
    },
  },

  actions: {
    async fetchLatestData({ state, commit }) {
      try {
        commit("setLatestLoading", true);
        const response = await axios.get(
          "https://module5.vue.panfilov.academy/hotel/latest"
        );
        const latestData = response.data;
        commit("setLatestData", latestData);
      } catch (error) {
        toast.error(error.message);
      } finally {
        commit("setLatestLoading", false);
      }
    },
  },

  namespaced: true,
};
