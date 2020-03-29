# soccer-data

A tool to make fetching up to date soccer data easy. Most functions don't require an API key but some require it. Information is fetched from [TheSportsDB](https://www.thesportsdb.com/).

## How to use

- In your terminal, change to your project's root directory.
- Install the module by running `npm install soccer-data` in your terminal.
- In the JavaScript file where you wish to use this tool, import the module by writing
  - `const soccerData = require('soccer-data')`
- or import functions you wish to use using ES6 syntax
  - `const { setAPIKey, teamDetails } = require('soccer-data')`

## Methods

#### setApiKey(_key_)

Set an API key to be able to use the methods that require it.

| param | type   | required |
| ----- | ------ | -------- |
| key   | string | true     |

### API Key Required

Before using these methods you must obtain and set a valid API Key from [TheSportsDB](https://www.thesportsdb.com/) using _setAPIKey(**key**)_.

#### allPlayersInTeam(_teamId_)

Returns array of players' details in a team.

| param  | type   | required |
| ------ | ------ | -------- |
| teamId | string | true     |

#### allPlayersInTeamName(_teamName_)

Returns array of players' details in a team.

| param    | type   | required |
| -------- | ------ | -------- |
| teamName | string | true     |

### API Key Not Required

These methods do not require an API Key.

#### teamByShortCode(_teamShortCode_)

Returns team details by team short code e.g. _Ars_ for Arsenal.

| param           | type   | required |
| --------------- | ------ | -------- |
| _teamShortCode_ | string | true     |

#### searchTeamName(_teamName_)

Returns team details by team name.

| param    | type   | required |
| -------- | ------ | -------- |
| teamName | string | true     |

#### searchPlayerName(_playerName_)

Returns player details by player name.

| param      | type   | required |
| ---------- | ------ | -------- |
| playerName | string | true     |

#### searchEventName(_eventName_)

Returns event details by event name.

| param     | type   | required |
| --------- | ------ | -------- |
| eventName | string | true     |

#### allLeagues(_country_)

Returns array of all leagues. If _country_ parameter is provided, only leagues in said country are returned.

| param   | type   | required |
| ------- | ------ | -------- |
| country | string | false    |

#### allSeasonsInLeague(_leagueId_)

Returns array of all seasons in league by league id.

| param    | type   | required |
| -------- | ------ | -------- |
| leagueId | string | true     |

#### allTeamsInLeague(_leagueId_)

Returns array of all teams in league by league id.

| param    | type   | required |
| -------- | ------ | -------- |
| leagueId | string | true     |

#### allPlayersInTeam(_teamId_)

Returns array of all players in team by team id.

| param  | type   | required |
| ------ | ------ | -------- |
| teamId | string | true     |

#### leagueDetails(_leagueId_)

Returns league details by id.

| param    | type   | required |
| -------- | ------ | -------- |
| leagueId | string | true     |

#### teamDetails(_teamId_)

Returns team details by id.

| param  | type   | required |
| ------ | ------ | -------- |
| teamId | string | true     |

#### playerDetails(_playerId_)

Returns player details by id.

| param    | type   | required |
| -------- | ------ | -------- |
| playerId | string | true     |

#### eventDetails(_eventId_)

Returns event details by id.

| param   | type   | required |
| ------- | ------ | -------- |
| eventId | string | true     |

#### playerHonours(_playerId_)

Returns player honours by player id.

| param    | type   | required |
| -------- | ------ | -------- |
| playerId | string | true     |

#### playerFormerTeams(_playerId_)

Returns player former teams by player id.

| param    | type   | required |
| -------- | ------ | -------- |
| playerId | string | true     |

#### playerContracts(_playerId_)

Returns player contracts by player id.

| param    | type   | required |
| -------- | ------ | -------- |
| playerId | string | true     |

#### leagueTable(_leagueId_, _seasonId_)

Returns league table by league id and season id.

| param    | type   | required |
| -------- | ------ | -------- |
| leagueId | string | true     |
| seasonId | string | true     |

#### nextFiveEventsByTeam(_teamId_)

Returns next 5 events by team id.

| param  | type   | required |
| ------ | ------ | -------- |
| teamId | string | true     |

#### nextFiveEventsByTeam(_teamId_)

Returns last 5 events by team id.

| param  | type   | required |
| ------ | ------ | -------- |
| teamId | string | true     |

#### lastFifteenEventsByLeague(_leagueId_)

Returns last 5 events by league id.

| param    | type   | required |
| -------- | ------ | -------- |
| leagueId | string | true     |

#### nextFifteenEventsByLeague(_teamId_)

Returns next 15 events by league id.

| param    | type   | required |
| -------- | ------ | -------- |
| leagueId | string | true     |
