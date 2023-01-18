import React, { Key } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../graphql/query";
import BackButton from "./BackButton";
import Category from "./Category";
import Loader from "./Loader";

const CategoryLayout = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <Loader />;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <BackButton />
      <div className="grid grid-cols-8 gap-x-6 gap-y-8 mr-10">
        {data?.getCategories?.map(
          (
            category: {
              id: Object;
              name: String;
              popular: Boolean;
              image: String;
            },
            i: Key
          ) => (
            <Category key={i} {...category} index={i} paddingBottom={true} />
          )
        )}
      </div>
    </>
  );
};

export default CategoryLayout;
