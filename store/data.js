import axios from 'axios'

export async function getData() {
  /*
    Spits out:
      dataArr
      dataDict
      headers
      teams
  */

  // Fetch our csv
  const csv = await axios.get('data.csv')

  // Split into an array structure
  const dataArr = csv.data.replace(/\r/g, '').split('\n').map(line => line.split(','))

  // Convert the dataArr into a different data structure, where each element
  // is an object/dictionary
  const dataDict = []
  for (let i = 1; i < dataArr.length; i++) {
    const obj = {}
    for (let j = 0; j < dataArr[i].length; j++) {
      obj[dataArr[0][j]] = dataArr[i][j]
    }
    dataDict.push(obj)
  }

  // Get the headers for the vuetifyjs table
  const headers = []
  for (let i = 0; i < dataArr[0].length; i++) {
    const obj = {
      text: dataArr[0][i],
      value: dataArr[0][i]
    }
    headers.push(obj)
  }

  // Get the unique teams
  const uniqueTeams = new Set()

  for (const row of dataDict) {
    uniqueTeams.add(row.Team)
  }

  const teams = Array.from(uniqueTeams)

  return {
    dataArr,
    dataDict,
    headers,
    teams
  }
}

