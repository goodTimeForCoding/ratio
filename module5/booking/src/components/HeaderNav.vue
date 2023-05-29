<template>
  <nav class="nav" :class="{ 'nav--closed': isNavClosed, 'nav--opened': isNavOpened }">
    <button
      class="button nav__toggle"
      @click="(isNavClosed = !isNavClosed), (isNavOpened = !isNavOpened)"
      type="button"
    >
      <span class="visually-hidden">Открыть меню</span>
    </button>
    <ul class="nav__list list-reset">
      <li class="nav__item" v-for="(menu, index) in headerMenuList" :key="index">
        <router-link class="nav__link" :to="menu.path">
          {{ menu.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
const headerLinks = [
  { name: "Find a Property", path: "/property" },
  { name: "Share Stories", path: "/stories" },
  { name: "Rental Guides", path: "/guides" },
  { name: "Download Mobile App", path: "/app" },
];
export default {
  data() {
    return {
      headerMenuList: headerLinks,
      isNavClosed: true,
      isNavOpened: false,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/navigation.scss";
</style>
