import axios from 'axios';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { auth } from '../config/firebase';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  axios.interceptors.request.use(async function (config) {
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken();

      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return <Component {...pageProps} />;
}

export default MyApp;
