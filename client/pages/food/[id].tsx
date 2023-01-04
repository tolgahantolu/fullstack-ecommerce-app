import React, { Key } from "react";
import Image from "next/image";
import BackButton from "../../components/BackButton";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_FOOD } from "../../graphql/query";
import { FiPlus } from "react-icons/fi";
import { BsFillStarFill } from "react-icons/bs";
import Loader from "../../components/Loader";

const Product = () => {
  const { id } = useRouter().query;

  const { loading, error, data } = useQuery(GET_FOOD, {
    variables: { foodId: id },
    pollInterval: 500,
  });

  if (loading) return <Loader />;
  return (
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
            <form className="flex items-center gap-x-2">
              <input
                type="text"
                placeholder="1"
                className="border-none outline-none text-center w-36 h-10 px-4 bg-theme-dark-grey rounded-xl"
              />
              <button
                type="button"
                className="border-none outline-none bg-theme-green text-2xl p-2 rounded-xl font-bold"
              >
                <FiPlus />
              </button>
            </form>
          </div>
        </div>
        <Image
          src="/food/salad2.png"
          width={500}
          height={500}
          alt="product"
          className="object-cover object-center drop-shadow"
        />
      </div>
    </div>
  );
};

export default Product;
