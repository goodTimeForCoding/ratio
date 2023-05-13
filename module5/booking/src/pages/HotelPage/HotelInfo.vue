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
            <icon-base width="36" height="32" iconColor="none" icon-name="like">
              <icon-big-like />
            </icon-base>
          </div>
          <div class="hotel-info__shared-icon">
            <icon-base width="33" height="35" iconColor="none" icon-name="shared">
              <icon-share />
            </icon-base>
          </div>
        </div>
      </div>
      <ul class="list-reset hotel-info__properties">
        <li class="hotel-info__property">
          <div class="hotel-info__property-icon">
            <icon-base width="47" height="36" iconColor="none" icon-name="big bed">
              <icon-big-bed />
            </icon-base>
          </div>
          <p class="hotel-info__property-text">{{ data.info[0].bedroom }} Bedrooms</p>
        </li>
        <li class="hotel-info__property">
          <div class="hotel-info__property-icon">
            <icon-base width="36" height="36" icon-name="big bath">
              <icon-big-bath />
            </icon-base>
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
import IconBase from "@/components/icons/IconBase.vue";
import IconBigLike from "@/components/icons/IconBigLike.vue";
import IconShare from "@/components/icons/IconShare.vue";
import IconBigBed from "@/components/icons/IconBigBed.vue";
import IconBigBath from "@/components/icons/IconBigBath.vue";
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    IconBase,
    IconBigLike,
    IconBigBed,
    IconBigBath,
    IconShare,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/hotel-info.scss";
</style>
