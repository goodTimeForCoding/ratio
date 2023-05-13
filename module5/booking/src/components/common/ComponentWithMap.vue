<template>
  <GMapMap
    :center="center"
    :zoom="10"
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
export default {
  props: {
    coords: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      center: { lat: +this.coords[0].lat, lng: +this.coords[0].lng },
      markers: this.getMarkers(this.coords),
    };
  },

  methods: {
    getMarkers(coords) {
      const markersArr = [];
      coords.forEach((item) => {
        markersArr.push({
          position: {
            lat: +item.lat,
            lng: +item.lng,
          },
        });
      });
      return markersArr;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
