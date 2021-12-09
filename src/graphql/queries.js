/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      county
      country
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        county
        country
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      homeTeamId
      homeTeam {
        id
        name
        county
        country
        createdAt
        updatedAt
        owner
      }
      opponentTeamId
      opponentTeam {
        id
        name
        county
        country
        createdAt
        updatedAt
        owner
      }
      createdAt
      goals {
        items {
          id
          type
          gameId
          createdAt
          updatedAt
          gameGoalsId
          owner
        }
        nextToken
      }
      updatedAt
      gameHomeTeamId
      gameOpponentTeamId
      owner
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        homeTeamId
        homeTeam {
          id
          name
          county
          country
          createdAt
          updatedAt
          owner
        }
        opponentTeamId
        opponentTeam {
          id
          name
          county
          country
          createdAt
          updatedAt
          owner
        }
        createdAt
        goals {
          nextToken
        }
        updatedAt
        gameHomeTeamId
        gameOpponentTeamId
        owner
      }
      nextToken
    }
  }
`;
export const gameByHomeTeamCreatedAtOpponentTeam = /* GraphQL */ `
  query GameByHomeTeamCreatedAtOpponentTeam(
    $homeTeamId: ID
    $createdAtOpponentTeamId: ModelGameByhomeTeamCreatedAtOpponentTeamCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    GameByHomeTeamCreatedAtOpponentTeam(
      homeTeamId: $homeTeamId
      createdAtOpponentTeamId: $createdAtOpponentTeamId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        homeTeamId
        homeTeam {
          id
          name
          county
          country
          createdAt
          updatedAt
          owner
        }
        opponentTeamId
        opponentTeam {
          id
          name
          county
          country
          createdAt
          updatedAt
          owner
        }
        createdAt
        goals {
          nextToken
        }
        updatedAt
        gameHomeTeamId
        gameOpponentTeamId
        owner
      }
      nextToken
    }
  }
`;
export const getGoal = /* GraphQL */ `
  query GetGoal($id: ID!) {
    getGoal(id: $id) {
      id
      type
      gameId
      game {
        id
        homeTeamId
        homeTeam {
          id
          name
          county
          country
          createdAt
          updatedAt
          owner
        }
        opponentTeamId
        opponentTeam {
          id
          name
          county
          country
          createdAt
          updatedAt
          owner
        }
        createdAt
        goals {
          nextToken
        }
        updatedAt
        gameHomeTeamId
        gameOpponentTeamId
        owner
      }
      createdAt
      updatedAt
      gameGoalsId
      owner
    }
  }
`;
export const listGoals = /* GraphQL */ `
  query ListGoals(
    $filter: ModelGoalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        gameId
        game {
          id
          homeTeamId
          opponentTeamId
          createdAt
          updatedAt
          gameHomeTeamId
          gameOpponentTeamId
          owner
        }
        createdAt
        updatedAt
        gameGoalsId
        owner
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      name
      dob
      height
      weight
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        dob
        height
        weight
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
