import { Key, useRef } from "react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { IoMdNotificationsOutline, IoIosLogOut } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../store/authSlice";
import { useState } from "react";
import Image from "next/image";
import { GET_FOODS } from "../graphql/query";
import { useQuery } from "@apollo/client";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useQuery(GET_FOODS);
  const cartCounter = useSelector((state: any | any[]) => state.cart.counter);
  const checkUser = useSelector((state: any | any[]) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authUser({ user: false, email: null }));
  };

  return (
    <nav className="w-full h-20 flex items-center">
      <form className="flex justify-start ml-80 relative">
        <input
          type="text"
          placeholder="Search..."
          className="bg-theme-dark-black w-[350px] h-10 text-sm rounded-full text-theme-light-grey pl-6 pr-10 py-2 outline-none placeholder:italic placeholder:text-theme-light-grey placeholder-pl-2"
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="text-white text-lg absolute top-1/2 -translate-y-1/2 right-3">
          <BsSearch />
        </span>

        {query.length > 2 && (
          <div className="text-white absolute top-full mt-1 z-10 w-full max-h-[380px] overflow-y-auto rounded-2xl bg-theme-dark-black flex flex-col justify-center gap-3 py-3">
            {/* product */}
            {data?.getFoods?.map(
              (
                food: {
                  id: Object;
                  title: String;
                  desc: String;
                  price: Number;
                  kit: Boolean;
                  category: String;
                  ingredients: Array<string>;
                },
                i: Key
              ) => (
                <Link
                  key={i}
                  href={`/food/${food.id}`}
                  className="bg-theme-light-grey p-3 rounded-[30px] flex items-center gap-3 mx-3"
                >
                  <Image
                    src="/food/salad2.png"
                    width={75}
                    height={75}
                    alt="cart product"
                    className="object-cover object-center drop-shadow"
                  />
                  <div className="flex-2">
                    <h3 className="capitalize font-medium mb-1">
                      {food.title}
                    </h3>
                    <div className="flex flex-row flex-wrap">
                      {food.ingredients.length > 5
                        ? food.ingredients.slice(0, 5).map((el, i) => (
                            <p
                              key={i}
                              className="text-theme-dark-grey2 text-sm font-medium leading-2"
                            >
                              {el}
                            </p>
                          ))
                        : food.ingredients.map((el, i) => (
                            <p
                              key={i}
                              className="text-theme-dark-grey2 text-sm font-medium leading-2"
                            >
                              {el}
                            </p>
                          ))}
                    </div>
                  </div>

                  <h2 className="flex-1 text-3xl font-bold leading-none">
                    {`$${food.price}`}
                  </h2>
                </Link>
              )
            )}
          </div>
        )}
      </form>

      <div className="flex-1 flex justify-end gap-x-2 mr-10">
        <button className="bg-theme-dark-grey text-white text-xl p-3 rounded-full">
          <IoMdNotificationsOutline />
        </button>
        <Link
          href="/cart"
          className="bg-theme-dark-grey text-white text-xl p-3 rounded-full relative"
        >
          <BiShoppingBag />
          <span className="flex justify-center items-center font-medium text-sm w-6 h-6 rounded-full bg-theme-light-orange absolute -bottom-2 -right-1">
            {cartCounter}
          </span>
        </Link>
        <Link
          href="/login"
          className="bg-theme-dark-grey text-white text-xl p-3 rounded-full"
        >
          {checkUser ? (
            <IoIosLogOut onClick={handleLogout} />
          ) : (
            <AiOutlineUser />
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
