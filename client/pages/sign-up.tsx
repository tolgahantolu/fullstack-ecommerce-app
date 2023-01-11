import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";

const signUp = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-[400px] flex flex-col items-center rounded-3xl text-theme-dark-black bg-white py-8 px-16">
        <h1 className="text-3xl text-center font-bold capitalize">sign up</h1>
        <form className="w-[350px] flex flex-col gap-10 mt-8">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="flex items-center gap-x-1 text-sm capitalize"
            >
              <AiOutlineUser /> name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type your name"
              className="outline-none border-b border-[#AFAFAF] placeholder:text-[#AFAFAF] text-[15px] pl-1 pr-2 pt-1 pb-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="surname"
              className="flex items-center gap-x-1 text-sm capitalize"
            >
              <HiOutlineUsers /> surname
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Type your surname"
              className="outline-none border-b border-[#AFAFAF] placeholder:text-[#AFAFAF] text-[15px] pl-1 pr-2 pt-1 pb-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="flex items-center gap-x-1 text-sm capitalize"
            >
              <MdAlternateEmail /> email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Type your email"
              className="outline-none border-b border-[#AFAFAF] placeholder:text-[#AFAFAF] text-[15px] pl-1 pr-2 pt-1 pb-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="flex items-center gap-x-1 text-sm capitalize"
            >
              <MdLockOutline /> password
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
            sign up
          </button>
        </form>
        <div className="text-sm mt-16 flex flex-col text-center gap-y-1">
          <p>Do you have an account?</p>
          <Link
            href="/login"
            className="capitalize font-medium text-theme-dark-orange underline"
          >
            login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default signUp;