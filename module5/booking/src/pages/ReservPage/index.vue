<template>
  <div v-if="isDataLoaded">
    <div class="reserv">
      <div class="reserv__wrap">
        <div class="reserv__form-wrap">
          <reserv-form />
        </div>
        <div class="reserv__card-wrap">
          <reserv-card />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h1><router-link :to="'/'">Выберите отель для бронирования</router-link></h1>
  </div>
</template>

<script>
import ReservForm from "@/pages/ReservPage/ReservForm.vue";
import ReservCard from "@/pages/ReservPage/ReservCard.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    ReservForm,
    ReservCard,
  },
  computed: {
    ...mapState({
      isDataLoaded: (state) => state.hotel.isDataLoaded,
    }),
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/reserv.scss";
</style>
