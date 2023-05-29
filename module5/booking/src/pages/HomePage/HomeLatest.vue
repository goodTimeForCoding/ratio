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
              <icon-base width="30" height="27" iconColor="none" icon-name="like"
                ><icon-like
              /></icon-base>
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
import IconBase from "@/components/icons/IconBase.vue";
import IconLike from "@/components/icons/IconLike.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    IconBase,
    IconLike,
  },

  computed: {
    ...mapGetters({
      allLatest: "latest/all",
    }),
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/latest.scss";
</style>
