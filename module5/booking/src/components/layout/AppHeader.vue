<template>
  <div class="header__container container">
    <router-link class="logo header__logo" to="/">
      <icon-base width="104" height="26" icon-name="logo">
        <icon-logo />
      </icon-base>
    </router-link>
    <HeaderNav />
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import IconBase from "@/components/icons/IconBase.vue";
import IconLogo from "@/components/icons/IconLogo.vue";
export default {
  components: {
    HeaderNav,
    IconBase,
    IconLogo,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/header.scss";
</style>
