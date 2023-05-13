<template>
  <li class="hotel-amenities__item" v-for="(item, index) in amenities" :key="index">
    <img width="28" height="28" :src="`${item.icon}`" />
    <span class="hotel-amenities__item-text">{{ item.name }}</span>
  </li>
</template>
<script>
export default {
  props: {
    amenities: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/styles/components/hotel-amenities.scss";
</style>
