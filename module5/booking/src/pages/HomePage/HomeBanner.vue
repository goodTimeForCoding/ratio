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
.banner {
  background-color: #9a9a9a;
  background-image: url("~@/assets/images/banner-bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 12px;
  padding-left: 52px;
  padding-top: 70px;
  padding-bottom: 160px;

  &__title {
    font-size: 39px;
    line-height: 52px;
    padding-bottom: 5px;
  }

  &__descr {
    font-weight: 500;
    font-size: 16px;
    line-height: 52px;
    color: #9a9a9a;
  }

  @include minitablet {
    &__title {
      font-size: 33px;
    }
  }
}
</style>
