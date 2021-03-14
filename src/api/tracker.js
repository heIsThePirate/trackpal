import axios from 'axios';

export default axios.create({
    baseURL: 'https://trackpal-server.herokuapp.com/'
})