import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, Key, useRef } from "react";
import useAddItemToCart from "../hooks/useAddItemToCart";
import FoodForm from "./FoodForm";

const PromotionalKit: React.FC<{
  id: Object;
  title: String;
  desc: String;
  price: Number;
  kit: Boolean;
  category: String;
  ingredients: Array<string>;
  image: String;
  index: Key;
}> = ({ id, title, desc, price, kit, category, ingredients, index, image }) => {
  const amountInputRef = useRef<HTMLInputElement>(null);
  const { handlerAddItemToCart: handlerSubmit, amountIsValid } =
    useAddItemToCart(id, title, price, image, amountInputRef);

  return (
    <div key={index} className="w-full bg-theme-dark-grey rounded-[30px] py-1">
      <div className="flex items-center justify-between gap-x-1 min-w-full min-h-[120px] max-h-[120px] h-full px-2">
        <Image
          src={image as string}
          width={75}
          height={75}
          alt="product"
          className="object-cover object-center drop-shadow w-auto h-auto"
        />
        <div className="flex flex-col px-[6px]">
          <Link href={`/food/${id}`}>
            <h2 className="capitalize mb-1 font-semibold">{title}</h2>
            <div className="flex flex-row flex-wrap">
              {ingredients.length > 6 ? (
                <p className="text-theme-dark-grey2 text-xs font-medium leading-2">
                  {ingredients.slice(0, 6).join(", ").concat("...")}
                </p>
              ) : (
                <p className="text-theme-dark-grey2 text-xs font-medium leading-2">
                  {ingredients.join(", ")}
                </p>
              )}
            </div>
          </Link>
          <div className="mt-3 flex flex-row justify-between">
            <p className="font-bold text-[26px] leading-none">{`$${price}`}</p>
            <FoodForm
              onSubmit={(e: FormEvent) => handlerSubmit(e)}
              big={false}
              ref={amountInputRef}
            />
          </div>
          {!amountIsValid && (
            <p className="mt-1 text-left text-xs font-medium text-theme-dark-orange">
              Please enter a amount (1-5).
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromotionalKit;
