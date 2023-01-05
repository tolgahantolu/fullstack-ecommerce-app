import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="flex gap-x-8">
      <div className="flex-1">
        <h1 className="text-3xl capitalize font-medium">Shopping Cart</h1>
        <div className="mt-5 flex flex-col gap-y-5 border-b-2 border-theme-dark-grey pb-10 overflow-y-auto h-[540px] pr-5">
          {/* cart product */}
          <div className="bg-theme-light-grey p-3 rounded-[30px] flex items-center">
            <Image
              src="/food/salad2.png"
              width={75}
              height={75}
              alt="cart product"
              className="object-cover object-center drop-shadow"
            />
            <div className="flex flex-col gap-1 items-start ml-2">
              <h3 className="capitalize">vegetable salad</h3>
              <p className="bg-theme-light-black px-2 py-[2px] text-[10px] rounded-lg">
                220g
              </p>
            </div>
            <div className="ml-10 flex-1 flex flex-row items-center justify-between">
              <div className="flex items-center gap-x-[2px]">
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-sm border-none rounded-lg p-1"
                >
                  <AiOutlinePlus />
                </button>
                <input
                  type="text"
                  value="1"
                  className="max-w-[40px] bg-theme-light-grey outline-none border-none text-center text-sm"
                />
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-sm border-none rounded-lg p-1"
                >
                  <AiOutlineMinus />
                </button>
              </div>
              <h2 className="text-[40px] font-bold">$52</h2>
              <button
                type="button"
                className="border-none outline-none bg-red-600 text-sm p-2 rounded-full"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          {/* cart product */}
          <div className="bg-theme-light-grey p-3 rounded-[30px] flex items-center">
            <Image
              src="/food/salad2.png"
              width={75}
              height={75}
              alt="cart product"
              className="object-cover object-center drop-shadow"
            />
            <div className="flex flex-col gap-1 items-start ml-2">
              <h3 className="capitalize">vegetable salad</h3>
              <p className="bg-theme-light-black px-2 py-[2px] text-[10px] rounded-lg">
                220g
              </p>
            </div>
            <div className="ml-10 flex-1 flex flex-row items-center justify-between">
              <div className="flex items-center gap-x-[2px]">
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-sm border-none rounded-lg p-1"
                >
                  <AiOutlinePlus />
                </button>
                <input
                  type="text"
                  value="1"
                  className="max-w-[40px] bg-theme-light-grey outline-none border-none text-center text-sm"
                />
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-sm border-none rounded-lg p-1"
                >
                  <AiOutlineMinus />
                </button>
              </div>
              <h2 className="text-[40px] font-bold">$52</h2>
              <button
                type="button"
                className="border-none outline-none bg-red-600 text-sm p-2 rounded-full"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          {/* cart product */}
          <div className="bg-theme-light-grey p-3 rounded-[30px] flex items-center">
            <Image
              src="/food/salad2.png"
              width={75}
              height={75}
              alt="cart product"
              className="object-cover object-center drop-shadow"
            />
            <div className="flex flex-col gap-1 items-start ml-2">
              <h3 className="capitalize">vegetable salad</h3>
              <p className="bg-theme-light-black px-2 py-[2px] text-[10px] rounded-lg">
                220g
              </p>
            </div>
            <div className="ml-10 flex-1 flex flex-row items-center justify-between">
              <div className="flex items-center gap-x-[2px]">
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-sm border-none rounded-lg p-1"
                >
                  <AiOutlinePlus />
                </button>
                <input
                  type="text"
                  value="1"
                  className="max-w-[40px] bg-theme-light-grey outline-none border-none text-center text-sm"
                />
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-sm border-none rounded-lg p-1"
                >
                  <AiOutlineMinus />
                </button>
              </div>
              <h2 className="text-[40px] font-bold">$52</h2>
              <button
                type="button"
                className="border-none outline-none bg-red-600 text-sm p-2 rounded-full"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          {/* cart product */}
          <div className="bg-theme-light-grey p-3 rounded-[30px] flex items-center">
            <Image
              src="/food/salad2.png"
              width={75}
              height={75}
              alt="cart product"
              className="object-cover object-center drop-shadow"
            />
            <div className="flex flex-col gap-1 items-start ml-2">
              <h3 className="capitalize">vegetable salad</h3>
              <p className="bg-theme-light-black px-2 py-[2px] text-[10px] rounded-lg">
                220g
              </p>
            </div>
            <div className="ml-10 flex-1 flex flex-row items-center justify-between">
              <div className="flex items-center gap-x-[2px]">
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-sm border-none rounded-lg p-1"
                >
                  <AiOutlinePlus />
                </button>
                <input
                  type="text"
                  value="1"
                  className="max-w-[40px] bg-theme-light-grey outline-none border-none text-center text-sm"
                />
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-sm border-none rounded-lg p-1"
                >
                  <AiOutlineMinus />
                </button>
              </div>
              <h2 className="text-[40px] font-bold">$52</h2>
              <button
                type="button"
                className="border-none outline-none bg-red-600 text-sm p-2 rounded-full"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          {/* cart product */}
          <div className="bg-theme-light-grey p-3 rounded-[30px] flex items-center">
            <Image
              src="/food/salad2.png"
              width={75}
              height={75}
              alt="cart product"
              className="object-cover object-center drop-shadow"
            />
            <div className="flex flex-col gap-1 items-start ml-2">
              <h3 className="capitalize">vegetable salad</h3>
              <p className="bg-theme-light-black px-2 py-[2px] text-[10px] rounded-lg">
                220g
              </p>
            </div>
            <div className="ml-10 flex-1 flex flex-row items-center justify-between">
              <div className="flex items-center gap-x-[2px]">
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-sm border-none rounded-lg p-1"
                >
                  <AiOutlinePlus />
                </button>
                <input
                  type="text"
                  value="1"
                  className="max-w-[40px] bg-theme-light-grey outline-none border-none text-center text-sm"
                />
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-sm border-none rounded-lg p-1"
                >
                  <AiOutlineMinus />
                </button>
              </div>
              <h2 className="text-[40px] font-bold">$52</h2>
              <button
                type="button"
                className="border-none outline-none bg-red-600 text-sm p-2 rounded-full"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          {/* cart product */}
          <div className="bg-theme-light-grey p-3 rounded-[30px] flex items-center">
            <Image
              src="/food/salad2.png"
              width={75}
              height={75}
              alt="cart product"
              className="object-cover object-center drop-shadow"
            />
            <div className="flex flex-col gap-1 items-start ml-2">
              <h3 className="capitalize">vegetable salad</h3>
              <p className="bg-theme-light-black px-2 py-[2px] text-[10px] rounded-lg">
                220g
              </p>
            </div>
            <div className="ml-10 flex-1 flex flex-row items-center justify-between">
              <div className="flex items-center gap-x-[2px]">
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-sm border-none rounded-lg p-1"
                >
                  <AiOutlinePlus />
                </button>
                <input
                  type="text"
                  value="1"
                  className="max-w-[40px] bg-theme-light-grey outline-none border-none text-center text-sm"
                />
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-sm border-none rounded-lg p-1"
                >
                  <AiOutlineMinus />
                </button>
              </div>
              <h2 className="text-[40px] font-bold">$52</h2>
              <button
                type="button"
                className="border-none outline-none bg-red-600 text-sm p-2 rounded-full"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          {/* cart product */}
          <div className="bg-theme-light-grey p-3 rounded-[30px] flex items-center">
            <Image
              src="/food/salad2.png"
              width={75}
              height={75}
              alt="cart product"
              className="object-cover object-center drop-shadow"
            />
            <div className="flex flex-col gap-1 items-start ml-2">
              <h3 className="capitalize">vegetable salad</h3>
              <p className="bg-theme-light-black px-2 py-[2px] text-[10px] rounded-lg">
                220g
              </p>
            </div>
            <div className="ml-10 flex-1 flex flex-row items-center justify-between">
              <div className="flex items-center gap-x-[2px]">
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-xs border-none rounded-lg p-1"
                >
                  <AiOutlinePlus />
                </button>
                <input
                  type="text"
                  value="1"
                  className="max-w-[40px] bg-theme-light-grey outline-none border-none text-center text-xs"
                />
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-xs border-none rounded-lg p-1"
                >
                  <AiOutlineMinus />
                </button>
              </div>
              <h2 className="text-[40px] font-bold">$52</h2>
              <button
                type="button"
                className="border-none outline-none bg-red-600 text-sm p-2 rounded-full"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          {/* cart product */}
          <div className="bg-theme-light-grey p-3 rounded-[30px] flex items-center">
            <Image
              src="/food/salad2.png"
              width={75}
              height={75}
              alt="cart product"
              className="object-cover object-center drop-shadow"
            />
            <div className="flex flex-col gap-1 items-start ml-2">
              <h3 className="capitalize">vegetable salad</h3>
              <p className="bg-theme-light-black px-2 py-[2px] text-[10px] rounded-lg">
                220g
              </p>
            </div>
            <div className="ml-10 flex-1 flex flex-row items-center justify-between">
              <div className="flex items-center gap-x-[2px]">
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-xs border-none rounded-lg p-1"
                >
                  <AiOutlinePlus />
                </button>
                <input
                  type="text"
                  value="1"
                  className="max-w-[40px] bg-theme-light-grey outline-none border-none text-center text-xs"
                />
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-xs border-none rounded-lg p-1"
                >
                  <AiOutlineMinus />
                </button>
              </div>
              <h2 className="text-[40px] font-bold">$52</h2>
              <button
                type="button"
                className="border-none outline-none bg-red-600 text-sm p-2 rounded-full"
              >
                <FaTimes />
              </button>
            </div>
          </div>
          {/* cart product */}
          <div className="bg-theme-light-grey p-3 rounded-[30px] flex items-center">
            <Image
              src="/food/salad2.png"
              width={75}
              height={75}
              alt="cart product"
              className="object-cover object-center drop-shadow"
            />
            <div className="flex flex-col gap-1 items-start ml-2">
              <h3 className="capitalize">vegetable salad</h3>
              <p className="bg-theme-light-black px-2 py-[2px] text-[10px] rounded-lg">
                220g
              </p>
            </div>
            <div className="ml-10 flex-1 flex flex-row items-center justify-between">
              <div className="flex items-center gap-x-[2px]">
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-xs border-none rounded-lg p-1"
                >
                  <AiOutlinePlus />
                </button>
                <input
                  type="text"
                  value="1"
                  className="max-w-[40px] bg-theme-light-grey outline-none border-none text-center text-xs"
                />
                <button
                  type="button"
                  className="bg-theme-light-black text-white outline-none text-xs border-none rounded-lg p-1"
                >
                  <AiOutlineMinus />
                </button>
              </div>
              <h2 className="text-[40px] font-bold">$52</h2>
              <button
                type="button"
                className="border-none outline-none bg-red-600 text-sm p-2 rounded-full"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </div>

        {/* cart summary */}
        <div className="mt-3 flex flex-row justify-between items-center">
          <p className="flex items-center gap-x-2">
            Promo Code:
            <span className="bg-theme-light-black px-2 py-[2px] rounded-full">
              xxx-xxx
            </span>
          </p>
          <p className="flex items-center gap-x-2">
            Cart Summary:
            <span className="text-theme-green font-bold text-2xl">$237</span>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 bg-[#0c0c0c] rounded-tl-[50px] pr-10 pt-10">
        <div className="pl-10">
          <h1 className="text-3xl capitalize font-medium">Cart Details</h1>

          <form className="mt-5 flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-xs text-theme-light-grey ">
                Name and Surname
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="text-2xl bg-transparent outline-none border-b border-theme-dark-grey py-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="number"
                className="text-xs text-theme-light-grey "
              >
                Card Number
              </label>
              <input
                type="text"
                name="number"
                id="number"
                className="text-2xl bg-transparent outline-none border-b border-theme-dark-grey py-2"
              />
            </div>
          </form>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex flex-row justify-start items-center gap-x-2">
              <Image
                src="/profile.png"
                width={50}
                height={50}
                alt="profile"
                className="object-cover rounded-full object-top"
              />
              <h2 className="text-white text-lg font-medium">Tolgahan Tolu</h2>
            </div>
            <button
              type="submit"
              className="bg-theme-green rounded-full px-6 py-2 text-lg font-medium capitalize"
            >
              check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
