import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();

export const hotelModule = {
  //данные приложения
  state: () => ({
    hotelData: null,
    isHotelLoading: false,
    isDataLoaded: false,
  }),

  //computed свойства(кэшируемые вычисляемые значения)
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

  //функции внутри которого мы меняем значения внутри какого-то поля в state
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

  //функции которые внутри себя исп-ют мутации
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
  //всё что заключено в конкретный модуль будет иметь определённое пространство имён
  namespaced: true,
};
