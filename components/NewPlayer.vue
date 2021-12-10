<template lang="pug">
v-card
  v-card-title New Player
  v-card-text
    v-text-field(
      v-model='name'
      placeholder='Player Name'
      slim
      outlined
    ) 
    v-text-field(
      v-model='dob'
      placeholder='dob'
      slim
      outlined
    ) 
    v-text-field(
      v-model='height'
      placeholder='height'
      slim
      outlined
    ) 
    v-text-field(
      v-model='weight'
      placeholder='weight'
      slim
      outlined
    ) 
    v-text-field(
      v-model='twitterURL'
      placeholder='twitter URL'
      slim
      outlined
    ) 
  v-card-actions
    v-spacer
    v-btn(@click='$emit("close-dialog")') Close
    v-btn(@click='createResource()' color='primary') Submit
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify'
import { createPlayer, createLocation, updatePlayer } from '~/src/graphql/mutations'

export default {
  props: {
    closeBtn: {
      type: Boolean,
      default: false
    },
    lngLat: {
      type: Object,
      default: null
    }
  },
  emits: ['close-dialog'],
  data () {
    return {
      name: '',
      dob: '',
      height: '', 
      weight: '',
      twitterURL: ''
    }
  },
  methods: {
    async createResource () {
      try {
        const formJSON = {
          name: this.name,
          dob: this.dob,
          height: this.height, 
          weight: this.weight,
          twitterURL: this.twitterURL
        }

        const resp = await API.graphql(graphqlOperation(
          createPlayer, { input: formJSON }))

        const player = resp.data.createPlayer

        if (this.lngLat !== null) {
          const locJSON = {
            lng: this.lngLat.lng,
            lat: this.lngLat.lat,
            playerId: player.id
          }

          const locResp = await API.graphql(graphqlOperation(
            createLocation, { input: locJSON }))
          console.log("locResp", locResp)
          const location = locResp.data.createLocation

          if ('id' in location) {
            // update the player with the new location
            const updatePlayerJSON = {
              id: player.id,
              playerCurrentLocationId: location.id
            }
            const updatePlayerResp = await API.graphql(graphqlOperation(
              updatePlayer, { input: updatePlayerJSON }))
            console.log(updatePlayerResp)
          }

        }
        console.log(resp)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>