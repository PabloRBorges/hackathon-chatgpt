import axios from 'axios';

const api = axios.create({
	baseURL: "https://api.test"
});

export default api;
