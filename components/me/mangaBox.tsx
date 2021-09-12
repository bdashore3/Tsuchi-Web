import { MangaEntry } from '../../types/manga';
import MangaCard from '../individual/mangaCard';

export default function UserMangaBox() {
  return (
    <div className="inline-flex flex-col flex-grow lg:mx-10">
      <h1 className="text-center text-2xl p-5">Your Mangas</h1>
      <div className="overflow-y-scroll h-96 lg:h-full bg-gray-200 rounded-lg lg:mb-10">
        <p className="text-gray-500 flex-wrap text-center leading-normal pb-2">
          More mangas are waiting for you. <br />
          Try adding some.
        </p>
      </div>
    </div>
  );
}
