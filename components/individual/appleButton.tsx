import SocialImages from '../../public/socialImages';

export default function AppleButton() {
  return (
    <div className="inline-flex py-2">
      <button className="apple-button inline-flex px-2 bg-white py-1 border-solid border-2 border-black rounded-md text-black hover:bg-black hover:text-white duration-200">
        <div className="px-2">
          <svg
            viewBox="0 0 24 24"
            className="apple-image text-black fill-current w-6 h-6 lg:w-8 lg:h-8 duration-300 hover:text-white">
            <path d={SocialImages.Apple} />
          </svg>
        </div>
        <p className="text-md lg:text-xl px-2 align-middle">Sign in with Apple</p>
      </button>
    </div>
  );
}
