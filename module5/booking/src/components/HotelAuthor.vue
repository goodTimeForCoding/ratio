<template>
  <div
    class="hotel-author"
    :class="{ 'hotel-author__search': hotelAuthorType === 'search' }"
  >
    <div class="hotel-author__avatar-wrap">
      <img
        class="hotel-author__avatar"
        :src="`${data.author.avatar}`"
        alt="small img"
        width="76"
        height="76"
      />
    </div>
    <div class="hotel-author__author-info">
      <p class="hotel-author__listed">Listed&nbsp;By:</p>
      <p class="hotel-author__author-name">John Doberman</p>
      <p class="hotel-author__price">For: {{ data.price[0] }} - {{ data.price[1] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    hotelAuthorType: "search" | "hotel",
  },
};
</script>

<style scoped lang="scss">
.hotel-author {
  @include flex-v-center;
  position: absolute;
  bottom: 51px;
  left: 64px;

  &__search {
    bottom: 41px;
    left: 23px;
  }

  &__avatar-wrap {
    margin-right: 22px;
  }

  &__avatar {
    width: 76px;
    height: 76px;
    border-radius: 50%;
  }

  &__author-info {
    color: #484848;
  }

  &__listed {
    margin: 0;
    margin-bottom: 3px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }

  &__author-name {
    margin: 0;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  }

  &__price {
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.3px;
  }

  @include minitablet {
    &__avatar {
      width: 60px;
      height: 60px;
    }

    &__author-name {
      font-size: 16px;
    }

    &__price {
      font-size: 14px;
    }
  }
}
</style>
