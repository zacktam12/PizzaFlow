import { motion } from "framer-motion";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import toast from "react-hot-toast";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      dispatch(clearCart());
      toast.success("Cart cleared");
    }
  };

  if (!cart.length) return <EmptyCart />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mx-2 my-4 rounded-lg bg-white/90 px-3 py-4 backdrop-blur-sm sm:px-6 sm:py-6"
    >
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mt-5 text-lg font-bold text-stone-800 sm:mt-6 sm:text-xl md:text-2xl"
      >
        Your cart, {username}
      </motion.h2>
      <ul className="mt-4 divide-y divide-stone-200 rounded-lg border border-stone-200 bg-white">
        {cart.map((item, index) => (
          <motion.div
            key={item.pizzaId}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
          >
            <CartItem item={item} />
          </motion.div>
        ))}
      </ul>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-3"
      >
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default Cart;
