import React, { FormEvent, Key, useRef, useState } from "react";
import Image from "next/image";
import BackButton from "../../components/BackButton";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_FOOD } from "../../graphql/query";
import { FiPlus } from "react-icons/fi";
import { BsFillStarFill } from "react-icons/bs";
import Loader from "../../components/Loader";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cartSlice";
import Head from "next/head";

const Product = () => {
  const { id } = useRouter().query;
  const amountInputRef = useRef<HTMLInputElement>(null);
  const [amountIsValid, setAmountIsValid] = useState<Boolean>(true);
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(GET_FOOD, {
    variables: { foodId: id },
    pollInterval: 500,
  });

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
        id: data?.getFood?.id,
        title: data?.getFood?.title,
        price: data?.getFood?.price,
        counter: enteredAmountNumber,
        amount: enteredAmountNumber,
      })
    );
  };

  if (loading) return <Loader />;
  return (
    <>
      <Head>
        <title>{`${data?.getFood?.title} - Stunning Food App | Tolgahan Tolu`}</title>
        <meta name="description" content="Food App Shopping Single Food Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>

      <div className="">
        <BackButton />

        <div className="flex justify-between items-center gap-x-20">
          <div className="flex flex-col gap-y-5">
            <h1 className="text-6xl font-medium capitalize">
              {data?.getFood?.title}
            </h1>
            <div>
              <div className="flex flex-row gap-x-10">
                <p className="flex items-center gap-x-2">
                  <span> Rating </span>{" "}
                  <span className="text-theme-light-orange">
                    <BsFillStarFill />
                  </span>{" "}
                  4,5/5
                </p>
                <p>
                  Category:{" "}
                  <span className="capitalize">{data?.getFood?.category}</span>
                </p>
              </div>
              <p>{data?.getFood?.desc}</p>
            </div>
            <div>
              <p className="">Ingredients</p>
              <div className="flex flex-row flex-wrap">
                {data?.getFood?.ingredients.map((el: Array<string>, i: Key) => (
                  <p key={i}>{el}</p>
                ))}
              </div>
            </div>
            <p className="text-5xl font-bold">${data?.getFood?.price}</p>

            <div>
              <form
                onSubmit={handlerSubmit}
                className="flex items-center gap-x-2"
              >
                <input
                  type="number"
                  className="border-none outline-none text-center w-36 h-10 px-4 bg-theme-dark-grey rounded-xl"
                  ref={amountInputRef}
                />
                <button
                  type="submit"
                  className="border-none outline-none bg-theme-green text-2xl p-2 rounded-xl font-bold"
                >
                  <FiPlus />
                </button>
              </form>
              {!amountIsValid && (
                <p className="mt-4 text-left font-medium text-theme-dark-orange">
                  Please enter a amount (1-5).
                </p>
              )}
            </div>
          </div>
          <Image
            src="/food/salad2.png"
            width={500}
            height={500}
            alt="product"
            className="object-cover object-center drop-shadow w-auto h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Product;
