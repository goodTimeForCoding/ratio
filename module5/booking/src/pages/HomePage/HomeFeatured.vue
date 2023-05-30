<template>
  <section class="featured">
    <h2 class="title title--decore featured__header">
      Featured Properties on our Listing
    </h2>

    <div class="featured__cards">
      <hotel-card
        v-for="card in allFeatured"
        :key="card._id"
        :hotelData="card"
        cardType="featured"
        class="featured__card"
      />
    </div>
  </section>
</template>

<script>
import HotelCard from "@/components/HotelCard.vue";

export default {
  props: {
    allFeatured: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    HotelCard,
  },
};
</script>

<style scoped lang="scss">
.featured {
  &__header {
    margin-bottom: 62px;
  }

  &__cards {
    @include flex-all-sb;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 54px;
    column-gap: 15px;
  }

  &__card {
    max-width: 455px;
  }

  @include middledesk {
    &__card {
      width: 382px;
    }
  }

  @include minitablet {
    &__card {
      width: 100%;
    }
  }
}
</style>
