<template>
  <div class="hotel-reviews">
    <h2 class="hotel-reviews__title">
      Reviews
      <span class="hotel-reviews__title-icon">
        <SvgSprite symbol="star" size="20 20" />
      </span>
      5.0
    </h2>
    <ul class="list-reset hotel-reviews__indicators">
      <li class="hotel-reviews__indicator">
        <span class="hotel-reviews__indicator-text"> Amenities </span>
        <SvgSprite symbol="scale" size="135 4" />
        <span class="hotel-reviews__indicator-num"> 5.0 </span>
      </li>
      <li class="hotel-reviews__indicator">
        <span class="hotel-reviews__indicator-text"> Hygiene </span>
        <SvgSprite symbol="scale" size="135 4" />
        <span class="hotel-reviews__indicator-num"> 5.0 </span>
      </li>
      <li class="hotel-reviews__indicator">
        <span class="hotel-reviews__indicator-text"> Communication </span>
        <SvgSprite symbol="scale" size="135 4" />
        <span class="hotel-reviews__indicator-num"> 5.0 </span>
      </li>
      <li class="hotel-reviews__indicator">
        <span class="hotel-reviews__indicator-text"> Location of Property </span>
        <SvgSprite symbol="scale" size="135 4" />
        <span class="hotel-reviews__indicator-num"> 5.0 </span>
      </li>
      <li class="hotel-reviews__indicator">
        <span class="hotel-reviews__indicator-text"> Value for Money </span>
        <SvgSprite symbol="scale" size="135 4" />
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
import HotelReviewsList from "@/pages/HotelPage/HotelReviewsList.vue";
import { mapState } from "vuex";
export default {
  components: {
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
.hotel-reviews {
  max-width: 800px;

  &__title {
    margin: 0;
    margin-bottom: 27px;
    font-weight: 700;
    font-size: 22px;
    color: #484848;
  }

  &__title-icon {
    display: inline-block;
    vertical-align: middle;
    padding-left: 9px;
    padding-right: 9px;
  }

  &__indicator {
    @include flex-v-center;
    justify-content: space-between;
    margin-bottom: 16px;
    max-width: 366px;
  }

  &__indicators {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 16px;
    column-gap: 20px;
    width: 100%;
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 16px;
    color: #484848;
  }

  &__wrap {
    margin-top: 35px;
    margin-bottom: 48px;
  }

  &__indicator-text {
    flex-grow: 1;
  }

  &__indicator-num {
    margin-left: 12px;
  }

  &__items {
    @include flex;
    column-gap: 60px;
    row-gap: 40px;
    flex-wrap: wrap;
    max-width: 800px;
  }

  &__item {
    max-width: 360px;
  }

  @include minitablet {
    &__indicators {
      display: block;
      font-size: 11px;
    }
  }

  @include mobile {
    &__indicators {
      font-size: 11px;
    }
  }
}
</style>
