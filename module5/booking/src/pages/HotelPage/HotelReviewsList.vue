<template>
  <li class="hotel-reviews__item review" v-for="(item, index) in reviews" :key="index">
    <div class="review__author">
      <div class="review__avatar-wrap">
        <img
          class="review__avatar"
          :src="`${item.author.avatar}`"
          :alt="`${item.author.name} ${item.author.surname}`"
        />
      </div>
      <div class="review__author-info">
        <p class="review__author-name">
          {{ item.author.name }} {{ item.author.surname }}
        </p>
        <p class="review__date">
          {{ getNewDate(item.date) }}
        </p>
      </div>
    </div>
    <p class="review__text">
      {{ item.content }}
    </p>
  </li>
</template>

<script>
import moment from "moment";

export default {
  props: {
    reviews: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    getNewDate(date) {
      const newDate = moment(date).format("MMM D YYYY");
      return newDate;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/hotel-reviews.scss";
@import "@/assets/styles/components/review.scss";
</style>
