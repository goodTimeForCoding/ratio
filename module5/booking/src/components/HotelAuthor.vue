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
@import "@/assets/styles/components/hotel-author.scss";
</style>
