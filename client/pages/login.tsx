import Link from "next/link";
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";

const login = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-[400px] flex flex-col items-center rounded-3xl text-theme-dark-black bg-white py-8 px-16">
        <h1 className="text-3xl text-center font-bold capitalize">login</h1>
        <form className="w-[350px] flex flex-col gap-10 mt-8">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="flex items-center gap-x-1 text-sm"
            >
              <MdAlternateEmail /> Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Type your username"
              className="outline-none border-b border-[#AFAFAF] placeholder:text-[#AFAFAF] text-[15px] pl-1 pr-2 pt-1 pb-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="flex items-center gap-x-1 text-sm"
            >
              <MdLockOutline /> Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Type your password"
              className="w-full outline-none border-b border-[#AFAFAF] placeholder:text-[#AFAFAF] text-[15px] pl-1 pr-2 pt-1 pb-2"
            />
          </div>
          <button
            type="button"
            className="text-lg text-white py-3 px-2 font-semibold uppercase rounded-full bg-theme-green"
          >
            login
          </button>
        </form>
        <div className="text-sm mt-16 flex flex-col text-center gap-y-1">
          <p>Don't have an account?</p>
          <Link
            href="/sign-up"
            className="capitalize font-medium text-theme-dark-orange underline"
          >
            sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default login;
