import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarber-server2.herokuapp.com',
});

export default api;
