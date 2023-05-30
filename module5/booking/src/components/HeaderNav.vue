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
.nav {
  position: relative;

  &__item {
    &:not(:last-child) {
      margin-right: 32px;
    }
  }

  &__link {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #484848;
    transition: color 0.3s ease;

    &:hover {
      color: #9a9a9a;
    }

    &:active {
      color: black;
    }
  }

  &__toggle {
    position: relative;
    margin: 0;
    padding: 0;
    display: none;
    width: 48px;
    height: 48px;
    align-self: center;
    background-color: transparent;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease;

    &:hover,
    &:active {
      background-color: #e0e2e6;
    }

    @include tablet {
      display: block;
    }
  }

  &__toggle::before {
    content: "";
    position: absolute;
    top: 12px;
    left: 6px;
    width: 36px;
    height: 4px;
    background-color: #9a9a9a;
    box-shadow: 0 10px 0 0 #9a9a9a, 0 20px 0 0 #9a9a9a;
  }

  &__toggle:active::before {
    background-color: #484848;
    box-shadow: 0 10px 0 0 #484848, 0 20px 0 0 #484848;
  }

  &--closed &__list {
    @include flex-v-center;

    @include tablet {
      display: none;
    }
  }

  &--opened &__list {
    @include flex-v-center;

    @include tablet {
      position: absolute;
      margin: 0;
      top: 68px;
      right: 0;
      flex-wrap: wrap;
      z-index: 2;
    }
  }

  /*в nav добавим класс .main-nav--opened, тогда нарисуется крестик*/

  &--opened &__toggle {
    top: 0;
    right: auto;
    left: 0;

    /*псевдоэлементы полосок крестика*/
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 21px;
      left: 6px;
      width: 36px;
      height: 4px;
      background-color: #9a9a9a;
    }

    /*поворачиваем одну из полосок на 45, другую на -45*/
    &::before {
      transform: rotate(45deg);
      box-shadow: none;
    }

    &::after {
      transform: rotate(-45deg);
    }

    &:active::before,
    &:active::after {
      background-color: #484848;
    }
  }

  @include tablet {
    &__item {
      display: block;
      text-align: center;

      &:not(:last-child) {
        margin-right: 0px;
      }
    }

    &__link {
      box-sizing: content-box;
      text-decoration: none;
      color: black;
      position: relative;
      display: block;
      width: 197px;
      padding-left: 153px;
      padding-right: 153px;
      padding-bottom: 20px;
      padding-top: 20px;
      background-color: #b6b6b6;
      border-top: 1px solid #7a7a7a;
      border-bottom: 1px solid #3f3f3f;
    }
  }

  @include minitablet {
    &__link {
      padding-left: 50px;
      padding-right: 50px;
    }
  }
}
</style>
