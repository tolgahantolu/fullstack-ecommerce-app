import React, { Key } from "react";
import Image from "next/image";
import Link from "next/link";

const Category: React.FC<{
  id: Object;
  name: String;
  popular: Boolean;
  image: String;
  paddingBottom: Boolean;
  index: Key;
}> = ({ id, name, popular, image, paddingBottom, index }) => {
  return (
    <div
      key={index}
      className="w-full col-span-1 bg-theme-dark-grey px-3 rounded-[40px] transition duration-750 hover:bg-theme-light-grey"
    >
      <Link
        href={`/category/${name}`}
        className="flex flex-col items-center justify-center"
      >
        <Image
          src={image as string}
          alt="category"
          width={75}
          height={75}
          className="py-2 w-auto h-auto"
        />
        <p className={`capitalize ${paddingBottom ? "pb-2" : "pb-0"}`}>
          {name}
        </p>
      </Link>
    </div>
  );
};

export default Category;
