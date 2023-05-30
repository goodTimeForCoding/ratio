<template>
  <div class="header__container container">
    <router-link to="/">
      <SvgSprite symbol="header-logo" size="104 26" class="logo header__logo-icon" />
    </router-link>
    <HeaderNav />
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  components: {
    HeaderNav,
  },
};
</script>

<style scoped lang="scss">
.header {
  padding: 27px 0;
  background-color: #eff0f2;

  &__container {
    @include flex-v-center;
  }

  &__logo-icon {
    fill: #484848;
    margin-right: 133px;
    min-width: 108px;
  }

  &__logo-icon:hover,
  &__logo-icon:focus {
    fill: #000000;
  }

  @include tablet {
    padding: 20px 0;

    &__container {
      justify-content: space-between;
    }
  }
}
</style>
