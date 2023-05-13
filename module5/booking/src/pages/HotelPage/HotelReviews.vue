<template>
  <div class="hotel-reviews">
    <h2 class="hotel-reviews__title">
      Reviews
      <span class="hotel-reviews__title-icon">
        <icon-base width="20" height="20" icon-name="star">
          <icon-star />
        </icon-base>
      </span>
      5.0
    </h2>
    <ul class="list-reset hotel-reviews__indicators">
      <li class="hotel-reviews__indicator">
        <span class="hotel-reviews__indicator-text"> Amenities </span>
        <icon-base width="135" height="4" icon-name="scale">
          <icon-scale />
        </icon-base>
        <span class="hotel-reviews__indicator-num"> 5.0 </span>
      </li>
      <li class="hotel-reviews__indicator">
        <span class="hotel-reviews__indicator-text"> Hygiene </span>
        <icon-base width="135" height="4" icon-name="scale">
          <icon-scale />
        </icon-base>
        <span class="hotel-reviews__indicator-num"> 5.0 </span>
      </li>
      <li class="hotel-reviews__indicator">
        <span class="hotel-reviews__indicator-text"> Communication </span>
        <icon-base width="135" height="4" icon-name="scale">
          <icon-scale />
        </icon-base>
        <span class="hotel-reviews__indicator-num"> 5.0 </span>
      </li>
      <li class="hotel-reviews__indicator">
        <span class="hotel-reviews__indicator-text"> Location of Property </span>
        <icon-base width="135" height="4" icon-name="scale">
          <icon-scale />
        </icon-base>
        <span class="hotel-reviews__indicator-num"> 5.0 </span>
      </li>
      <li class="hotel-reviews__indicator">
        <span class="hotel-reviews__indicator-text"> Value for Money </span>
        <icon-base width="135" height="4" icon-name="scale">
          <icon-scale />
        </icon-base>
        <span class="hotel-reviews__indicator-num"> 5.0 </span>
      </li>
    </ul>

    <div class="hotel-reviews__wrap">
      <ul class="list-reset hotel-reviews__items">
        <hotel-reviews-list v-if="!isAllReviews" :reviews="limitReviews" />
        <hotel-reviews-list v-if="isAllReviews" :reviews="allReviews" />
      </ul>
    </div>

    <button
      class="btn-reset btn btn__hotel"
      v-show="!isAllReviews"
      @click="showAllReviews"
    >
      Show All {{ reviewsLength }} Reviews
    </button>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase.vue";
import IconStar from "@/components/icons/IconStar.vue";
import IconScale from "@/components/icons/IconScale.vue";
import HotelReviewsList from "@/pages/HotelPage/HotelReviewsList.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    IconBase,
    IconStar,
    IconScale,
    HotelReviewsList,
  },

  data() {
    return {
      isAllReviews: false,
    };
  },

  computed: {
    ...mapState({
      limitReviews: (state) => state.hotel.hotelData.reviews.slice(0, 4),
      allReviews: (state) => state.hotel.hotelData.reviews,
      reviewsLength: (state) => state.hotel.hotelData.reviews.length,
    }),
  },

  methods: {
    showAllReviews() {
      this.isAllReviews = true;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/hotel-reviews.scss";
@import "@/assets/styles/components/review.scss";
</style>
