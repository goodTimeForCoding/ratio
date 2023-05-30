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
          <SvgSprite symbol="subscription" size="24 25" />
        </span>
      </button>
    </div>
  </form>
</template>

<script>
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
};
</script>

<style scoped lang="scss">
.footer-form {
  @include flex-v-center;
  max-width: 1000px;
  padding-top: 33px;
  padding-bottom: 33px;
  margin-left: auto;
  margin-right: auto;

  &__caption {
    font-weight: 700;
    font-size: 18px;
    line-height: 29px;
  }

  &__right {
    position: relative;
  }

  &__left {
    margin-right: 80px;
  }

  &__text {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }

  &__input {
    border: 1px solid #e8eaec;
    border-radius: 26px;
    padding-left: 22px;
    width: 794px;
    height: 52px;
    background: white;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    &::placeholder {
      color: #9a9a9a;
      letter-spacing: 1px;
    }
  }

  &__btn-icon {
    display: inline-block;
    width: 28px;
    height: 28px;
    text-align: right;
  }

  &__btn {
    cursor: pointer;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 52px;
    background-color: #9a9a9a;
    color: #fff;
    border-radius: 10em;
    border: none;
    transition: background-color 0.5s ease;

    &:hover,
    &:focus {
      background-color: #757575;
    }

    &:active {
      background-color: #545454;
    }
  }

  @include minidesk {
    &__right {
      flex-grow: 1;
    }

    &__input {
      width: 100%;
      min-width: 280px;
    }
  }

  @include minitablet {
    flex-wrap: wrap;
    gap: 30px;
  }
}
</style>
