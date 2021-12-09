<template lang="pug">
div
  div#mapContainer.basemap
  pre#info
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  data () {
    return {
      accessToken: 'pk.eyJ1Ijoic2lydmFuM3RyIiwiYSI6ImNqcDhkc3VjbjFhenQzcG8zdGMxdnZxbHIifQ.1IHHhdnTN3Zt4TfZYJGJBA',
      markers: []
    };
  },
  mounted () {
    mapboxgl.accessToken = this.accessToken;
    /* eslint-disable no-new */
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/navigation-night-v1",
      center: [103.811279, 1.345399],
      zoom: 12,
    })

    map.on('mousemove', (e) => {
      document.getElementById('info').innerHTML =
      // `e.point` is the x, y coordinates of the `mousemove` event
      // relative to the top-left corner of the map.
      JSON.stringify(e.point) +
      '<br />' +
      // `e.lngLat` is the longitude, latitude geographical position of the event.
      JSON.stringify(e.lngLat.wrap())
    })

    map.on('click', (e) => {
      const marker = new mapboxgl.Marker({
        draggable: true,
      })
        .setLngLat([e.lngLat.lng, e.lngLat.lat])
        .addTo(map)
      this.markers.push(marker)
    })


    // const coordinates = document.getElementById('coordinates')
    // function onDragEnd () {
    //   const lngLat = marker.getLngLat()
    //   coordinates.style.display = 'block'
    //   coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`
    // }
    // marker.on('dragend', onDragEnd)

  }
}
</script>

<style scoped>
.basemap {
  width: 100%;
  height: 100vh;
}

#info {
  display: table;
  position: absolute;
  top: 0;
  width:33%;
  margin: 0px auto;
  word-wrap: anywhere;
  white-space: pre-wrap;
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}

.coordinates {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: absolute;
  bottom: 40px;
  left: 10px;
  padding: 5px 10px;
  margin: 0;
  font-size: 11px;
  line-height: 18px;
  border-radius: 3px;
  display: none;
}
</style>
