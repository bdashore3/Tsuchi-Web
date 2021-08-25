interface Props {
  name: string;
  color: string;
  svgPath: string;
  url: string;
}

export default function SocialButton(props: Props) {
  return (
    <li className="px-2 md:px-3">
      <a href={props.url} aria-label={props.name} target="_blank" rel="noreferrer noopener">
        <svg
          viewBox="0 0 24 24"
          className={`text-black fill-current w-16 h-16 duration-300 ${props.color}`}>
          <path d={props.svgPath} />
        </svg>
      </a>
    </li>
  );
}
