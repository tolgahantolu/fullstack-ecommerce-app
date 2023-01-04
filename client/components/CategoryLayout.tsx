import React, { Key } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../graphql/query";
import Link from "next/link";
import Image from "next/image";
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
            category: { id: Object; name: String; popular: Boolean },
            i: Key
          ) => (
            <Category {...category} index={i} paddingBottom={true} />
            //<div
            //  key={i}
            //  className="w-full bg-theme-dark-grey rounded-[30px] transition duration-750 hover:bg-theme-light-grey"
            //>
            //  <Link
            //    href="/category/pizzas"
            //    className="flex flex-col items-center justify-center"
            //  >
            //    <Image
            //      src="/category/pizza2.png"
            //      alt="category"
            //      width={100}
            //      height={100}
            //      className="py-2"
            //    />
            //    <p className="capitalize pb-2">{category.name}</p>
            //  </Link>
            //</div>
          )
        )}
      </div>
    </>
  );
};

export default CategoryLayout;
