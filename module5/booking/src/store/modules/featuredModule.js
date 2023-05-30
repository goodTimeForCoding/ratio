import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();

export const featuredModule = {
  state: () => ({
    featuredData: null,
    isFeaturedLoading: false,
  }),

  getters: {
    all(state) {
      return state.featuredData;
    },
  },

  mutations: {
    setFeaturedData(state, featuredData) {
      state.featuredData = featuredData;
    },

    setFeaturedLoading(state, isLoading) {
      state.isFeaturedLoading = isLoading;
    },
  },

  actions: {
    async fetchFeaturedData({ state, commit }) {
      try {
        commit("setFeaturedLoading", true);
        const response = await axios.get(
          "https://module5.vue.panfilov.academy/hotel/featured"
        );
        const featuredData = response.data;
        commit("setFeaturedData", featuredData);
      } catch (e) {
        toast.error(error.message);
      } finally {
        commit("setFeaturedLoading", false);
      }
    },
  },

  namespaced: true,
};
