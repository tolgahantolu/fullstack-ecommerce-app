import Image from "next/image";
import React, { Key } from "react";
import { FiPlus } from "react-icons/fi";

const PromotionalKit: React.FC<{
  title: String;
  desc: String;
  price: Number;
  kit: Boolean;
  ingredients: Array<string>;
  key: Key;
}> = ({ title, desc, price, kit, ingredients, key }) => {
  return (
    <div key={key} className="w-full bg-theme-dark-grey rounded-[30px]">
      <div className="flex items-center gap-x-1 min-h-[150px] min-w-full px-2">
        <Image
          src="/food/pizzakit.png"
          width={75}
          height={75}
          alt="product"
          className="object-cover object-center drop-shadow"
        />
        <div className="flex flex-col">
          <h2 className="capitalize text-lg mb-1">{title}</h2>
          <div className="flex flex-row flex-wrap">
            {ingredients.length > 7
              ? ingredients.slice(0, 7).map((el, i) => (
                  <p
                    key={i}
                    className="text-theme-dark-grey2 text-sm font-medium leading-2"
                  >
                    {el}
                  </p>
                ))
              : ingredients.map((el, i) => (
                  <p
                    key={i}
                    className="text-theme-dark-grey2 text-sm font-medium leading-2"
                  >
                    {el}
                  </p>
                ))}
          </div>
          <div className="mt-3 flex flex-row justify-between">
            <p className="font-bold text-3xl leading-none">{`$${price}`}</p>
            <form className="flex items-center gap-x-2">
              <input
                type="text"
                placeholder="1"
                className="border-none outline-none text-center text-xs w-14 h-6 px-4 bg-theme-dark-black rounded-full"
              />
              <button
                type="button"
                className="border-none outline-none bg-theme-green rounded-xl text-2xl p-1 font-bold"
              >
                <FiPlus />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalKit;
