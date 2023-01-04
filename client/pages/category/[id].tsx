import React, { Key } from "react";
import { useRouter } from "next/router";
import BackButton from "../../components/BackButton";
import { useQuery } from "@apollo/client";
import { GET_FOODS } from "../../graphql/query";
import Food from "../../components/Food";
import Loader from "../../components/Loader";

const CategoryDetails = () => {
  const { id } = useRouter().query;

  const { loading, error, data } = useQuery(GET_FOODS);

  if (loading) return <Loader />;
  return (
    <>
      <BackButton />
      <div className="mr-5">
        <h1 className="text-3xl font-medium capitalize">{id}</h1>
        <div className="grid grid-cols-3 gap-4 mt-5 pr-5">
          {/* product element */}
          {data?.getFoods?.map(
            (
              food: {
                id: Object;
                title: String;
                desc: String;
                price: Number;
                kit: Boolean;
                category: String;
                ingredients: Array<string>;
              },
              i: Key
            ) => (
              <>{food.category === id && <Food {...food} index={i} />}</>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
