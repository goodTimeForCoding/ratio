<template>
  <div v-if="`${$route.path}` !== '/search'">
    <div class="footer__form-wrap">
      <footer-form />
    </div>

    <div class="footer__main">
      <div class="footer__info">
        <router-link to="/">
          <SvgSprite symbol="footer-logo" size="151 45" class="logo footer__logo" />
        </router-link>
        <p class="footer__descr">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="footer__store-wrap">
          <a class="btn btn__app-link footer__playstore" href="https://play.google.com">
            PlayStore
          </a>
          <a
            class="btn btn__app-link footer__appstore"
            href="https://www.apple.com/ru/app-store/"
          >
            AppleStore
          </a>
        </div>
      </div>
      <div class="footer__about">
        <h3 class="footer__title">COMPANY</h3>
        <ul class="footer__list list-reset">
          <li class="footer__item" v-for="(menu, index) in companyList" :key="index">
            <router-link class="footer__link" :to="menu.path">
              {{ menu.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="footer__help">
        <h3 class="footer__title">HELP CENTER</h3>
        <ul class="footer__list list-reset">
          <li class="footer__item" v-for="(menu, index) in helpList" :key="index">
            <router-link class="footer__link" :to="menu.path">
              {{ menu.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="footer__contact">
        <h3 class="footer__title">CONTACT INFO</h3>
        <ul class="footer__list list-reset">
          <li class="footer__item">
            Phone:
            <a href="tel:1234567890" class="footer__link">1234567890</a>
          </li>
          <li class="footer__item">
            Email:
            <a href="mailto:company@email.com" class="footer__link">company@email.com</a>
          </li>
          <li class="footer__item">
            <a
              class="footer__link"
              href="https://yandex.ru/maps/-/CCUWMQQQXB"
              target="_blank"
              >Location: 100 Smart Street, LA, USA</a
            >
          </li>
          <li class="footer__item footer__item--socials">
            <ul class="list-reset footer__socials socials">
              <li class="social__item">
                <a href="https://facebook.com/" class="social__link">
                  <SvgSprite symbol="facebook" size="24" class="social__icon" />
                </a>
              </li>
              <li class="social__item">
                <a href="https://twitter.com/" class="social__link">
                  <SvgSprite symbol="twitter" size="27" class="social__icon" />
                </a>
              </li>
              <li class="social__item">
                <a href="https://www.instagram.com/" class="social__link">
                  <SvgSprite symbol="instagram" size="24" class="social__icon" />
                </a>
              </li>
              <li class="social__item">
                <a href="https://linkedin.com/" class="social__link">
                  <SvgSprite symbol="linkedin" size="24" class="social__icon" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom-wrap">
        <small class="footer__copyright-text"
          >&copy;&nbsp;2022 thecreation.design&nbsp;| All rights raserved</small
        >
        <small class="footer__copyright-text"
          >Created with love by&nbsp;thecreation.design</small
        >
      </div>
    </div>
  </div>
</template>

<script>
import FooterForm from "@/components/FooterForm.vue";

const companyLinks = [
  { name: "About Us", path: "/about" },
  { name: "Legal Information", path: "/information" },
  { name: "Contact Us", path: "/contacts" },
  { name: "Blogs", path: "/blogs" },
];

const helpLinks = [
  { name: "Find a Property", path: "/property" },
  { name: "How To Host?", path: "/how-to-host" },
  { name: "Why Us? ", path: "/why-us" },
  { name: "FAQs", path: "/faqs" },
  { name: "Rental Guides", path: "/guides" },
];

export default {
  data() {
    return {
      companyList: companyLinks,
      helpList: helpLinks,
    };
  },
  components: {
    FooterForm,
  },
};
</script>

<style scoped lang="scss">
.footer {
  color: #484848;
  background-color: #eff0f2;

  &__form-wrap {
    background-color: #e8eaec;
    padding: 0 5.85%;
  }

  &__main {
    display: flex;
    flex-wrap: wrap;
    column-gap: 48px;
    row-gap: 60px;
    padding: 82px 5.85% 196px;
  }

  &__info {
    display: flex;
    flex-wrap: wrap;
    width: 382px;
  }

  &__logo {
    width: 151px;
    margin-bottom: 29px;
    fill: #484848;

    &:hover,
    &:focus {
      fill: #000000;
    }
  }

  &__descr {
    margin: 0 0 46px;
    width: 100%;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    color: #9a9a9a;
    max-width: 382px;
  }

  &__store-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
  }

  &__playstore:before {
    content: "";
    position: absolute;
    left: 30px;
    top: 12px;
    width: 22px;
    height: 22px;
    background-image: url("~@/assets/images/playstore.svg");
    background-size: 22px 22px;
  }

  &__appstore {
    padding-left: 60px;
    padding-right: 27px;
  }

  &__appstore:before {
    content: "";
    position: absolute;
    left: 21px;
    top: 11px;
    width: 24px;
    height: 24px;
    background-image: url("~@/assets/images/appstore.svg");
    background-size: 24px 24px;
  }

  &__about {
    width: 153px;
  }

  &__item {
    margin-bottom: 14px;
    cursor: pointer;

    &--socials {
      margin-top: 35px;
    }
  }

  &__title {
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 28px;
  }

  &__link {
    font-weight: 500;
    font-size: 15px;
    color: #484848;
    transition: color 0.3s ease;

    &:hover {
      color: #9a9a9a;
    }

    &:active {
      color: black;
    }
  }

  &__help {
    width: 153px;
  }

  &__contact {
    margin-left: 10px;
    width: 303px;
  }

  &__socials {
    display: flex;
  }

  &__bottom {
    padding: 40px 5.85% 42px;
    border-top: 1px solid #e0e2e6;
  }

  &__bottom-wrap {
    @include flex-all-sb;
    gap: 30px;
    flex-wrap: wrap;
  }

  &__copyright-text {
    font-weight: 600;
    font-size: 16px;
  }

  @include minidesk {
    &__main {
      justify-content: space-between;
      column-gap: 20px;
      padding-top: 30px;
      padding-bottom: 30px;
    }

    &__info {
      width: 260px;
    }

    &__about {
      width: auto;
    }

    &__help {
      width: auto;
    }

    &__contact {
      width: 270px;
    }

    &__contact {
      margin-left: 0px;
    }

    &__playstore {
      margin-right: 0px;
      width: 175px;
    }

    &__appstore {
      width: 175px;
    }
  }

  @include tablet {
    &__main {
      column-gap: 35px;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    &__info {
      width: 380px;
    }
  }

  @include minitablet {
    &__main {
      column-gap: 15px;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    &__info {
      display: block;
      width: auto;
      min-width: 260px;
      grid-column-start: 1;
      grid-column-end: 3;
    }

    &__about {
      width: 135px;
    }

    &__contact {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    &__copyright-text {
      font-size: 11px;
    }
  }
}

.social {
  & {
    @include flex-v-center;
  }

  &__item {
    margin: 0;
    margin-right: 24px;
  }

  &__item:last-child {
    margin-right: 0;
  }

  &__link {
    display: block;
  }

  &__icon {
    fill: #484848;
  }

  &__icon:hover,
  &__icon:focus {
    fill: #000000;
  }
}
</style>
