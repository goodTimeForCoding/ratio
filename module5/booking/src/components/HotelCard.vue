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
            <icon-base width="30" height="27" iconColor="none" icon-name="like">
              <icon-like />
            </icon-base>
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
            <icon-base width="25" height="17.25" iconColor="none" icon-name="bed"
              ><icon-bed /></icon-base
            >&nbsp; {{ hotelData.info[0].bedroom }}
          </li>
          <li class="hotel-card__proprty">
            <icon-base width="19.17" height="19" icon-name="bath"><icon-bath /></icon-base
            >&nbsp; {{ hotelData.info[0].bathroom }}
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
import IconBase from "@/components/icons/IconBase.vue";
import IconLike from "@/components/icons/IconLike.vue";
import IconBath from "@/components/icons/IconBath.vue";
import IconBed from "@/components/icons/IconBed.vue";
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
    IconBase,
    IconLike,
    IconBath,
    IconBed,
    Carousel,
    Slide,
    Pagination,
    HotelAuthor,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/hotel-card.scss";
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
    height: 338px;
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
</style>
