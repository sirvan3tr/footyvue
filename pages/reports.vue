<template lang="pug">
v-container
  p.text-h4 Camera and Scouting Reports
  v-row
    v-col(cols='12')
      template(v-for='team in data.teams')
        p.text-h5 {{ team }}
        v-card(outlined)
          GChart(type="ColumnChart"
                :options='chartOptionsReports'
                :data="filterByTeam(reportsByDate, team)")
  v-row
    v-col(cols='12')
      v-card(outlined)
        v-data-table(
          :headers="data.headers"
          :items="data.dataDict"
          :items-per-page="5")
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
      chartOptionsReports: {
        title: 'Camera and Scouting Reports',
        hAxis: { title: 'Date' },
        vAxis: { title: '' },
        height: 500
      },
      reportsByDate: [],
      data: ''
    }
  },
  async mounted () {
    this.data = await getData()
    this.getScoutingCameraReports()
  },
  methods: {
    getScoutingCameraReports () {
      const arr = [['Date', 'Camera Footage', 'Scouting Reports', 'Team']]
      // Init the byTeams Object
      const byTeams = Object()
      for (const team of this.data.teams) {
        byTeams[team] = {
          cameraFootage: 0,
          scoutingReports: 0,
        }
      }
      // Fill in the byTeams object
      for (const team of this.data.teams) {
        for (const row of this.data.dataDict) {
          if (row.Team === team) {
            byTeams[team].cameraFootage +=   parseInt(row['Camera Footage'])
            byTeams[team].scoutingReports += parseInt(row['Scouting Reports'])
          }
        }
      }

      console.log(byTeams)
      for (const row of this.data.dataDict) {
        // const date = Date.parse(row.Date)
        const tempArr = [
          row.Date,
          parseInt(row['Camera Footage']),
          parseInt(row['Scouting Reports']),
          row.Team
        ]
        arr.push(tempArr)
      }

      this.reportsByDate = arr
    },
    filterByTeam(data, team) {
      const res = data.filter(row => (row[3] === team || row[3] === 'Team'))
                      .map(row => row.slice(0, 3)) 
      console.log(res)
      return res
    }
  }
}
</script>
