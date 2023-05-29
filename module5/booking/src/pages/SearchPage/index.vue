<template>
  <div v-if="!isSearchDataLoading">
    <div class="search">
      <div class="search__left">
        <h2 class="search__title">{{ searchCards.length }} Results Found</h2>
        <hotel-card
          v-for="card in searchCards"
          :key="card._id"
          :hotelData="card"
          cardType="search"
        />
        <p class="search__text">Other as per found results...</p>
      </div>
      <div class="search__right">
        <component-with-map-new v-if="searchCards" />
      </div>
    </div>
  </div>

  <div v-else>
    <h1>Идёт загрузка...</h1>
  </div>
</template>

<script>
import HotelCard from "@/components/HotelCard.vue";
import ComponentWithMapNew from "@/components/common/ComponentWithMapNew.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    HotelCard,
    ComponentWithMapNew,
  },

  computed: {
    ...mapState({
      isSearchDataLoading: (state) => state.search.isSearchDataLoading,
    }),
    ...mapGetters({
      searchCards: "search/all",
    }),
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/search.scss";
</style>
