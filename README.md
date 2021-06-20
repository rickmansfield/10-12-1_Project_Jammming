# JAMMMING

Javascript/React API with Spotify

![Favicon](public/favicon.ico)

## Sections

- [JAMMMING](#jammming)
  - [Sections](#sections)
  - [Overview](#overview)
  - [knowledge Demonstrated](#knowledge-demonstrated)
    - [Set up Directory structure initialized html and css](#set-up-directory-structure-initialized-html-and-css)
    - [Created Static Components](#created-static-components)
    - [Pass Down Search Results & Render Result List](#pass-down-search-results--render-result-list)
    - [Pass Down Playlist to Track LIst](#pass-down-playlist-to-track-list)
    - [Add Tracks to Playlist](#add-tracks-to-playlist)
    - [Remove Tracks from Playlist](#remove-tracks-from-playlist)
    - [Changed the Name of the Playlist](#changed-the-name-of-the-playlist)
    - [Created a Method that Saves the Playlist to a User's Account](#created-a-method-that-saves-the-playlist-to-a-users-account)
    - [Hook up Search Bar to Spotify Search](#hook-up-search-bar-to-spotify-search)
    - [Obtain a Spotify Accesss Token](#obtain-a-spotify-accesss-token)
    - [Implement Spotify Search Request](#implement-spotify-search-request)
    - [Save a User's Playlist](#save-a-users-playlist)
      - [Deployment Notes](#deployment-notes)

## Overview

__Jammming__ is a __REACT__ web applicaiton. Knowledge of react components, passing state, and requests with the Spotify API were used to build this webstie. The API allows users to search the Spotify Library, create a custom playlist, then save it to their Spotify Account.
[Sections](#sections)

## knowledge Demonstrated

### Set up Directory structure initialized html and css

### Created Static Components

### Pass Down Search Results & Render Result List

- state is passed through a series of components to render an array of tracks.
- Constructor Functions and .map()
[Sections](#sections)

### Pass Down Playlist to Track LIst

- passed the state of a user’s custom playlist title and tracks from the App component down to components that render them
[Sections](#sections)

### Add Tracks to Playlist

- implemented a process for adding a song from the search results track list to the user’s custom playlist.
[Sections](#sections)

### Remove Tracks from Playlist

- Implemented a process that removes a song from a user's custom playlist when the user selects the "-" sign inside of a rendered track.
[Sections](#sections)

### Changed the Name of the Playlist

- Implemented the code that allows a user to change the name of their playlist, and save the updated value to the App component's state.[Sections](#sections)

### Created a Method that Saves the Playlist to a User's Account

- created a method that saves a user's playlist to their Spotify account and resets the state of the playlist name and tracks array.[Sections](#sections)

### Hook up Search Bar to Spotify Search

- created a method thta updates the searchResults parameter in the app component with a user's search results. Wrote the logic that allows a user to enter a serach parameter, receives a response from the Spotify API, and updates the searchResults state with the results from a Spotify Request.[Sections](#sections)

### Obtain a Spotify Accesss Token

- wrote three methods that:
  - Get a Spotify user's access token.
  - send a search request to the Spotify API
  - Save a user's playlist to their Spotify Account.
[Sections](#sections)

### Implement Spotify Search Request

- created a method in Spotify.js that accepts a search term input, passes the search term value to a Spotify request, then returns the responses as a list of tracks in JSON format.
- Apply user's access token to make requests to the spotify API following step four of Spotify's [implicit grant flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/) to make requests.
- Used fetch() to make the requests in this case.
- Used the [Spofity Web API](https://developer.spotify.com/web-api/endpoint-reference/) Endpoint Reference to help format your request.
  [Sections](#sections)

### Save a User's Playlist

- Created a mehtod called savePlayList that writes the user's costom playlist in Jammming to their Spotify Account.[Sections](#sections)

#### Deployment Notes

- Site Deployed using GitHub Pages
  - [code](https://github.com/rickmansfield/10-12-1_Project_Jammming)
  - [Live Site](https://rickmansfield.github.io/10-12-1_Project_Jammming/)
  
  [Sections](#sections)
