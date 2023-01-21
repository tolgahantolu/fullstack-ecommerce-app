import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-full mt-8 flex flex-col items-center gap-10">
      <Image
        src="/notfound.svg"
        width={404}
        height={404}
        alt="undraw_page_not_found"
      />
      <h1 className="capitalize text-[75px] font-semibold">
        page{" "}
        <span className="text-theme-dark-orange font-semibold">not found</span>
      </h1>
    </div>
  );
};

export default NotFound;
