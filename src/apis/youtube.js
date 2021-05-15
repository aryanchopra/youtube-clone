import axios from 'axios';
const KEY = 'AIzaSyAmIq0j8S67VL5q_WoGtkqSJRCbj6Dzdd4'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY

    }
});