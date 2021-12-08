<template lang="pug">
v-container
  v-row
    v-col(cols='6')
      v-card(outlined)
        GChart(
              type="ColumnChart"
              :data="goalsByTeamsData"
              :options="chartOptions")
    v-col(cols='6')
      v-card(outlined)
        GChart(
              type="AreaChart"
              :data="goalsByTeamsData"
              :options="chartOptions")
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
      data: [],
      chartOptions: {
          title: 'Types of Goals',
          hAxis: { title: 'Teams',  titleTextStyle: { color: '#333' } },
          height: 300
      },
      goalsByTeamsData: [],
    }
  },
  async mounted () {
    this.data = await getData()
    this.getGoalsScored()
  },
  methods: {
    getGoalsScored () {
      // This function will get the types of goals per team
      const headers = ['Team', 'Set Piece Goals', 'Open Play Goals', 'Penalty Goals']
      const tableOfGoals = []
      tableOfGoals.push(headers)

      // Get a total of the goals per team for each type of goal
      const teamObj = Object()
      for (const team of this.data.teams) {
        for (const row of this.data.dataDict) {
          if (team === row.Team) {
            if (team in teamObj) {
              teamObj[team].setPiece += parseInt(row['Set Piece Goals'])
              teamObj[team].openPlay += parseInt(row['Open Play Goals'])
              teamObj[team].penalty += parseInt(row['Penalty Goals'])
            } else {
              teamObj[team] = {
                setPiece: parseInt(row['Set Piece Goals']),
                openPlay: parseInt(row['Open Play Goals']),
                penalty: parseInt(row['Penalty Goals'])
              }
            }
          }
        }
      }

      for (const team of this.data.teams) {
        const rowArr = [team]
        const value = teamObj[team]
        rowArr.push(value.setPiece)
        rowArr.push(value.openPlay)
        rowArr.push(value.penalty)
        tableOfGoals.push(rowArr)
      }
      this.goalsByTeamsData = tableOfGoals
    }
  }
}
</script>
