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
.hotel-reviews {
  &__item {
    max-width: 360px;
  }
}

.review {
  &__avatar {
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }

  &__avatar-wrap {
    margin-right: 17px;
  }

  &__author {
    @include flex-v-center;
    margin-bottom: 15px;
  }

  &__author-name {
    margin: 0;
    font-weight: 700;
    font-size: 16px;
    color: #484848;
  }

  &__date {
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    color: #9a9a9a;
  }

  &__text {
    margin: 0;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #9a9a9a;
  }
}
</style>
