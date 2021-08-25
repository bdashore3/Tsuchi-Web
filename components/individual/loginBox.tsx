import GoogleButton from './googleButton';
import AppleButton from './appleButton';

export default function LoginBox() {
  return (
    <div className="inline-flex flex-col bg-gray-200 rounded-lg items-center p-6">
      <p className="mb-4 text-lg lg:text-2xl">Click one of the buttons to get started</p>
      <GoogleButton />
      <AppleButton />
    </div>
  );
}
