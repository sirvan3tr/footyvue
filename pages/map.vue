<template lang="pug">
div
  p.text-h4 Geo 
  v-row
    v-col(cols='6')
      GChart(:settings="{ packages: ['geochart'] }"
             type='GeoChart' 
             :data="mapData")

</template>

<script>
import { GChart } from 'vue-google-charts'
import { getData } from '~/store/data'

export default {
  components: {
    GChart
  },
  data () {
    return {
      reportsByDate: [],
      data: '',
      mapData:[
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
        ] 
    }
  },
  async mounted () {
    this.data = await getData()
  },
  methods: {
    filterByTeam(data, team) {
      const res = data.filter(row => (row[3] === team || row[3] === 'Team'))
                      .map(row => row.slice(0, 3)) 
      console.log(res)
      return res
    }
  }
}
</script>
