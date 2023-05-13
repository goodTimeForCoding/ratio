<template>
  <section class="banner" :style="{ backgroundImage: 'url(' + data.image + ')' }">
    <h2 class="title banner__title">{{ data.title }}</h2>
    <small class="banner__descr">{{ data.description }} </small>
  </section>
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
@import "@/assets/styles/components/banner.scss";
</style>
