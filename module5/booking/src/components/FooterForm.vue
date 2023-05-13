<template>
  <form class="footer-form" action="#">
    <div class="footer-form__left">
      <span class="footer-form__caption">NEWSLETTER</span> <br />
      <span class="footer-form__text">Stay Upto Date</span>
    </div>
    <div class="footer-form__right">
      <label class="footer-form__field">
        <input
          class="footer-form__input"
          v-model="subForm.email"
          type="email"
          name="email"
          placeholder="Your Email..."
        />
      </label>
      <button class="btn-reset footer-form__btn" @click="subscribe" type="button">
        <span class="footer-form__btn-icon">
          <icon-base width="24" height="25" icon-name="subscription"
            ><icon-subscription
          /></icon-base>
        </span>
      </button>
    </div>
  </form>
</template>

<script>
import IconBase from "@/components/icons/IconBase.vue";
import IconSubscription from "@/components/icons/IconSubscription.vue";

export default {
  data() {
    return {
      subForm: {
        email: "",
      },
    };
  },
  methods: {
    subscribe() {
      alert(this.subForm.email + " вы подписались на рассылку");
    },
  },
  components: {
    IconBase,
    IconSubscription,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/footer-form.scss";
</style>
