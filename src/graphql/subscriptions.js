/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($owner: String) {
    onCreateTeam(owner: $owner) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($owner: String) {
    onUpdateTeam(owner: $owner) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($owner: String) {
    onDeleteTeam(owner: $owner) {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame($owner: String) {
    onCreateGame(owner: $owner) {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame($owner: String) {
    onUpdateGame(owner: $owner) {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame($owner: String) {
    onDeleteGame(owner: $owner) {
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
export const onCreateGoal = /* GraphQL */ `
  subscription OnCreateGoal($owner: String) {
    onCreateGoal(owner: $owner) {
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
export const onUpdateGoal = /* GraphQL */ `
  subscription OnUpdateGoal($owner: String) {
    onUpdateGoal(owner: $owner) {
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
export const onDeleteGoal = /* GraphQL */ `
  subscription OnDeleteGoal($owner: String) {
    onDeleteGoal(owner: $owner) {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($owner: String) {
    onCreatePlayer(owner: $owner) {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($owner: String) {
    onUpdatePlayer(owner: $owner) {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($owner: String) {
    onDeletePlayer(owner: $owner) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($owner: String) {
    onCreateLocation(owner: $owner) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($owner: String) {
    onUpdateLocation(owner: $owner) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($owner: String) {
    onDeleteLocation(owner: $owner) {
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
