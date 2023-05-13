<template>
  <section class="gallery hotel__gallery" :class="{ 'gallery__all-img': isAllImg }">
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
  </section>
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
@import "@/assets/styles/components/gallery.scss";
.is-cursor {
  cursor: pointer;
}
</style>
