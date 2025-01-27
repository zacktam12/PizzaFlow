import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { getCart, getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  // Access Redux state
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  console.log(totalCartQuantity);

  // add this when you have the cart
  // if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="font-semibold text-stone-300">
        <span>{totalCartQuantity} pizzas </span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link
        to="/cart"
        className="font-semibold text-amber-400 hover:text-amber-300"
      >
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
