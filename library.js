const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  
  // Functions refactored
  printPlaylists: function() {
    for (let playlistId in this.playlists) {
      const playlist = this.playlists[playlistId];
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },
  
  printTracks: function() {
    for (let trackId in this.tracks) {
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },
  
  printPlaylist: function(playlistId) {
    const playlist = this.playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    for (let trackId of playlist.tracks) {
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    const playlist = this.playlists[playlistId];
    if (playlist && this.tracks[trackId]) {
      playlist.tracks.push(trackId);
    } else {
      console.log("Invalid trackId or playlistId");
    }
  },
  
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  
  addTrack: function(name, artist, album) {
    const id = this.generateUid();
    this.tracks[id] = { id, name, artist, album };
  },
  
  addPlaylist: function(name) {
    const id = this.generateUid();
    this.playlists[id] = { id, name, tracks: [] };
  }
};