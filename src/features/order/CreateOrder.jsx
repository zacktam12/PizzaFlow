import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { motion } from "framer-motion";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../Store";
import { formatCurrency } from "../../utils/helpers";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);

  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const dispatch = useDispatch();

  const cart = useSelector(getCart);

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-2 my-4 rounded-lg bg-white/90 px-3 py-5 backdrop-blur-sm sm:px-6 sm:py-6"
    >
      <h2 className="mb-6 text-base font-bold uppercase italic text-primary-700 sm:text-lg md:text-xl">
        Ready to order? Let's go!
      </h2>

      <Form method="POST" className="space-y-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="text-sm font-semibold text-stone-700 sm:basis-40 sm:text-base">
            First Name
          </label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
          <label className="text-sm font-semibold text-stone-700 sm:basis-40 sm:text-base sm:pt-3">
            Phone number
          </label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700 sm:text-sm">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
          <label className="text-sm font-semibold text-stone-700 sm:basis-40 sm:text-base sm:pt-3">
            Address
          </label>
          <div className="relative grow">
            <input
              className="input w-full pr-24 sm:pr-32"
              type="text"
              name="address"
              defaultValue={address}
              disabled={isLoadingAddress}
              required
            />

            {addressStatus === "error" && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700 sm:text-sm">
                {errorAddress}
              </p>
            )}

            {!position.latitude && !position.longitude && (
              <span className="absolute right-1 top-1 z-50">
                <Button
                  disabled={isLoadingAddress}
                  type="small"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  Get position
                </Button>
              </span>
            )}
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg bg-primary-50 p-4 sm:items-center sm:gap-5">
          <input
            className="mt-0.5 h-5 w-5 flex-shrink-0 accent-primary-500 focus:outline-none focus:ring focus:ring-primary-500 focus:ring-offset-2 sm:mt-0 sm:h-6 sm:w-6"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="text-sm font-medium text-stone-700 sm:text-base">
            Want to give your order priority? <span className="text-primary-600">(+20% fee)</span>
          </label>
        </div>

        <div className="pt-2">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ""
            }
          />
          <Button type="primary" disabled={isSubmitting || isLoadingAddress}>
            {isSubmitting
              ? "Placing order...."
              : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </motion.div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number.We might need it to contact you.";
  if (Object.keys(errors).length > 0) return errors;

  // if everything is ok createNewOrder and redirect to the order page
  const newOrder = await createOrder(order);

  // do not overuse this method
  store.dispatch(clearCart());
  
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
