import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="my-2 space-y-1">
      <div className="mx-2 flex flex-wrap items-center justify-between gap-4 text-sm">
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize text-stone-500">
        {isLoadingIngredients ? "Loading" : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
