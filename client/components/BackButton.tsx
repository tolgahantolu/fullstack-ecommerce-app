import { useRouter } from "next/router";
import { HiOutlineChevronLeft } from "react-icons/hi";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="mb-16 flex items-center gap-x-1 font-semibold capitalize border border-theme-light-orange rounded-full px-6 py-3 transition duration-750 hover:bg-theme-light-orange cursor-pointer"
    >
      <span>
        <HiOutlineChevronLeft />
      </span>
      return back
    </button>
  );
};

export default BackButton;
