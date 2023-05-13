<template>
  <div v-if="!isHotelLoading">
    <div class="hotel">
      <div class="hotel__gallery">
        <hotel-gallery :data="all" />
      </div>
      <div class="container">
        <div class="hotel__info">
          <hotel-info :data="all" />
        </div>
        <div class="hotel__wrap">
          <div class="hotel__descr">
            <hotel-descr :data="all" />
          </div>
          <div class="hotel__amenities">
            <hotel-amenities />
          </div>
        </div>
        <div class="hotel__location">
          <component-with-map :coords="coords" />
        </div>
        <div class="hotel__reviews" :data="all.reviews">
          <hotel-reviews />
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <h1>Идёт загрузка...</h1>
  </div>
</template>

<script>
import HotelGallery from "@/pages/HotelPage/HotelGallery.vue";
import HotelAmenities from "@/pages/HotelPage/HotelAmenities.vue";
import HotelReviews from "@/pages/HotelPage/HotelReviews.vue";
import HotelInfo from "@/pages/HotelPage/HotelInfo.vue";
import HotelDescr from "@/pages/HotelPage/HotelDescr.vue";
import ComponentWithMap from "@/components/common/ComponentWithMap.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    HotelGallery,
    HotelAmenities,
    HotelReviews,
    HotelInfo,
    HotelDescr,
    ComponentWithMap,
  },

  methods: {
    ...mapActions({
      fetchHotelData: "hotel/fetchHotelData",
    }),
  },

  created() {
    this.fetchHotelData(this.$route.params.id);
    ym(93555198, "reachGoal", "website__card-click");
  },

  computed: {
    ...mapState({
      isHotelLoading: (state) => state.hotel.isHotelLoading,
    }),
    ...mapGetters({
      all: "hotel/all",
      coords: "hotel/coords",
    }),
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/hotel.scss";
</style>
