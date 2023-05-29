<template>
  <div class="reserv-card">
    <div class="reserv-card__wrap">
      <div class="reserv-card__wrap-right">
        <h2 class="reserv-card__title">{{ all.name }}</h2>
        <small class="reserv-card__address">{{ all.address }}</small>
        <ul class="list-reset reserv-card__proprties">
          <li class="reserv-card__proprty">{{ all.info[0].bedroom }} Bedroom</li>
          <li class="reserv-card__proprty">{{ all.info[0].bathroom }} Bathroom</li>
          <li class="reserv-card__proprty">1 Parking</li>
        </ul>
      </div>
      <div class="reserv-card__img-wrap">
        <img class="reserv-card__img" :src="`${all.image}`" alt="main image" />
      </div>
    </div>
    <h2 class="reserv-card__title reserv-card__title--bottom">Price Details</h2>
    <ul class="list-reset reserv-card__price-details">
      <li class="reserv-card__price-detail">Short Period: $ 1000</li>
      <li class="reserv-card__price-detail">Medium Period: $ 2000</li>
      <li class="reserv-card__price-detail">Long Period: $ 2000</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      all: "hotel/all",
    }),
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/reserv-card.scss";
</style>
