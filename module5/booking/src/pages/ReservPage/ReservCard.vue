<template>
  <div class="reserv-card">
    <div class="reserv-card__wrap">
      <div class="reserv-card__wrap-right">
        <h2 class="reserv-card__title">{{ all.name }}</h2>
        <small class="reserv-card__address">{{ all.address }}</small>
        <ul class="list-reset reserv-card__proprties">
          <li class="reserv-card__proprty">{{ all.info[0].bedroom }} Bedroom</li>
          <li class="reserv-card__proprty">{{ all.info[0].bathroom }} Bathroom</li>
          <li class="reserv-card__proprty">1 Parking</li>
        </ul>
      </div>
      <div class="reserv-card__img-wrap">
        <img class="reserv-card__img" :src="`${all.image}`" alt="main image" />
      </div>
    </div>
    <h2 class="reserv-card__title reserv-card__title--bottom">Price Details</h2>
    <ul class="list-reset reserv-card__price-details">
      <li class="reserv-card__price-detail">Short Period: $ 1000</li>
      <li class="reserv-card__price-detail">Medium Period: $ 2000</li>
      <li class="reserv-card__price-detail">Long Period: $ 2000</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      all: "hotel/all",
    }),
  },
};
</script>

<style scoped lang="scss">
.reserv-card {
  width: 481px;
  padding: 32px 24px 46px 33px;
  background: #eff0f2;
  border-radius: 10px;

  &__wrap {
    @include flex-v-center;
    column-gap: 20px;
  }

  &__wrap-right {
    align-self: self-start;
    order: 1;
  }

  &__title {
    font-weight: 700;
    font-size: 16px;
    color: #484848;
    margin-bottom: 2px;
    font-size: 16px;
    margin: 0;
    margin-top: 8px;
    margin-bottom: 5px;

    &--bottom {
      margin-top: 42px;
      margin-bottom: 20px;
      font-size: 18px;
    }
  }

  &__address {
    display: block;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #9a9a9a;
    padding-bottom: 12px;
    border-bottom: 1px solid #e0e2e6;
  }

  &__proprties {
    display: flex;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #9a9a9a;
    margin-top: 12px;
  }

  &__proprty {
    margin-right: 18px;
  }

  &__img-wrap {
    width: 114px;
    height: 100px;
    border-radius: 6px;
  }

  &__img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }

  &__price-details {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #9a9a9a;
  }

  &__price-detail {
    margin-bottom: 10px;
  }

  @include minitablet {
    width: 100%;
    padding: 30px;

    &__wrap {
      display: block;
      text-align: center;
    }

    &__proprties {
      display: block;
    }

    &__proprty {
      margin: 0;
      margin-bottom: 7px;
    }

    &__title {
      text-align: center;
    }

    &__price-detail {
      text-align: center;
    }

    &__img-wrap {
      margin: 0 auto;
    }
  }
}
</style>
