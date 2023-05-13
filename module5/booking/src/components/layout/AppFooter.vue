<template>
  <div v-if="`${$route.path}` !== '/search'">
    <div class="footer__form-wrap">
      <footer-form />
    </div>

    <div class="footer__main">
      <div class="footer__info">
        <router-link to="/">
          <icon-base
            class="logo footer__logo"
            width="149"
            height="37"
            icon-name="logo big"
          >
            <icon-logo-big />
          </icon-base>
        </router-link>
        <p class="footer__descr">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="footer__store-wrap">
          <a class="btn btn__app-link footer__playstore" href="https://play.google.com"
            >PlayStore</a
          >
          <a
            class="btn btn__app-link footer__appstore"
            href="https://www.apple.com/ru/app-store/"
            >AppleStore</a
          >
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
                  <icon-base width="24" height="24" icon-name="facebook"
                    ><icon-facebook
                  /></icon-base>
                </a>
              </li>
              <li class="social__item">
                <a href="https://twitter.com/" class="social__link">
                  <icon-base width="27" height="24" icon-name="twitter"
                    ><icon-twitter
                  /></icon-base>
                </a>
              </li>
              <li class="social__item">
                <a href="https://www.instagram.com/" class="social__link">
                  <icon-base width="24" height="24" icon-name="instagram"
                    ><icon-instagram
                  /></icon-base>
                </a>
              </li>
              <li class="social__item">
                <a href="https://linkedin.com/" class="social__link">
                  <icon-base width="24" height="24" icon-name="linkedin"
                    ><icon-linkedin
                  /></icon-base>
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
import IconBase from "@/components/icons/IconBase.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import IconTwitter from "@/components/icons/IconTwitter.vue";
import FooterForm from "@/components/FooterForm.vue";
import IconLogoBig from "@/components/icons/IconLogoBig.vue";
import { companyLinks, helpLinks } from "@/constants/pageLinks";

export default {
  data() {
    return {
      companyList: companyLinks,
      helpList: helpLinks,
    };
  },
  components: {
    IconBase,
    IconFacebook,
    IconInstagram,
    IconLinkedin,
    IconTwitter,
    FooterForm,
    IconLogoBig,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/footer.scss";
@import "@/assets/styles/components/social.scss";
</style>
