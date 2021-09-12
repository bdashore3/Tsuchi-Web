interface Props {
  image: string;
}

export default function MangaCard(props: Props) {
  return (
    <div className="inline-flex text-center">
      <img src={props.image} className="h-52 px-4 py-4" />
    </div>
  );
}
