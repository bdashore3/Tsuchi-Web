import { auth, Providers } from '../../config/firebase';
import Router from 'next/router';

export default function GoogleButton() {
  async function signInWithGoogle() {
    try {
      const result = await auth.signInWithPopup(Providers.google);

      if (!result.user) {
        throw new Error("A user wasn't returned!");
      }

      console.log(result);
      Router.push('/login');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="inline-flex py-2">
      <button
        className="inline-flex px-2 bg-white py-1 border-solid border-2 border-black rounded-md text-black hover:bg-black hover:text-white duration-200"
        onClick={signInWithGoogle}>
        <div className="px-2">
          <img src="Google.png" className="w-6 h-6 lg:w-8 lg:h-8" />
        </div>
        <p className="text-md lg:text-xl px-2 align-middle">Sign in with Google</p>
      </button>
    </div>
  );
}
