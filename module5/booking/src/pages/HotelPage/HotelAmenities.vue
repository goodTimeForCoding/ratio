<template>
  <div class="hotel-amenities">
    <h2 class="hotel-amenities__title">Offered Amenities</h2>
    <ul class="list-reset hotel-amenities__items">
      <hotel-amenities-list v-if="!isAllAmenities" :amenities="limitAmenities" />
      <hotel-amenities-list v-if="isAllAmenities" :amenities="allAmenities" />
    </ul>
    <button
      class="btn-reset btn btn__hotel"
      v-show="!isAllAmenities"
      @click="showAllAmenities"
    >
      Show All {{ amenitiesLength }} Amenities
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import HotelAmenitiesList from "@/pages/HotelPage/HotelAmenitiesList.vue";
export default {
  components: {
    HotelAmenitiesList,
  },

  data() {
    return {
      isAllAmenities: false,
    };
  },

  computed: {
    ...mapState({
      limitAmenities: (state) => state.hotel.hotelData.amenities.slice(0, 6),
      allAmenities: (state) => state.hotel.hotelData.amenities,
      amenitiesLength: (state) => state.hotel.hotelData.amenities.length,
    }),
  },

  methods: {
    showAllAmenities() {
      this.isAllAmenities = true;
    },
  },
};
</script>

<style scoped lang="scss">
.hotel-amenities {
  &__title {
    margin: 0;
    margin-bottom: 28px;
    font-family: "Milliard";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #484848;
  }

  &__items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 16px;
    max-width: 672px;
    font-family: "Milliard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #484848;
  }

  &__item {
    display: flex;
    margin-bottom: 25px;
  }

  &__item-text {
    padding-left: 17px;
  }
}
</style>
