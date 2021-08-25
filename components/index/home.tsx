import SocialButton from '../individual/socialButton';
import LoginBox from '../individual/loginBox';
import SocialImages from '../../public/socialImages';

export default function Home() {
  return (
    <div className="flex flex-col relative justify-center min-h-screen items-center tracking-wide">
      <div className="flex-col text-center">
        <div className="p-5 lg:p-0">
          <img
            src="./FileBridge.png"
            alt="Tsuchi App icon"
            className="m-auto rounded-2xl w-32 lg:w-auto h-32 lg:h-auto"
          />
        </div>

        <p className="font-header text-4xl lg:text-6xl lg:leading-relaxed font-bold tracking-wide">
          Tsūchi
        </p>
        <p className="mt-4 font-paragraph text-lg lg:text-2xl px-3 lg:px-0">
          An easy to use manga notification service.
        </p>
      </div>
      <div className="mt-12 mb-16 p-5 lg:p-0 inline-flex flex-col justify-center items-center">
        <LoginBox />
      </div>
      <div className="inline-flex flex-col justify-center items-center">
        <ul className="flex items-center">
          <SocialButton
            name="github"
            url="https://github.com/bdashore3/Tsuchi"
            color="hover:text-green-500"
            svgPath={SocialImages.Github}
          />
          <SocialButton
            name="discord"
            url="https://discord.gg/pswt7by"
            color="hover:text-blurple"
            svgPath={SocialImages.Discord}
          />
        </ul>
      </div>
      <footer className="mt-6 text-center max-w-screen">© 2021 Brian Dashore, pandeynmn</footer>
    </div>
  );
}
