<template lang="pug">
v-card
  v-card-title New Team
  v-card-text
    v-text-field(
      v-model='name'
      placeholder='Team Name'
      slim
      outlined
    ) 
    v-text-field(
      v-model='county'
      placeholder='County'
      slim
      outlined
    ) 
    v-text-field(
      v-model='country'
      placeholder='Country'
      slim
      outlined
    ) 
  v-card-actions
    v-spacer
    v-btn(@click='createResource()' color='primary') Submit
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify'
import { createTeam } from '~/src/graphql/mutations'

export default {
  data () {
    return {
      name: '',
      county: '',
      country: ''
    }
  },
  methods: {
    async createResource () {
      try {
        const formJSON = {
          name: this.name,
          county: this.county,
          country: this.country
        }
        const resp = await API.graphql(graphqlOperation(createTeam, { input: formJSON }))
        console.log(resp)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>