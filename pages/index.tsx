import Head from 'next/head';
import Home from '../components/index/home';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Tsuchi</title>
      </Head>
      <Home />
    </>
  );
}
