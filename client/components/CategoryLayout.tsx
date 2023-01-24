import React, { Key } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../graphql/query";
import BackButton from "./BackButton";
import Category from "./Category";
import Loader from "./Loader";
import { CategoryInterface } from "../typescript/interfaces";

const CategoryLayout: React.FC<{
  categoriesData: Object | any;
}> = ({ categoriesData }) => {
  //  const { loading, error, data } = useQuery(GET_CATEGORIES);
  //
  //  if (loading) return <Loader />;
  //  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <BackButton />
      <div className="grid grid-cols-8 gap-x-6 gap-y-8 mr-10">
        {categoriesData?.getCategories?.map(
          (category: CategoryInterface, i: Key) => (
            <Category key={i} {...category} index={i} paddingBottom={true} />
          )
        )}
      </div>
    </>
  );
};

export default CategoryLayout;
