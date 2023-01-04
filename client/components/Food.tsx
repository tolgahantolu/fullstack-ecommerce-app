import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";
import { FiPlus } from "react-icons/fi";

const Food: React.FC<{
  id: Object;
  title: String;
  desc: String;
  price: Number;
  kit: Boolean;
  category: String;
  ingredients: Array<string>;
  index: Key;
}> = ({ id, title, desc, price, kit, category, index, ingredients }) => {
  return (
    <div
      key={index}
      className="col-span-1 w-full bg-theme-dark-grey rounded-[30px]"
    >
      <div className="flex items-center gap-x-1 min-h-[180px] min-w-full pl-4 pr-2 py-2">
        <div className="flex flex-col">
          <Link href={`/food/${id}`}>
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
          </Link>
          <div className="mt-3 flex flex-row justify-between items-center">
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
        <Image
          src="/food/salad2.png"
          width={125}
          height={125}
          alt="product"
          className="object-cover object-center drop-shadow"
        />
      </div>
    </div>
  );
};

export default Food;
