<template>
  <div class="hotel-card" :class="{ 'hotel-card__search': cardType === 'search' }">
    <div class="hotel-card__top">
      <carousel>
        <slide v-for="(img, index) in hotelData.images" :key="index">
          <div class="carousel__item">
            <img class="carousel__img" :src="`${img}`" alt="hotel img" />
          </div>
        </slide>
        <template #addons>
          <button
            class="btn-reset hotel-card__like"
            :class="{ 'hotel-card__like--search': cardType === 'search' }"
            type="button"
          >
            <SvgSprite symbol="like" size="30 27" class="hotel-card__like-icon" />
          </button>
          <p class="hotel-card__price" v-if="cardType === 'featured'">
            $&nbsp; {{ hotelData.price[0].substring(1) }} -
            {{ hotelData.price[1].substring(1) }} &nbsp; USD
          </p>
          <pagination />
        </template>
      </carousel>
      <div class="hotel-card__author-wrap" v-if="cardType === 'search'">
        <hotel-author :data="hotelData" hotelAuthorType="search" />
      </div>
    </div>
    <router-link class="hotel-card__link" :to="`/hotel/${hotelData._id}`">
      <div :class="{ 'hotel-card__bottom-search': cardType === 'search' }">
        <p class="hotel-card__title">{{ hotelData.name }}</p>
        <small class="hotel-card__address"> {{ hotelData.address }} </small>
        <ul class="list-reset hotel-card__proprties">
          <li class="hotel-card__proprty">
            <SvgSprite symbol="bed" size="25 18" class="hotel-card__bed-icon" />
            &nbsp;{{ hotelData.info[0].bedroom }}
          </li>
          <li class="hotel-card__proprty">
            <SvgSprite symbol="bath" size="20" />
            &nbsp;{{ hotelData.info[0].bathroom }}
          </li>
        </ul>
        <div v-if="cardType === 'search'" class="hotel-card__more-info">
          <p class="hotel-card__type">Home Room on Rent</p>
          <p class="hotel-card__period">For Short Period: 3 - 5 Months</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import HotelAuthor from "@/components/HotelAuthor.vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

export default {
  props: {
    hotelData: {
      type: Object,
      default: () => {},
    },
    cardType: "featured" | "search",
  },

  components: {
    Carousel,
    Slide,
    Pagination,
    HotelAuthor,
  },
};
</script>

<style scoped lang="scss">
@import "vue3-carousel/dist/carousel.css";

.carousel {
  &__item {
    min-height: 338px;
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__pagination {
    position: absolute;
    bottom: 35px;
    left: 186px;
  }

  &__img {
    width: 100%;
    height: 344px;
    border-radius: 12px;
    object-fit: cover;
  }

  @include minitablet {
    &__pagination {
      left: 30%;
    }
  }
}

.hotel-card__search .carousel {
  &__item {
    margin-top: -16px;
  }

  &__img {
    height: 384px;
    border-radius: 16px;
    border-radius: 12px 12px 0 0;
  }

  &__pagination {
    left: 364px;
    bottom: 41px;
    @include minitablet {
      left: 15%;
      bottom: 21px;
    }
  }
}

.hotel-card {
  &__top {
    border-radius: 12px;
    position: relative;
  }

  &__like-icon {
    fill: none;
  }

  &__like-icon:hover,
  &__like-icon:focus {
    fill: #585858;
    cursor: pointer;
  }

  &__like-icon:active {
    fill: #000000;
  }

  &__bed-icon {
    fill: none;
  }

  &__search {
    box-shadow: 0px 0px 10px #e5e5e5;
    border-radius: 16px;
    width: 570px;
    margin-bottom: 77px;

    @include minitablet {
      width: 100%;
    }
  }

  &__bottom-search {
    padding-left: 28px;

    @include minitablet {
      padding: 5px;
    }
  }

  &__price {
    margin: 0;
    position: absolute;
    bottom: 30px;
    left: 23px;
    font-weight: 700;
    font-size: 18px;
    color: #9a9a9a;
  }

  &__like {
    position: absolute;
    top: 38px;
    right: 16px;

    &--search {
      top: 26px;
      right: 21px;
    }
  }

  &__title {
    margin: 0;
    margin-top: 13px;
    margin-bottom: 3px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #484848;
  }

  &__address {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #9a9a9a;
  }

  &__proprties {
    margin-top: 16px;
    @include flex-v-center;
  }

  &__proprty {
    display: flex;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #484848;
    margin-right: 25px;
    margin-left: 6px;
  }

  &__more-info {
    display: flex;
    margin-top: 20px;
    padding-bottom: 23px;
  }

  &__type,
  &__period {
    margin: 0;
    padding: 0;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #9a9a9a;
  }

  &__type {
    padding-right: 10px;
    border-right: 1px solid #e0e2e6;
  }

  &__period {
    padding-left: 10px;
  }

  @include minitablet {
    &__price {
      bottom: 60px;
    }
  }
}
</style>
