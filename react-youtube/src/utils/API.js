import axios from 'axios';
const apiKey = "AIzaSyDK9oBP3L1D2nREUvCPqts3aUB5uHZ_rc4";

// group all API Calls

export default {
    searchYouTube: function(term) {
        return axios.get("https://www.googleapis.com/youtube/v3/search", {
                params: {
                    part:"snippet",
                    q: term,
                    type: "video",
                    key: apiKey
                    
                }
        })
    }
}