import React, { Key } from "react";
import { useRouter } from "next/router";
import BackButton from "../../components/BackButton";
import { GET_FOODS } from "../../graphql/query";
import Food from "../../components/Food";
import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { apolloClient } from "../../graphql/client";
import { FoodInterface } from "../../typescript/interfaces";

const CategoryDetails: NextPage<{ data: Object | any }> = ({ data }) => {
  const { id } = useRouter().query;
  return (
    <>
      <Head>
        <title>{`${id} - Stunning Food App | Tolgahan Tolu`}</title>
        <meta name="description" content="Food App Shopping Single Food Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      <BackButton />
      <div className="mr-5">
        <h1 className="text-3xl font-medium capitalize">{id}</h1>
        <div className="grid grid-cols-3 gap-4 mt-5 pr-5">
          {/* product element */}
          {data?.getFoods
            ?.filter((food: FoodInterface) => food.category === id)
            .map((food: FoodInterface, i: Key) => (
              <Food key={i} {...food} index={i} />
            ))}
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;

export const getServerSideProps: GetServerSideProps = async () => {
  const client = apolloClient();
  const { data } = await client.query({ query: GET_FOODS });

  return {
    props: {
      data,
    },
  };
};
