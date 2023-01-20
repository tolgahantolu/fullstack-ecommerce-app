import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, Key, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cartSlice";

const Food: React.FC<{
  id: Object;
  title: String;
  desc: String;
  price: Number;
  kit: Boolean;
  category: String;
  ingredients: Array<string>;
  image: String;
  index: Key;
}> = ({ id, title, desc, price, kit, category, index, ingredients, image }) => {
  const amountInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [amountIsValid, setAmountIsValid] = useState<Boolean>(true);

  const handlerSubmit = (e: FormEvent) => {
    e.preventDefault();

    const enteredAmount: String | any = amountInputRef.current?.value;
    const enteredAmountNumber: Number = +enteredAmount;

    if (
      enteredAmount?.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    } else {
      if (amountIsValid !== true) setAmountIsValid(true);
    }

    dispatch(
      addItemToCart({
        id,
        title,
        price,
        image,
        counter: enteredAmountNumber,
        amount: enteredAmountNumber,
      })
    );
  };
  return (
    <div
      key={index}
      className="col-span-1 w-full bg-theme-dark-grey rounded-[30px]"
    >
      <div className="flex items-center justify-between gap-x-1 min-h-[180px] min-w-full pl-4 pr-2 py-2">
        <div className="flex-1 flex flex-col">
          <Link href={`/food/${id}`}>
            <h2 className="capitalize text-lg mb-1 font-medium">{title}</h2>
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
            <form
              onSubmit={handlerSubmit}
              className="flex items-center gap-x-2"
            >
              <input
                type="number"
                className="border-none outline-none text-center text-xs w-14 h-6 px-4 bg-theme-dark-black rounded-full"
                ref={amountInputRef}
              />
              <button
                type="submit"
                className="border-none outline-none bg-theme-green rounded-xl text-2xl p-1 font-bold"
              >
                <FiPlus />
              </button>
            </form>
          </div>
          {!amountIsValid && (
            <p className="mt-4 text-left text-xs font-medium text-theme-dark-orange">
              Please enter a amount (1-5).
            </p>
          )}
        </div>
        <Image
          src={image as string}
          width={125}
          height={125}
          alt="product"
          className="object-cover object-center drop-shadow w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Food;
