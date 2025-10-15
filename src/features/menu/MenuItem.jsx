import { motion } from 'framer-motion';
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import toast from 'react-hot-toast';

function MenuItem({ pizza, index = 0 }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
    toast.success(`${name} added to cart!`);
  }

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-stone-50 sm:gap-4 sm:px-4 sm:py-4"
    >
      <div className="relative overflow-hidden rounded-lg">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={imageUrl}
          alt={name}
          className={`h-20 w-20 flex-shrink-0 rounded-lg object-cover sm:h-24 sm:w-24 ${
            soldOut ? "opacity-70 grayscale" : ""
          }`}
        />
        {soldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
            <span className="text-white font-bold text-xs sm:text-sm">SOLD OUT</span>
          </div>
        )}
      </div>
      
      <div className="flex min-w-0 grow flex-col">
        <p className="text-sm font-semibold text-stone-800 sm:text-base md:text-lg">{name}</p>
        <p className="text-xs capitalize italic text-stone-500 sm:text-sm">
          {ingredients.join(", ")}
        </p>
        
        <div className="mt-auto flex flex-col gap-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
          {!soldOut ? (
            <p className="text-sm font-bold text-primary-600 sm:text-base">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-xs font-medium uppercase text-stone-500 sm:text-sm">
              Sold out
            </p>
          )}

          {isInCart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </motion.div>
          )}
          
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </motion.li>
  );
}

export default MenuItem;
