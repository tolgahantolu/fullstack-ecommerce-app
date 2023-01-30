import React, { forwardRef } from "react";
import { FiPlus } from "react-icons/fi";

const FoodForm = forwardRef<HTMLInputElement, { onSubmit: any; big: Boolean }>(
  ({ onSubmit, big }, ref) => {
    return (
      <form onSubmit={onSubmit} className="flex items-center gap-x-2">
        <input
          type="number"
          className={`${
            big
              ? "border-none outline-none text-center text-lg px-4 w-36 h-10 bg-theme-dark-grey rounded-xl"
              : "border-none outline-none text-center text-xs w-14 h-6 px-4 bg-theme-dark-black rounded-full"
          }`}
          ref={ref}
        />
        <button
          type="submit"
          className={`${
            big
              ? "border-none outline-none bg-theme-green text-2xl p-2 rounded-xl font-bold"
              : "border-none outline-none bg-theme-green rounded-xl text-2xl p-1 font-bold"
          }`}
        >
          <FiPlus />
        </button>
      </form>
    );
  }
);

export default FoodForm;
