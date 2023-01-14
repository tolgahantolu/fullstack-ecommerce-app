import Image from "next/image";
import Link from "next/link";
import { BsTruck, BsGear } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Key } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

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
  const pathname = useRouter().pathname;

  const checkUser = useSelector((state: any | any[]) => state.auth.user);
  const checkEmail = useSelector((state: any | any[]) => state.auth.email);

  return (
    <section className="w-[200px] min-w-[200px] h-full flex flex-col justify-start items-center gap-y-10 pb-10">
      <div className="w-full flex flex-col items-center gap-y-1 justify-center">
        <Image
          src={`${checkUser && checkEmail ? "/profile.svg" : "/avatar.svg"}`}
          width={80}
          height={80}
          alt="profile"
          className="object-cover rounded-full object-top"
        />

        <h2 className="text-white break-all text-center px-3 font-medium">
          {checkUser && checkEmail ? (
            checkEmail
          ) : (
            <Link href="/login" className="capitalize underline">
              please login
            </Link>
          )}
        </h2>
        {/*<Image
          src="/profile.png"
          width={100}
          height={100}
          alt="profile"
          className="object-cover rounded-full object-top"
        />

        <h2 className="capitalize text-white text-lg font-medium">
          tolgahan tolu
        </h2>*/}
      </div>

      {/* sidebar list */}
      <ul className="text-white flex flex-col gap-y-6">
        {MENU_LIST.map(
          (menu: { name: String; path: String | any; icon: any }, i: Key) => (
            <li key={i}>
              <Link
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
        {/*<li>
          <Link
            href="/"
            className="flex items-center gap-x-8 text-base text-white pr-6 rounded-full bg-theme-light-orange"
          >
            <span className="p-4 rounded-full bg-theme-dark-orange">
              <AiOutlineHome />
            </span>
            <p>Home</p>
          </Link>
        </li>

        <li>
          <Link
            href="/category"
            className="flex items-center gap-x-8 text-base text-white pr-6 rounded-full"
          >
            <span className="p-4 rounded-full bg-theme-dark-grey">
              <BiCategory />
            </span>
            <p>Category</p>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center gap-x-8 text-base text-white pr-6 rounded-full"
          >
            <span className="p-4 rounded-full bg-theme-dark-grey">
              <IoLocationOutline />
            </span>
            <p>Map</p>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center gap-x-8 text-base text-white pr-6 rounded-full"
          >
            <span className="p-4 rounded-full bg-theme-dark-grey">
              <BsTruck />
            </span>
            <p>Delivery</p>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center gap-x-8 text-base text-white pr-6 rounded-full"
          >
            <span className="p-4 rounded-full bg-theme-dark-grey">
              <BsGear />
            </span>
            <p>Setting</p>
          </Link>
        </li>*/}
      </ul>

      <Image
        src="/delivery.png"
        width={175}
        height={125}
        alt="delivery image"
        className="object-contain"
      />
    </section>
  );
};

export default Sidebar;
