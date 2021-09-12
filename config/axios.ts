import axios from 'axios';
import router from 'next/router';
import { auth } from './firebase';

const ApiRequester = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:4000/api'
});

// Any API request has the current user token added to it
ApiRequester.interceptors.request.use(async function (config) {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    console.log(token);

    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default ApiRequester;
