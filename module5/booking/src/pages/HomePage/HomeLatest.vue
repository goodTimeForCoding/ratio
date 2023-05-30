<template>
  <section class="latest">
    <h2 class="title title--decore latest__header">Latest on the Property Listing</h2>
    <div class="latest__cards">
      <div
        class="latest__card"
        v-for="item in allLatest"
        :key="item.id"
        :style="{ backgroundImage: 'url(' + item.image + ')' }"
      >
        <router-link class="latest__link" :to="`/hotel/${item._id}`">
          <div class="latest__card-wrap">
            <button class="btn-reset latest__like" type="button">
              <SvgSprite symbol="like" size="30 27" class="latest__like-icon" />
            </button>
            <img class="latest__small-img" :src="item.author.avatar" alt="avatar" />
            <h3 class="latest__card-title">{{ item.name }}</h3>
            <span class="latest__card-address">{{ item.address }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      allLatest: "latest/all",
    }),
  },
};
</script>

<style scoped lang="scss">
.latest {
  &__header {
    margin-bottom: 100px;
  }

  &__like-icon {
    fill: none;
  }

  &__cards {
    @include flex-all-sb;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 30px;
    column-gap: 15px;
  }

  &__card {
    padding-top: 20px;
    padding-right: 19px;
    padding-bottom: 13px;
    padding-left: 21px;
    background-color: #e0e2e6;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 8px;
    width: 350px;
    min-height: 340px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__card-wrap {
    display: flex;
    flex-direction: column;
  }

  &__like {
    align-self: flex-end;
    margin-bottom: 121px;
  }

  &__card-title {
    margin: 0;
    padding-top: 16px;
    font-weight: 700;
    font-size: 17px;
    color: #484848;
  }

  &__card-address {
    font-weight: 500;
    font-size: 13px;
    line-height: 26px;
    color: #9a9a9a;
  }

  &__small-img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  @include middledesk {
    &__card {
      width: 279px;
    }
  }

  @include minidesk {
    &__cards {
      gap: 70px;
    }

    &__card {
      width: 310px;
    }
  }
}
</style>
