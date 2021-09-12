import Head from 'next/head';
import Home from '../components/index/home';
import UserPage from './me';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Tsuchi</title>
      </Head>
      <UserPage />
    </>
  );
}
