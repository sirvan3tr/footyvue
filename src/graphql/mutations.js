/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createGoal = /* GraphQL */ `
  mutation CreateGoal(
    $input: CreateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    createGoal(input: $input, condition: $condition) {
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
export const updateGoal = /* GraphQL */ `
  mutation UpdateGoal(
    $input: UpdateGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    updateGoal(input: $input, condition: $condition) {
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
export const deleteGoal = /* GraphQL */ `
  mutation DeleteGoal(
    $input: DeleteGoalInput!
    $condition: ModelGoalConditionInput
  ) {
    deleteGoal(input: $input, condition: $condition) {
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
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      name
      dob
      height
      weight
      locations {
        items {
          id
          lng
          lat
          playerId
          createdAt
          updatedAt
          playerLocationsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      name
      dob
      height
      weight
      locations {
        items {
          id
          lng
          lat
          playerId
          createdAt
          updatedAt
          playerLocationsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      name
      dob
      height
      weight
      locations {
        items {
          id
          lng
          lat
          playerId
          createdAt
          updatedAt
          playerLocationsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      lng
      lat
      playerId
      player {
        id
        name
        dob
        height
        weight
        locations {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      playerLocationsId
      owner
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      lng
      lat
      playerId
      player {
        id
        name
        dob
        height
        weight
        locations {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      playerLocationsId
      owner
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      lng
      lat
      playerId
      player {
        id
        name
        dob
        height
        weight
        locations {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      playerLocationsId
      owner
    }
  }
`;
