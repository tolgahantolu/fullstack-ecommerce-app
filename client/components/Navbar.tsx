import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { IoMdNotificationsOutline, IoIosLogOut } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../store/authSlice";

const Navbar = () => {
  const checkUser = useSelector((state: any | any[]) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authUser({ user: false }));
  };

  return (
    <nav className="w-full h-20 flex items-center">
      <form className="flex justify-start ml-80 relative">
        <input
          type="text"
          placeholder="Search..."
          className="bg-theme-dark-black w-[350px] h-10 text-sm rounded-full text-theme-light-grey pl-6 pr-10 py-2 outline-none placeholder:italic placeholder:text-theme-light-grey placeholder-pl-2"
        />
        <span className="text-white text-lg absolute top-1/2 -translate-y-1/2 right-3">
          <BsSearch />
        </span>
      </form>

      <div className="flex-1 flex justify-end gap-x-2 mr-10">
        <button className="bg-theme-dark-grey text-white text-xl p-3 rounded-full">
          <IoMdNotificationsOutline />
        </button>
        <Link
          href="/cart"
          className="bg-theme-dark-grey text-white text-xl p-3 rounded-full"
        >
          <BiShoppingBag />
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
