import axios from "axios";
import { useToast } from "vue-toastification";

const toast = useToast();

export const reservModule = {
  state: () => ({
    isReservDataSending: false,
  }),

  getters: {},

  mutations: {
    setReservDataSending(state, isSending) {
      state.isReservDataSending = isSending;
    },
  },

  actions: {
    async postReservData({ state, commit }, data) {
      try {
        commit("setReservDataSending", true);
        const responseSearchData = await axios.post(
          "https://module5.vue.panfilov.academy/order",
          data
        );
        toast.success("The apartments are booked!");
        ym(93555198, "reachGoal", "website__order-success");
      } catch (error) {
        toast.error(error.message);
        ym(93555198, "reachGoal", "website__order-error");
      } finally {
        commit("setReservDataSending", false);
      }
    },
  },
  namespaced: true,
};
