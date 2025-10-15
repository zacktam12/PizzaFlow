import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  // Access Redux state
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  // add this when you have the cart
  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-3 py-3 text-xs uppercase text-stone-200 sm:px-6 sm:text-sm md:text-base">
      <p className="font-semibold text-stone-300 space-x-2">
        <span className="inline-block">{totalCartQuantity} {totalCartQuantity === 1 ? 'pizza' : 'pizzas'}</span>
        <span className="inline-block">{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart" className="hover:text-stone-300 whitespace-nowrap hover:underline">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
