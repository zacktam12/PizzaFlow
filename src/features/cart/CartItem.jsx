import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="px-3 py-3 sm:flex sm:items-center sm:justify-between sm:px-4 sm:py-4">
      <p className="mb-3 text-sm font-medium text-stone-800 sm:mb-0 sm:text-base">
        <span className="font-bold text-primary-600">{quantity}&times;</span> {name}
      </p>
      <div className="flex items-center justify-between gap-3 sm:gap-6">
        <p className="text-sm font-bold text-stone-900 sm:text-base">{formatCurrency(totalPrice)}</p>
        <div className="flex items-center gap-2 sm:gap-3">
          <UpdateItemQuantity
            pizzaId={pizzaId}
            currentQuantity={currentQuantity}
          />
          <DeleteItem pizzaId={pizzaId} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
