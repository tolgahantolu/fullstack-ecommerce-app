import Image from "next/image";
import Link from "next/link";
import { BsTruck, BsGear } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { IoCloseSharp, IoLocationOutline } from "react-icons/io5";
import { Key, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { HiMenuAlt1 } from "react-icons/hi";

const Sidebar = () => {
  const MENU_LIST = [
    {
      name: "home",
      path: "/",
      icon: <AiOutlineHome />,
    },
    {
      name: "category",
      path: "/category",
      icon: <BiCategory />,
    },
    {
      name: "map",
      path: "/map",
      icon: <IoLocationOutline />,
    },
    {
      name: "delivery",
      path: "/delivery",
      icon: <BsTruck />,
    },
    {
      name: "settings",
      path: "/settings",
      icon: <BsGear />,
    },
  ];
  const [sidebar, setSidebar] = useState<Boolean>(false);
  const pathname = useRouter().pathname;

  const checkUser = useSelector((state: RootState) => state.auth.user);
  const checkEmail = useSelector((state: RootState) => state.auth.email);

  return (
    <section className="relative">
      <button
        type="button"
        className={`absolute left-0 top-0 p-2 bg-white text-theme-light-black text-xl rounded-tr-lg rounded-br-lg ${
          sidebar && "translate-x-[200px]"
        }`}
        onClick={() => setSidebar((prevState) => !prevState)}
      >
        {sidebar ? <IoCloseSharp /> : <HiMenuAlt1 />}
      </button>
      <div
        className={`z-50 opacity-0 pointer-events-none absolute -translate-x-[250px] w-[200px] min-w-[200px] h-full pb-10 bg-theme-dark-grey2 flex flex-col justify-start items-center gap-y-10 ${
          sidebar && "static translate-x-[0] opacity-100 pointer-events-auto"
        }`}
      >
        <div className="w-full flex flex-col items-center gap-y-1 justify-center">
          <Image
            src={`${checkUser && checkEmail ? "/profile.svg" : "/avatar.svg"}`}
            width={80}
            height={80}
            alt="profile"
            className="object-cover rounded-full object-top w-auto h-auto"
          />

          <h2 className="text-white break-all text-center px-3 font-medium">
            {checkUser && checkEmail ? (
              checkEmail
            ) : (
              <Link
                href="/login"
                className="capitalize underline"
                onClick={() => setSidebar(false)}
              >
                please login
              </Link>
            )}
          </h2>
        </div>

        {/* sidebar list */}
        <ul className="text-white flex flex-col gap-y-6">
          {MENU_LIST.map(
            (menu: { name: String; path: String | any; icon: any }, i: Key) => (
              <li key={i}>
                <Link
                  onClick={() => setSidebar(false)}
                  href={menu.path}
                  className={`flex items-center gap-x-8 text-base text-white pr-6 rounded-full ${
                    pathname === menu.path ? "bg-theme-light-orange" : ""
                  }`}
                >
                  <span
                    className={`p-4 rounded-full ${
                      pathname === menu.path
                        ? "bg-theme-dark-orange"
                        : "bg-theme-dark-grey"
                    }`}
                  >
                    {menu.icon}
                  </span>
                  <p className="capitalize">{menu.name}</p>
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="flex flex-col items-center gap-7">
          <Image
            src="/delivery.png"
            width={175}
            height={125}
            alt="delivery image"
            className="object-contain"
          />
          <div className="flex flex-row gap-2">
            <Image
              src="/app-store.png"
              width={175}
              height={25}
              alt="app store"
              className="object-contain opacity-75"
            />
          </div>

          <small className="text-[#b2afaf] text-center text-xs leading-5 pb-5">
            This DEMO Project was Created by{" "}
            <Link
              href="https://www.linkedin.com/in/tolgahant/"
              className="capitalize text-theme-dark-orange font-medium underline"
            >
              Tolgahan Tolu
            </Link>
          </small>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
