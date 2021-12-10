<template lang="pug">
div
  v-btn.show-history(@click='showPlayerLocHistory()') Show location history
  div#mapContainer.basemap
  pre#info
  .text-center
    v-dialog(v-model='dialog' width='500')
      NewPlayer(:lngLat='selectedLngLat' :closeBtn='true' v-on:close-dialog='dialog = false')

</template>

<script>
import mapboxgl from "mapbox-gl"
import { API, graphqlOperation } from 'aws-amplify'
import { listPlayers } from '~/src/graphql/queries'
import { createLocation, updatePlayer } from '~/src/graphql/mutations'

export default {
  data () {
    return {
      accessToken: 'pk.eyJ1Ijoic2lydmFuM3RyIiwiYSI6ImNqcDhkc3VjbjFhenQzcG8zdGMxdnZxbHIifQ.1IHHhdnTN3Zt4TfZYJGJBA',
      markers: [],
      routeIds: {},
      players: [],
      dialog: false,
      selectedLngLat: '',
      map: null
    };
  },
  // watch: {
  //   markers () {
  //     console.log('watching markerssss', this.markers)
  //   }
  // },
  async mounted () {
    mapboxgl.accessToken = this.accessToken;
    /* eslint-disable no-new */
    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/navigation-night-v1",
      // center: [103.811279, 1.345399],
      center: [-122.486052, 37.830348],
      zoom: 12,
    })

    this.map = map

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
      this.dialog = !this.dialog
      this.selectedLngLat = e.lngLat
      const routeId = Math.floor((Math.random() * 100) + 1).toString()
      // TODO fetch the player id
      this.addMarkerToMap(e.lngLat, routeId)
    })

    // Get list of players from DB
    await this.getPlayers()

    // Add the loaded players to the map
    for (const player of this.players) {
      if ('currentLocation' in player && player.currentLocation !== null) {
        if ('lng' in player.currentLocation) {
          const lngLat = {
            lng: player.currentLocation.lng,
            lat: player.currentLocation.lat
          }
          this.addMarkerToMap(lngLat, player.currentLocation.id, player.id)
        }
      }
    }

    // Add line
    map.on('load', () => {
      // map.addSource('route', {
      //   'type': 'geojson',
      //   'data': {
      //     'type': 'Feature',
      //     'properties': {},
      //     'geometry': {
      //       'type': 'LineString',
      //       'coordinates': [
      //         [-122.483696, 37.833818],
      //         [-122.483482, 37.833174]
      //       ]
      //     }
      //   }
      // });
      // map.addLayer({
      //   'id': 'route',
      //   'type': 'line',
      //   'source': 'route',
      //   'layout': {
      //     'line-join': 'round',
      //     'line-cap': 'round'
      //   },
      //   'paint': {
      //     'line-color': 'red',
      //     'line-width': 8
      //   }
      // });
    });
  },
  methods: {
    showPlayerLocHistory () {
      for (const player of this.players) {
        console.log(player.name, player.locations.items)
        try {
          const sortedLocs = player.locations.items.sort(function(a, b){
            return new Date(b.date) - new Date(a.date)
          })
          console.log(sortedLocs)
          this.addMarkersToMap(sortedLocs, player.id)
        } catch (err) {
          console.log(err)
        }
      }
    },
    onMarkerDrag (marker, createLocation=true) {
      const lngLat = marker.target._lngLat
      const routeId = marker.target.routeId
      // update the map
      this.routeIds[routeId].geometry.coordinates.push([lngLat.lng, lngLat.lat])
      this.map.getSource(routeId).setData(this.routeIds[routeId])
      // create the new location in db
      if (createLocation) {
        this.createLocationFunc(marker.target.playerId, lngLat)
      }
    },
    onMarkerDragStart (marker) {
      const lngLat = marker.target._lngLat
      /* eslint-disable no-unused-vars */
      const newMarker = new mapboxgl.Marker({
         draggable: false,
      })
        .setLngLat([lngLat.lng, lngLat.lat])
        .addTo(this.map) 
    },
    addMarkersToMap (locs, playerId) {
      const coords = []
      for (const loc of locs) {
        const lngLat = {
              lng: loc.lng,
              lat: loc.lat
        }
        const marker = new mapboxgl.Marker({
          draggable: true,
        })
          .setLngLat([lngLat.lng, lngLat.lat])
          .addTo(this.map)
        coords.push([lngLat.lng, lngLat.lat ])
      }

      const sourceGEOJSON = {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': coords
          }
        }

      this.map.addSource(playerId, {
        'type': 'geojson',
        'data': sourceGEOJSON,
      })
      this.map.addLayer({
        'id': playerId,
        'type': 'line',
        'source': playerId,
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': 'red',
          'line-width': 8
        }
      })

      // marker.on('dragend', this.onMarkerDrag)
      // marker.on('dragstart', this.onMarkerDragStart)
      // marker.routeId = routeId
      // marker.playerId = playerId
      // this.markers.push(marker)
      // this.routeIds[routeId] = sourceGEOJSON
    },
    addMarkerToMap (lngLat, routeId, playerId='0') {
      const marker = new mapboxgl.Marker({
        draggable: true,
      })
        .setLngLat([lngLat.lng, lngLat.lat])
        .addTo(this.map)

      const sourceGEOJSON = {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [lngLat.lng, lngLat.lat],
            ]
          }
        }
      this.map.addSource(routeId, {
        'type': 'geojson',
        'data': sourceGEOJSON,
      })
      this.map.addLayer({
        'id': routeId,
        'type': 'line',
        'source': routeId,
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': 'red',
          'line-width': 8
        }
      })

      marker.on('dragend', this.onMarkerDrag)
      marker.on('dragstart', this.onMarkerDragStart)
      marker.routeId = routeId
      marker.playerId = playerId
      this.markers.push(marker)
      this.routeIds[routeId] = sourceGEOJSON

      return marker
    },
    async createLocationFunc (playerId, lngLat) {
      const locJSON = {
         lng: lngLat.lng,
         lat: lngLat.lat,
         playerId
      }

      const locResp = await API.graphql(graphqlOperation(
        createLocation, { input: locJSON }))
      console.log("locResp", locResp)
      const location = locResp.data.createLocation

      if ('id' in location) {
        // update the player with the new location
        const updatePlayerJSON = {
          id: playerId,
          playerCurrentLocationId: location.id
        }
        const updatePlayerResp = await API.graphql(graphqlOperation(
          updatePlayer, { input: updatePlayerJSON }))
        console.log(updatePlayerResp)
      }
    },
    async getPlayers () {
      // Retrieve the players from the DB
      try {
        const resp = await API.graphql(graphqlOperation(listPlayers))
        this.players = resp.data.listPlayers.items
      } catch (err) {
        console.log(err)
      }
    }
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

.marker {
  background-size: cover;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
}

.show-history {
  position: absolute;
  left: 50%;
  top: 60px;
  display: block;
  z-index: 100
}
</style>
