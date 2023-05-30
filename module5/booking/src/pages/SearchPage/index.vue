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
.search {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  max-width: 1920px;
  margin: 0 auto;

  &__title {
    margin: 0;
    margin-bottom: 116px;
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 24px;
    color: #484848;
  }

  &__text {
    margin: 0;
    margin-top: 213px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #484848;
  }

  &__left {
    padding-left: 82px;
    margin-top: 84px;
    margin-bottom: 80px;

    @include minitablet {
      padding: 0 15px;
    }
  }

  &__right {
    position: relative;
    width: 670px;
    height: 755px;
  }

  &__small-featured-wrap {
    position: absolute;
  }

  @include minidesk {
    flex-wrap: wrap;
    &__right {
      width: 100%;
    }
    &__left {
      margin-bottom: 10px;
    }
    &__text {
      margin-top: 5px;
    }
    &__title {
      margin-bottom: 40px;
    }
  }
}
</style>
