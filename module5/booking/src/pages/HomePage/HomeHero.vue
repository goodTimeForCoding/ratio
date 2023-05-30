<template>
  <section class="hero" :style="{ backgroundImage: 'url(' + data.image + ')' }">
    <div class="container">
      <h1 class="visually-hidden">Booking hotels</h1>
      <home-form />
    </div>
  </section>
</template>

<script>
import HomeForm from "@/pages/HomePage/HomeForm.vue";
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    HomeForm,
  },
};
</script>

<style scoped lang="scss">
.hero {
  padding-top: 312px;
  padding-bottom: 79px;
  background-color: #9a9a9a;
  background-image: url("~@/assets/images/hero-img.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @include tablet {
    padding-top: 80px;
  }
}
</style>
