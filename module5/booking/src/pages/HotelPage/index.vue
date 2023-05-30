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
import { mapState, mapGetters, mapActions } from "vuex";

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
.hotel {
  &__gallery {
    padding: 0 8px;
    margin-top: 30px;
    margin-bottom: 88px;
  }

  &__info {
    margin-bottom: 58px;
  }

  &__title {
    margin: 0;
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;
    color: #484848;
  }

  &__amenities {
    margin-bottom: 51px;
  }

  &__descr {
    margin-bottom: 56px;
  }

  &__wrap {
    max-width: 750px;
  }

  &__reviews {
    margin-top: 28px;
    margin-bottom: 50px;
  }

  &__location {
    max-width: 790px;
    height: 420px;
  }
}
</style>
