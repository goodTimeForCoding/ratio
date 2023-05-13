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
@import "@/assets/styles/components/hotel-descr.scss";
</style>
