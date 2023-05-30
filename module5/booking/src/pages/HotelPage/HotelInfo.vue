<template>
  <div class="hotel-info">
    <div class="hotel-info__main">
      <div class="hotel-info__title-wrap">
        <div class="hotel-info__title-left">
          <h1 class="hotel-info__title">{{ data.name }}</h1>
          <small class="hotel-info__address">{{ data.address }}</small>
        </div>
        <div class="hotel-info__icons">
          <div class="hotel-info__like-icon">
            <SvgSprite
              symbol="big-like"
              size="36 32"
              class="hotel-info__like-icon-cust"
            />
          </div>
          <div class="hotel-info__shared-icon">
            <SvgSprite symbol="share" size="33 35" class="hotel-info__share-icon-cust" />
          </div>
        </div>
      </div>
      <ul class="list-reset hotel-info__properties">
        <li class="hotel-info__property">
          <div class="hotel-info__property-icon">
            <SvgSprite symbol="big-bed" size="47 36" />
          </div>
          <p class="hotel-info__property-text">{{ data.info[0].bedroom }} Bedrooms</p>
        </li>
        <li class="hotel-info__property">
          <div class="hotel-info__property-icon">
            <SvgSprite symbol="big-bath" size="36" />
          </div>
          <p class="hotel-info__property-text">{{ data.info[0].bathroom }} Bathrooms</p>
        </li>
      </ul>
    </div>
    <div class="hotel-info__price-wrap">
      <div class="hotel-info__price-info">
        <p class="hotel-info__price">
          $ {{ data.price[0].substring(1) }} - $ {{ data.price[1].substring(1) }}
        </p>

        <button
          class="btn-reset btn btn__reserv hotel-info__btn"
          @click="$router.push('/reserv')"
          type="button"
        >
          Reserve Now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped lang="scss">
.hotel-info {
  @include flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  &__main {
    min-width: 750px;
  }

  &__title-wrap {
    @include flex;
    justify-content: space-between;
  }

  &__title {
    margin: 0;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: #484848;
  }

  &__address {
    display: inline-block;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #9a9a9a;
  }

  &__properties {
    margin-top: 53px;
    @include flex;
    gap: 14px;
    flex-wrap: wrap;
  }

  &__property {
    @include flex-column-center;
    justify-content: center;
    width: 176px;
    height: 160px;
    background-color: #eff0f2;
    border-radius: 8px;
  }

  &__property-text {
    margin: 0;
    margin-top: 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #484848;
  }

  &__icons {
    @include flex-all-sb;
    padding-right: 15px;
    width: 103px;
  }

  &__like-icon-cust,
  &__share-icon-cust {
    fill: none;

    &:hover,
    &:focus {
      fill: #585858;
      cursor: pointer;
    }

    &:active {
      fill: black;
    }
  }

  &__shared-icon {
    left: 5px;
  }

  &__price-info {
    width: 382px;
    padding: 28px 32px;
    margin-top: 10px;
    box-shadow: 0px 0px 16px rgba(194, 198, 204, 0.6);
    border-radius: 10px;
  }

  &__btn {
    padding: 20px 104px 20px 104px;
    margin: 0;
    margin-top: 27px;
    width: 324px;
    transition: background-color 0.5s ease;

    &:hover,
    &:focus {
      background-color: #333333;
    }

    &:active {
      background-color: #1f1f1f;
    }
  }

  &__price {
    margin: 0;
    padding-bottom: 25px;
    border-bottom: 1px solid #e0e2e6;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    color: #484848;
  }

  @include minitablet {
    &__title-wrap {
      justify-content: start;
      column-gap: 30px;
    }

    &__main {
      min-width: auto;
    }

    &__price-info {
      margin: 0 auto;
      width: auto;
      padding: 20px;
    }

    &__btn {
      width: 230px;
      padding: 20px 40px;
    }
  }

  @include minitablet {
    &__title-wrap {
      flex-wrap: wrap;
      gap: 20px;
    }
  }
}
</style>
