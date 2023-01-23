import Head from "next/head";
import { Inter } from "@next/font/google";
import HomeLayout from "../components/HomeLayout";
import { GetServerSideProps } from "next";
import type { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES, GET_FOODS } from "../graphql/query";
import { apolloClient } from "../graphql/client";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage<{
  foods: Object;
  categories: Object;
}> = ({ foods, categories }) => {
  return (
    <>
      <Head>
        <title>Home - Stunning Food App | Tolgahan Tolu</title>
        <meta name="description" content="Food App Created by Tolgahan Tolu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>

      <HomeLayout foodsData={foods} categoriesData={categories} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const client = apolloClient();
  const {
    loading: foodsLoading,
    error: foodsError,
    data: foodsData,
  } = await client.query({ query: GET_FOODS });
  const {
    loading: categoriesLoading,
    error: categoriesError,
    data: categoriesData,
  } = await client.query({ query: GET_CATEGORIES });

  return {
    props: {
      foods: foodsData,
      categories: categoriesData,
    },
  };
};
