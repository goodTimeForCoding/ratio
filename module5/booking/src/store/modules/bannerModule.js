import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();

export const bannerModule = {
  state: () => ({
    bannerData: null,
    mainbannerData: null,
    secondbannerData: null,
    lastbannerData: null,
    isBannerLoading: false,
  }),

  getters: {
    main(state) {
      return state.mainbannerData;
    },
    second(state) {
      return state.secondbannerData;
    },
    last(state) {
      return state.lastbannerData;
    },
  },

  mutations: {
    setBannerData(state, bannerData) {
      state.bannerData = bannerData;
    },
    setMainBannerData(state, bannerData) {
      state.mainbannerData = bannerData;
    },
    setSecondBannerData(state, bannerData) {
      state.secondbannerData = bannerData;
    },
    setLastBannerData(state, bannerData) {
      state.lastbannerData = bannerData;
    },
    setBannerLoading(state, isLoading) {
      state.isBannerLoading = isLoading;
    },
  },

  actions: {
    async fetchBannertData({ state, commit }) {
      try {
        commit("setBannerLoading", true);
        const response = await axios.get(
          "https://module5.vue.panfilov.academy/banners"
        );
        const bannerData = response.data;
        commit("setBannerData", bannerData);
        commit("setMainBannerData", bannerData.main);
        commit("setSecondBannerData", bannerData.second);
        commit("setLastBannerData", bannerData.last);
      } catch (error) {
        toast.error(error.message);
      } finally {
        commit("setBannerLoading", false);
      }
    },
  },

  namespaced: true,
};
