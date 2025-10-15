import { motion } from "framer-motion";
import { ShoppingCart, Pizza } from "lucide-react";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";

function EmptyCart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="mx-2 my-4 rounded-xl bg-white/95 px-4 py-12 text-center shadow-lg backdrop-blur-sm sm:px-6 sm:py-16"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="mb-6 flex justify-center"
      >
        <div className="rounded-full bg-gradient-to-br from-stone-100 to-stone-200 p-6 shadow-inner sm:p-8">
          <ShoppingCart className="h-12 w-12 text-stone-400 sm:h-16 sm:w-16 md:h-20 md:w-20" />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="mb-3 text-xl font-bold text-stone-800 sm:text-2xl md:text-3xl">
          Your cart is empty
        </h2>
        <p className="mb-8 text-sm text-stone-600 sm:text-base">
          Looks like you haven't added any pizzas yet.
          <br className="hidden sm:block" />
          Start exploring our delicious menu!
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Button type="primary" to="/menu">
            <Pizza className="mr-2 inline h-4 w-4 sm:h-5 sm:w-5" />
            Browse Menu
          </Button>
          <LinkButton to="/">Go to Home</LinkButton>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default EmptyCart;
