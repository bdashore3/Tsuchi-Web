import HistoryCard from '../individual/historyCard';

export default function UserHistory() {
  return (
    <div className="inline-flex flex-col lg:min-w-20v lg:mx-10 lg:max-w-35v">
      <h1 className="text-center text-2xl p-5">History</h1>
      <div className="overflow-y-scroll h-96 lg:h-full bg-gray-200 rounded-lg lg:mb-10">
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <p className="text-gray-500 flex-wrap text-center leading-normal pb-2">
          Go get a cup of coffee, <br />
          we'll let you know what to read next.
        </p>
      </div>
    </div>
  );
}
