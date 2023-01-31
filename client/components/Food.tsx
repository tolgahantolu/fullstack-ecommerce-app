import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, Key, useRef } from "react";
import useAddItemToCart from "../hooks/useAddItemToCart";
import FoodForm from "./FoodForm";

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
  const { handlerAddItemToCart: handlerSubmit, amountIsValid } =
    useAddItemToCart(id, title, price, image, amountInputRef);

  return (
    <div
      key={index}
      className="col-span-1 w-full bg-theme-dark-grey rounded-[30px] py-3"
    >
      <div className="flex items-center justify-between gap-x-3 min-w-full min-h-[145px] max-h-[145px] h-full pl-4 pr-2 py-2">
        <div className="flex-1 flex flex-col h-full justify-between">
          <Link href={`/food/${id}`}>
            <h2
              data-testid="food-title"
              className="capitalize text-lg mb-1 font-medium"
            >
              {title}
            </h2>
            <div className="flex flex-row flex-wrap">
              {ingredients.length > 7 ? (
                <p className="text-theme-dark-grey2 text-sm font-medium leading-2">
                  {ingredients.slice(0, 7).join(", ").concat("...")}
                </p>
              ) : (
                <p className="text-theme-dark-grey2 text-sm font-medium leading-2">
                  {ingredients.join(", ")}
                </p>
              )}
            </div>
          </Link>
          <div className="mt-2 flex flex-row justify-between items-center">
            <p className="font-bold text-3xl leading-none">{`$${price}`}</p>
            <FoodForm
              onSubmit={(e: FormEvent) => handlerSubmit(e)}
              big={false}
              ref={amountInputRef}
            />
          </div>
          {!amountIsValid && (
            <p className="mt-4 text-left text-xs font-medium text-theme-dark-orange">
              Please enter a amount (1-5).
            </p>
          )}
        </div>
        <Image
          src={image as string}
          width={115}
          height={115}
          alt="product"
          className="object-cover object-center drop-shadow"
        />
      </div>
    </div>
  );
};

export default Food;
