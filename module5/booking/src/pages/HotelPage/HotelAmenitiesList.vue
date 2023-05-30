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
.hotel-amenities {
  &__title {
    margin: 0;
    margin-bottom: 28px;
    font-family: "Milliard";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #484848;
  }

  &__items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 16px;
    max-width: 672px;
    font-family: "Milliard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #484848;
  }

  &__item {
    display: flex;
    margin-bottom: 25px;
  }

  &__item-text {
    padding-left: 17px;
  }
}
</style>
