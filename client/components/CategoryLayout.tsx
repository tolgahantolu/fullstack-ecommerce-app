import React, { Key } from "react";
import BackButton from "./BackButton";
import Category from "./Category";
import { CategoryInterface } from "../typescript/interfaces";

const CategoryLayout: React.FC<{
  categoriesData: Object | any;
}> = ({ categoriesData }) => {
  return (
    <>
      <BackButton />
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-x-6 gap-y-8 mr-10">
        {categoriesData?.getCategories?.map(
          (category: CategoryInterface, i: Key) => (
            <Category key={i} {...category} index={i} />
          )
        )}
      </div>
    </>
  );
};

export default CategoryLayout;
