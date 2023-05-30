<template>
  <div class="hotel-descr">
    <h2 class="hotel-descr__title">Apartment Description</h2>
    <p class="hotel-descr__text">
      {{ data.description[0] }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped lang="scss">
.hotel-descr {
  &__title {
    margin: 0;
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 22px;
    color: #484848;
  }

  &__text {
    margin: 0;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #9a9a9a;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
</style>
