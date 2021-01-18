const clientID = "70aa26180af6424caf987510e47c6173";
//before step 97 use the following line of code
//const redirectURI = "http://localhost:3000/";
//at step 97 use the following with YOUR selected domain name I used MINE.
//follow the video NOT the written instructions for deployment. I used my VSCode Terminal not Node or powershell
//also if needed you may have to run 'powershell' as administrator and change restrictions. 
//const redirectURI = 'http://damaged-man.surge.sh';
const redirectURI = 'https://rickmansfield.github.io/10-12-1_Project_Jammming/';
let accessToken;

const Spotify = {
    getAccessToken() {
        if(accessToken){
            return accessToken;
        }
        // check for access token match
        const accesssTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accesssTokenMatch && expiresInMatch) {
            accessToken = accesssTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            // wipes the access token and URL parameters after they expire
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = accessUrl;
        }
    },

    search(term){
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artists: track.artists[0],
                album: track.album.name,
                uri: track.uri

            }));
        });
    },
//note in the line of code below the instructor mispells savePlaylist as savePlayList note capital "l"
    savePlaylist(name, trackUris) {
        if(!name || !trackUris.length) {
            return;
        }
        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };
        let userId;

        return fetch('https://api.spotify.com/v1/me', { headers: headers }
        ).then(response => response.json()
        ).then (jsonResponse => {
            userId = jsonResponse.id;
            return fetch (`https://api.spotify.com/v1/users/${userId}/playlists`, 
            {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ name: name })
            }).then(response => response.json()
            ).then(jsonResponse => {
                const playlistId = jsonResponse.id;
                return fetch (`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,{
                    headers: headers,
                    method: 'POST',
                    body:  JSON.stringify({ uris: trackUris })
                })
            })
        })
    }
}
export default Spotify;