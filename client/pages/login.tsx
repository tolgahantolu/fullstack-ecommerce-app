import { useMutation } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import { LOGIN_USER } from "../graphql/mutation";
import { authUser } from "../store/authSlice";

const login = () => {
  const dispatch = useDispatch();
  const checkUser = useSelector((state: any | any[]) => state.auth.user);
  console.log(checkUser);
  const router = useRouter();

  if (checkUser) {
    router.push("/");
  }

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    await loginUser({ variables: { loginInput: user } });

    dispatch(authUser({ user: true }));
  };

  if (loading) return <Loader />;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-[400px] flex flex-col items-center rounded-3xl text-theme-dark-black bg-white py-8 px-16">
        <h1 className="text-3xl text-center font-bold capitalize">login</h1>
        <form className="w-[350px] flex flex-col gap-10 mt-8">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="flex items-center gap-x-1 text-sm capitalize"
            >
              <MdAlternateEmail /> email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Type your email"
              className="outline-none border-b border-[#AFAFAF] placeholder:text-[#AFAFAF] text-[15px] pl-1 pr-2 pt-1 pb-2"
              value={user.email}
              onChange={handleChange}
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
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="text-lg text-white py-3 px-2 font-semibold uppercase rounded-full bg-theme-green"
            onClick={handleLogin}
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
