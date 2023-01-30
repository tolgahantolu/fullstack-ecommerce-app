import Head from "next/head";
import { Inter } from "@next/font/google";
import CategoryLayout from "../components/CategoryLayout";
import { GetServerSideProps, NextPage } from "next";
import { apolloClient } from "../graphql/client";
import { GET_CATEGORIES } from "../graphql/query";

const inter = Inter({ subsets: ["latin"] });

const Category: NextPage<{
  categories: Object;
}> = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Categories - Stunning Food App | Tolgahan Tolu</title>
        <meta name="description" content="Food App Categories Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>

      <CategoryLayout categoriesData={categories} />
    </>
  );
};

export default Category;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const client = apolloClient();
  const { data } = await client.query({
    query: GET_CATEGORIES,
  });

  return {
    props: {
      categories: data,
    },
  };
};
