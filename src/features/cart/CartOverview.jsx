import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  // Access Redux state
  const cart = useSelector((state) => state.cart?.cart || []);

  // Calculate total quantity and price
  const totalCartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="font-semibold text-stone-300">
        {totalCartQuantity} {totalCartQuantity === 1 ? "pizza" : "pizzas"} •{" "}
        {formatCurrency(totalCartPrice)}
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
