<template>
  <div
    v-if="
      !isBannerLoading && !isLatestLoading && !isFeaturedLoading && !isLocationLoading
    "
  >
    <home-hero :data="main" />
    <div class="latest-wrap container">
      <home-latest />
    </div>
    <div class="container">
      <home-banner :data="second" />
    </div>
    <div class="featured-wrap container">
      <home-featured :allFeatured="allFeatured" />
    </div>
    <div class="banner-wrap container">
      <home-banner :data="last" />
    </div>
  </div>

  <div v-else>
    <h1>Идёт загрузка...</h1>
  </div>
</template>

<script>
import HomeHero from "@/pages/HomePage/HomeHero.vue";
import HomeLatest from "@/pages/HomePage/HomeLatest.vue";
import HomeBanner from "@/pages/HomePage/HomeBanner.vue";
import HomeFeatured from "@/pages/HomePage/HomeFeatured.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    HomeHero,
    HomeLatest,
    HomeBanner,
    HomeFeatured,
  },

  methods: {
    ...mapActions({
      fetchBannertData: "banner/fetchBannertData",
      fetchLatestData: "latest/fetchLatestData",
      fetchFeaturedData: "featured/fetchFeaturedData",
      fetchLocationData: "location/fetchLocationData",
    }),
  },

  created() {
    this.fetchBannertData();
    this.fetchLatestData();
    this.fetchFeaturedData();
    this.fetchLocationData();
  },

  computed: {
    ...mapState({
      isBannerLoading: (state) => state.banner.isBannerLoading,
      isLatestLoading: (state) => state.latest.isLatestLoading,
      isFeaturedLoading: (state) => state.featured.isFeaturedLoading,
      isLocationLoading: (state) => state.location.isLocationLoading,
    }),
    ...mapGetters({
      main: "banner/main",
      second: "banner/second",
      last: "banner/last",
      allFeatured: "featured/all",
    }),
  },
};
</script>

<style scoped lang="scss">
.latest-wrap {
  margin-top: 88px;
  margin-bottom: 46px;
}

.featured-wrap {
  margin-top: 24px;
  margin-bottom: 70px;
}

.banner-wrap {
  margin-bottom: 62px;
}
</style>
