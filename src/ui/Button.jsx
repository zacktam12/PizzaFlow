import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full font-semibold uppercase tracking-wide transition-all duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  const styles = {
    primary:
      base +
      " bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 focus:ring-primary-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 px-3 py-2.5 text-xs sm:px-4 sm:py-3 sm:text-sm md:px-6 md:py-4 md:text-base",
    small:
      base +
      " bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-300 px-3 py-1.5 text-xs sm:px-4 sm:py-2 md:px-5 md:py-2.5",
    round:
      base +
      " bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-300 px-2 py-1 text-xs sm:px-2.5 sm:py-1 md:px-3.5 md:py-2 md:text-sm",
    secondary:
      base +
      " border-2 border-stone-300 text-stone-600 hover:bg-stone-100 focus:ring-stone-200 px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm md:px-6 md:py-3.5",
  };

  const MotionLink = motion(Link);

  if (to)
    return (
      <MotionLink
        to={to}
        className={styles[type]}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </MotionLink>
    );

  if (onClick)
    return (
      <motion.button
        onClick={onClick}
        disabled={disabled}
        className={styles[type]}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.button>
    );

  return (
    <motion.button
      disabled={disabled}
      className={styles[type]}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}

export default Button;
