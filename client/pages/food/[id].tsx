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
import { GetServerSideProps, NextPage } from "next";
import { apolloClient } from "../../graphql/client";
import useAddItemToCart from "../../hooks/useAddItemToCart";

const Product: NextPage<{ data: Object | any }> = ({ data }) => {
  //  const { id } = useRouter().query;
  const amountInputRef = useRef<HTMLInputElement>(null);
  const { handlerAddItemToCart: handlerSubmit, amountIsValid } =
    useAddItemToCart(
      data?.getFood?.id,
      data?.getFood?.title,
      data?.getFood?.price,
      data?.getFood?.image,
      amountInputRef
    );

  //  if (loading) return <Loader />;
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
                onSubmit={(e: FormEvent) => handlerSubmit(e)}
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
            src={data?.getFood?.image}
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id: any = params?.id;
  const client = apolloClient();
  const { loading, error, data } = await client.query({
    query: GET_FOOD,
    variables: { foodId: id },
  });

  return {
    props: {
      data,
    },
  };
};
