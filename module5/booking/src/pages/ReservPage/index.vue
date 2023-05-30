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
import { mapState } from "vuex";

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
.reserv {
  margin-top: 77px;
  margin-bottom: 80px;
  padding: 0 5%;

  &__wrap {
    @include flex-h-center;
    gap: 49px;
    flex-wrap: wrap;
  }

  &__form-wrap {
    max-width: 699px;
  }

  @include minidesk {
    margin-top: 20px;
    margin-bottom: 20px;

    &__form-wrap {
      order: 1;
    }
  }
}
</style>
