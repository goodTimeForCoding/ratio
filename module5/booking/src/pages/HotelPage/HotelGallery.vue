<template>
  <TransitionGroup
    name="gallery"
    class="gallery hotel__gallery"
    :class="{ 'gallery__all-img': isAllImg }"
    tag="section"
  >
    <div class="gallery__big-img-wrap">
      <img class="gallery__big-img" :src="`${data.image}`" alt="main image" />
      <hotel-author :data="data" />
    </div>
    <div class="gallery__small-img-wrap">
      <img class="gallery__small-img" :src="`${data.images[0]}`" alt="small img" />
    </div>
    <div class="gallery__small-img-wrap">
      <img class="gallery__small-img" :src="`${data.images[1]}`" alt="small img" />
    </div>
    <div class="gallery__small-img-wrap">
      <img class="gallery__small-img" :src="`${data.images[2]}`" alt="small img" />
    </div>
    <div
      class="gallery__small-img-wrap"
      :class="{ 'is-cursor': !isAllImg }"
      @click="isAllImg = true"
    >
      <img class="gallery__small-img" :src="`${data.images[3]}`" alt="small img" />
      <div class="gallery__more-wrap" v-if="!isAllImg">
        <div class="gallery__num-wrap">
          <p class="gallery__num">+{{ data.images.length - 4 }}</p>
        </div>
        <div class="gallery__more-info">
          <p class="gallery__more">More</p>
          <p class="gallery__photos">Photos</p>
        </div>
      </div>
    </div>
    <div
      class="gallery__small-img-wrap"
      v-if="isAllImg"
      v-for="(img, index) in data.images.slice(4, data.images.length)"
      :key="index"
    >
      <img class="gallery__small-img" :src="`${img}`" alt="small img" />
    </div>
  </TransitionGroup>
</template>

<script>
import HotelAuthor from "@/components/HotelAuthor.vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    HotelAuthor,
    Carousel,
    Pagination,
    Slide,
  },

  data() {
    return {
      isAllImg: false,
    };
  },
};
</script>

<style scoped lang="scss">
.gallery {
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  gap: 17px;
  grid-template-columns: 667px 1fr 1fr;
  grid-template-rows: 264px 264px;

  &__all-img {
    display: flex;
    flex-wrap: wrap;
  }

  &__all-img &__small-img-wrap {
    width: auto;
  }

  &__big-img-wrap {
    position: relative;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  &__small-img-wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .is-cursor:hover &__more-wrap {
    transition: color 0.5s ease;
    color: black;
  }

  &__big-img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
  }

  &__small-img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
  }

  &__more-wrap {
    @include flex-v-center;
    position: absolute;
    bottom: 101px;
    left: 75px;
    color: #484848;
  }

  &__more {
    margin: 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }

  &__num {
    margin: 0;
    margin-right: 17px;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
  }

  &__photos {
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  }

  @include minidesk {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    &__big-img-wrap {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  @include tablet {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px;

    &__more-wrap {
      left: 10px;
      bottom: 45px;
    }

    &__big-img-wrap {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  @include minitablet {
    &__num {
      margin-right: 10px;
      font-size: 29px;
    }

    &__photos {
      font-size: 16px;
    }

    &__more-wrap {
      bottom: 10px;
    }
  }
}

.is-cursor {
  cursor: pointer;
}

.gallery-move,
.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.5s ease;
}

.gallery-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.gallery-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
