import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Key, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import { RootState } from "../store";
import { addItemToCart, removeItemFromCart } from "../store/cartSlice";

const Cart = () => {
  const checkUser = useSelector((state: RootState) => state.auth.user);
  const checkEmail = useSelector((state: RootState) => state.auth.email);
  const productItems = useSelector((state: RootState) => state.cart.products);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!checkUser) {
      router.push("/login");
    }
  }, [checkUser, router]);

  const handlerAddItem = (id: String, price: Number) => {
    dispatch(
      addItemToCart({
        id,
        price,
        counter: 1,
      })
    );
  };

  const handlerRemoveItem = (id: String, price: Number) => {
    dispatch(
      removeItemFromCart({
        id,
        price,
        counter: 1,
      })
    );
  };

  return (
    <>
      <Head>
        <title>Shopping Cart - Stunning Food App | Tolgahan Tolu</title>
        <meta name="description" content="Food App Shopping Cart Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
      {checkUser && (
        <div className="flex gap-x-8">
          <div className="flex-1 pr-10 mmd:pr-0">
            <h1 className="text-3xl capitalize font-medium">Shopping Cart</h1>
            <div className="mt-5 flex flex-col gap-y-5 border-b-2 border-theme-dark-grey pb-10 overflow-y-auto h-[540px] pr-5">
              {/* cart product */}
              {productItems.length === 0 && (
                <div className="flex flex-col w-full h-full justify-between items-start gap-10">
                  <p className="capitalize text-[#b2afaf] text-lg">
                    your cart is empty...
                  </p>
                  <BackButton />
                </div>
              )}
              {productItems.map((product: any) => (
                <div
                  key={product.id as Key}
                  className="bg-theme-light-grey p-3 rounded-[30px] flex flex-col xs:flex-row xs:items-center gap-3"
                >
                  <Image
                    src={product.image as string}
                    width={75}
                    height={75}
                    alt="cart product"
                    className="object-cover object-center drop-shadow w-auto h-auto"
                  />
                  <div className="flex-1 flex flex-col gap-1 items-start">
                    <h3 className="capitalize">{product.title}</h3>
                    <p className="bg-theme-light-black px-2 py-[2px] text-[10px] rounded-lg">
                      220g
                    </p>
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-between">
                    <div className="flex items-center gap-x-[2px]">
                      <button
                        type="button"
                        className="bg-theme-light-black text-white outline-none text-sm border-none rounded-lg p-1"
                        onClick={() =>
                          handlerAddItem(product.id, product.price)
                        }
                      >
                        <AiOutlinePlus />
                      </button>
                      <input
                        type="text"
                        value={product.quantity}
                        className="max-w-[40px] bg-theme-light-grey outline-none border-none text-center text-sm"
                      />
                      <button
                        type="button"
                        className="bg-theme-light-black text-white outline-none text-sm border-none rounded-lg p-1"
                        onClick={() =>
                          handlerRemoveItem(product.id, product.price)
                        }
                      >
                        <AiOutlineMinus />
                      </button>
                    </div>
                    <h2 className="text-[40px] font-bold">
                      ${product.totalPrice}
                    </h2>
                  </div>
                </div>
              ))}
            </div>

            {/* cart summary */}
            <div className="mt-3 flex flex-row justify-between items-center">
              <p className="hidden xs:flex items-center gap-x-2">
                Promo Code:
                <span className="bg-theme-light-black px-2 py-[2px] rounded-full">
                  xxx-xxx
                </span>
              </p>
              <p className="flex items-center gap-x-2">
                Cart Summary:
                <span className="text-theme-green font-bold text-2xl">
                  ${totalAmount}
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden mmd:block flex-1 bg-[#0c0c0c] rounded-tl-[50px] pr-10 pt-10">
            <div className="pl-10">
              <h1 className="text-3xl capitalize font-medium">Cart Details</h1>

              <form className="mt-5 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="name"
                    className="text-xs text-theme-light-grey "
                  >
                    Name and Surname
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="text-2xl bg-transparent outline-none border-b border-theme-dark-grey py-2"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="number"
                    className="text-xs text-theme-light-grey "
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    className="text-2xl bg-transparent outline-none border-b border-theme-dark-grey py-2"
                  />
                </div>
              </form>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex flex-row justify-start items-center gap-x-2">
                  <Image
                    src={`${
                      checkUser && checkEmail ? "/profile.svg" : "/avatar.svg"
                    }`}
                    width={50}
                    height={50}
                    alt="profile"
                    className="object-cover rounded-full object-top w-auto h-auto"
                  />
                  <h2 className="text-sm break-all font-medium">
                    {checkEmail}
                  </h2>
                </div>
                <button
                  type="submit"
                  className="bg-theme-green rounded-full px-6 py-2 text-lg font-medium capitalize"
                >
                  check out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
