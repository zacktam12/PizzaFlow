import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 px-4 py-3 sm:px-6">
      <div className="flex items-center justify-between gap-2 text-sm sm:gap-4 sm:text-base">
        <p className="font-medium text-stone-800">
          <span className="font-bold text-primary-600">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold text-stone-900 whitespace-nowrap">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-xs capitalize text-stone-500 sm:text-sm">
        {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
