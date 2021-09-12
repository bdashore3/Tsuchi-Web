export default function HistoryCard() {
  return (
    <div className="flex flex-row align-middle bg-white p-3 h-28 rounded-lg my-2 mx-4">
      <div className="overflow-hidden">
        <img src="https://cover.nep.li/cover/Out-MIZUTA-Makoto.jpg" className="h-32" />
      </div>
      <div className="ml-6 text-left leading-relaxed">
        <p>Out (MIZUTA Makoto)</p>
        <p>Sent: 22:22</p>
        <p>Source: MangaLife</p>
      </div>
    </div>
  );
}
