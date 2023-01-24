import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import { addItemToCart } from "../store/cartSlice";

const useAddItemToCart = (
  id: Object,
  title: String,
  price: Number,
  image: String,
  //  counter: Number,
  //  amount: Number,
  amountInputRef: Object | any
) => {
  const dispatch = useDispatch();
  const [amountIsValid, setAmountIsValid] = useState<Boolean>(true);

  // ! Submit Handler Function
  const handlerAddItemToCart = (e: FormEvent) => {
    e.preventDefault();

    const enteredAmount: String | any = amountInputRef.current?.value;
    const enteredAmountNumber: Number = +enteredAmount;

    if (
      enteredAmount?.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    } else {
      if (amountIsValid !== true) setAmountIsValid(true);
    }

    dispatch(
      addItemToCart({
        id,
        title,
        price,
        image,
        counter: enteredAmountNumber,
        amount: enteredAmountNumber,
      })
    );
  };

  return { handlerAddItemToCart, amountIsValid };
};

export default useAddItemToCart;
