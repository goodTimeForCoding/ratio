import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();

export const latestModule = {
  //данные приложения
  state: () => ({
    latestData: null,
    isLatestLoading: false,
  }),

  //computed свойства(кэшируемые вычисляемые значения)
  getters: {
    all(state) {
      return state.latestData;
    },
  },

  //функции внутри которого мы меняем значения внутри какого-то поля в state
  mutations: {
    setLatestData(state, latestData) {
      state.latestData = latestData;
    },

    setLatestLoading(state, isLoading) {
      state.isLatestLoading = isLoading;
    },
  },

  //функции которые внутри себя исп-ют мутации
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

  //всё что заключено в конкретный модуль будет иметь определённое пространство имён
  namespaced: true,
};
