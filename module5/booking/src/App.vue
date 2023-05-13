<template>
  <app-container>
    <template v-slot:header>
      <app-header />
    </template>
    <router-view />
    <template v-slot:footer>
      <app-footer />
    </template>
  </app-container>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import AppContainer from "@/components/layout/AppContainer.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    AppContainer,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/global/global.scss";
</style>
