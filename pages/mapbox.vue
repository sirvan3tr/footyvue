<template lang="pug">
div#mapContainer.basemap
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  data () {
    return {
      accessToken: 'pk.eyJ1Ijoic2lydmFuM3RyIiwiYSI6ImNqcDhkc3VjbjFhenQzcG8zdGMxdnZxbHIifQ.1IHHhdnTN3Zt4TfZYJGJBA',
    };
  },
  mounted () {
    mapboxgl.accessToken = this.accessToken;
    /* eslint-disable no-new */
    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/navigation-night-v1",
      center: [103.811279, 1.345399],
      zoom: 12,
      maxBounds: [
        [103.6, 1.1704753],
        [104.1, 1.4754753],
      ]
    })
  }
}
</script>

<style scoped>
.basemap {
  width: 100%;
  height: 100vh;
}
</style>
