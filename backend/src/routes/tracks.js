// This module is used to get artist's top tracks from Spotify based in the Artist name that we get from the event.

// TO DO:
// replace spotifyArtists with real search spotify API
// automate extracting artist names from Events

// importing events: - I DON'T KNOW IF THIS IS WORKING
const events = require('../models/index')

console.log('********LOG events')
console.log(events) // checking that I can get events from ../models/index. The goal is to use this to get the event's artists programatically, and include them in the function fetchTracks.
//  question: why is it returning also the users? 🤔

// this is spotify mock database:

const spotifyArtists = [
  { name: 'Caetano Veloso', tracks: ['Caetano track 1', 'Caetano track 2', 'Caetano track 3'] },
  { name: 'Gilberto Gil', tracks: ['Gil track 1', 'Gil track 2', 'Gil track 3'] },
  { name: 'Gal Costa', tracks: ['Gal track 1', 'Gal track 2', 'Gal track 3'] },
]

// console.log(spotifyArtists.find(artist => artist.name === 'Caetano Veloso').tracks)

const searchSpotifyArtist = artistName => {
  return new Promise((resolve, reject) => {
    // if the artist exists in Spotify, resolve
    if (spotifyArtists.find(artist => artist.name === artistName)) {
      resolve(`${artistName} exists in Spotify`)
      // if the artist does not exist in Spotify, reject
    } else {
      reject(new Error({ message: `${artistName} doesn't exist in Spotify` }))
    }
  })
}

const fetchTracks = async () => {
  // simulating that this is the event data
  // **TO DO: replace this with information from the event (event.forEach(artist.name) or something like that)
  const eventInfo = {
    name: 'Festival One',
    artist: 'Caetano Veloso',
  }

  console.log(`## We are looking for ${eventInfo.artist}'s tracks`)

  // try to return artist's tracks:

  try {
    await searchSpotifyArtist(eventInfo.artist)
    const artistTracks = spotifyArtists.find(artist => artist.name === eventInfo.artist).tracks
    console.log(artistTracks)

    // handle if artist name is not there
  } catch (e) {
    console.log(e.message)
  }
}

console.log(fetchTracks())
