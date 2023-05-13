<template v-if="center && markers">
  <GMapMap
    :center="center"
    :zoom="5"
    map-type-id="terrain"
    style="width: 100%; height: 100%"
  >
    <GMapCluster :zoomOnClick="true">
      <GMapMarker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  methods: {
    ...mapActions({
      fetchCoordsData: "coords/fetchCoordsData",
    }),
  },

  //получаем координаты из полного контента по ID отеля
  created() {
    this.fetchCoordsData();
  },

  computed: {
    ...mapGetters({
      center: "coords/center",
      markers: "coords/markers",
      isCoordsDataLoading: "coords/isCoordsDataLoading",
    }),
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
