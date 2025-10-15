// Test ID: IIDSAT
import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "./OrderItem";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();
  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="mx-2 my-4 space-y-4 rounded-lg bg-white/90 px-3 py-4 backdrop-blur-sm sm:space-y-6 sm:px-6 sm:py-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <h2 className="text-lg font-bold text-stone-800 sm:text-xl md:text-2xl">
          Order #{id} Status
        </h2>

        <div className="flex flex-wrap gap-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-red-50 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-50 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-lg bg-primary-50 px-4 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6 sm:py-5">
        <p className="text-sm font-semibold text-primary-900 sm:text-base">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs font-medium text-primary-700 sm:text-sm">
          (Estimated: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 rounded-lg border border-stone-200 bg-white">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)
                ?.ingredients ?? []
            }
          />
        ))}
      </ul>

      <div className="space-y-2 rounded-lg bg-stone-100 px-4 py-4 sm:px-6 sm:py-5">
        <p className="text-sm font-medium text-stone-700 sm:text-base">
          Price pizza: {formatCurrency(orderPrice)}
        </p>

        {priority && (
          <p className="text-sm font-medium text-stone-700 sm:text-base">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-base font-bold text-stone-900 sm:text-lg">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
