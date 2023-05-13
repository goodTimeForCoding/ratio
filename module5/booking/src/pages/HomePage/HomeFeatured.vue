<template>
  <section class="featured">
    <h2 class="title title--decore featured__header">
      Featured Properties on our Listing
    </h2>

    <div class="featured__cards">
      <hotel-card
        v-for="card in allFeatured"
        :key="card._id"
        :hotelData="card"
        cardType="featured"
        class="featured__card"
      />
    </div>
  </section>
</template>

<script>
import HotelCard from "@/components/HotelCard.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: {
    allFeatured: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    HotelCard,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/featured.scss";
</style>
