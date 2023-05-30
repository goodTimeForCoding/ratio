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
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  min-width: 320px;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

.carousel__pagination-button::after {
  background-color: white !important;
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
}

.carousel__pagination-button--active::after {
  background-color: black !important;
}
</style>
