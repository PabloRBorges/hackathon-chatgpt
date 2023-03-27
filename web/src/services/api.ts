import axios from 'axios';

const api = axios.create({
	baseURL: 'https://localhost:7058',
});

export default api;
