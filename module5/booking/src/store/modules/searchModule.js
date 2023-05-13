import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();

export const searchModule = {
  state: () => ({
    searchData: null,
    isSearchDataLoading: false,
  }),

  getters: {
    all(state) {
      return state.searchData;
    },
    coords(state) {
      return state.locationData;
    },
  },

  mutations: {
    setSearchData(state, searchData) {
      state.searchData = searchData;
    },

    setSearchDataLoading(state, isLoading) {
      state.isSearchDataLoading = isLoading;
    },
  },

  actions: {
    async fetchSearchData({ state, commit }, data) {
      try {
        commit("setSearchDataLoading", true);
        const searchFilterData = {
          location: data.location.name,
          checkIn: data.checkIn,
          checkOut: data.checkOut,
          guest: data.guest,
        };
        const responseSearchData = await axios.post(
          "https://module5.vue.panfilov.academy/hotel/filter",
          searchFilterData
        );
        const searchData = responseSearchData.data;

        commit("setSearchData", searchData);
      } catch (error) {
        toast.error(error.message);
      } finally {
        commit("setSearchDataLoading", false);
      }
    },
  },
  namespaced: true,
};
