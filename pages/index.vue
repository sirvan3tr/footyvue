<template lang="pug">
v-container
  v-row
    v-col(cols='6')
      v-dialog(v-model='dialog' width='500')
        NewPlayer(:closeBtn='true' v-on:close-dialog='dialog = false')           
      v-card
        v-card-title
          span Players
          v-spacer
          v-btn(small @click='dialog = !dialog' color='primary') Create Player
        v-list
          template(v-for='player in players')
            v-divider
            v-list-item(:key='player.id')
              v-list-item-avatar(color='primary')
              v-list-item-content
                v-list-item-title {{ player.name }}
                div
                  v-btn.mr-2(small outlined)
                    v-icon(left) mdi-human-male-height
                    span {{ player.height }}
                  v-btn.mr-2(small outlined)
                    v-icon(left) mdi-weight-kilogram
                    span {{ player.height }}
                  v-btn.mr-2(small icon outlined :href='player.twitterURL')
                    v-icon(small) mdi-twitter
                  
    v-col(cols='6')
      NewTeam
      NewPlayer
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify'
import { listPlayers } from '~/src/graphql/queries'

export default {
  data () {
    return {
      players: [],
      dialog: false
    }
  },
  async mounted () {
    try {
      const resp = await API.graphql(graphqlOperation(listPlayers))
      this.players = resp.data.listPlayers.items
    } catch (err) {
      console.log(err)
    }
  }
}
</script>