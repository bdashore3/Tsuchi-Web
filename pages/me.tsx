import useSWR from 'swr';
import { auth } from '../config/firebase';
import Router from 'next/router';
import ApiRequester from '../config/axios';
import LoadingAnimation from '../components/individual/loading';
import UserMangaBox from '../components/me/mangaBox';
import UserHistory from '../components/me/historyBox';

export default function UserPage() {
  const fetcher = async (url: string) => {
    try {
      const res = await ApiRequester.get(url);

      return res.data;
    } catch (err) {
      if (err.response.status === 401) {
        Router.push('/');
      }
    }
  };

  //const { data, error } = useSWR('/mangas', fetcher);

  /*
  if (!data) {
    return <LoadingAnimation />;
  }
  */

  return (
    <div className="flex flex-col lg:h-screen leading-loose">
      <h1 className="text-center text-5xl">Hi there</h1>
      <h2 className="text-center text-2xl">What will you do today? Maybe add some mangas?</h2>
      <h2 className="text-center ">Search bar</h2>
      <div className="flex flex-col lg:flex-row min-h-0">
        <UserHistory />
        <UserMangaBox />
      </div>
    </div>
  );
}
