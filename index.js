const fetch = require('node-fetch');
module.exports = {
  apiKey: null,
  setApiKey: key => {
    this.apiKey = key;
    console.log('thisapikey', this.apiKey);
  },
  searchTeamName: async name => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${encodeURI(
          name
        )}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  },
  teamByShortCode: async shortCode => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?sname=${encodeURI(
          shortCode
        )}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  },
  allPlayersInTeamName: async name => {
    if (!this.apiKey) return 'You must set your API Key to use this method.';

    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${name}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  },
  searchPlayerName: async name => {
    const res = await fetch(
      `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${encodeURI(
        name
      )}`
    );
    const data = await res.json();
    return data;
  },
  searchEventName: async name => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/searchevents.php?e=${encodeURI(
          name
        )}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  },
  allLeagues: async country => {
    if (country) {
      try {
        const res = await fetch(
          `https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=${country}`
        );
        const data = await res.json();
        return data;
      } catch (err) {
        return err;
      }
    } else {
      try {
        const res = await fetch(
          'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php'
        );
        const data = await res.json();
        return data;
      } catch (err) {
        return err;
      }
    }
  },
  allSeasonsInLeague: async leagueId => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/search_all_seasons.php?id=${leagueId}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  },
  allTeamsInLeague: async leagueId => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${leagueId}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  },
  allPlayersInTeam: async teamId => {
    if (!this.apiKey) return 'You must set your API Key to use this method.';
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/${this.apiKey}/lookup_all_players.php?id=${teamId}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  },
  leagueDetails: async leagueId => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  },
  teamDetails: async teamId => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  },
  playerDetails: async playerId => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${playerId}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  },
  eventDetails: async eventId => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id=${eventId}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  },
  playerHonours: async playerId => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/lookuphonors.php?id=${playerId}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  },
  playerFormerTeams: async playerId => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/lookupformerteams.php?id=${playerId}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  },
  playerContracts: async playerId => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/lookupcontracts.php?id=${playerId}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      return err;
    }
  },
  leagueTable: async (leagueId, seasonId) => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${leagueId}&s=${seasonId}`
      );
    } catch (err) {
      return err;
    }
  },
  nextFiveEventsByTeam: async teamId => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${teamId}`
      );
    } catch (err) {
      return err;
    }
  },
  nextFifteenEventsByLeague: async leagueId => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${leagueId}`
      );
    } catch (err) {
      return err;
    }
  },
  lastFiveEventsByTeam: async teamId => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${teamId}`
      );
    } catch (err) {
      return err;
    }
  },
  lastFifteenEventsByLeague: async leagueId => {
    try {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${leagueId}`
      );
    } catch (err) {
      return err;
    }
  }
};
