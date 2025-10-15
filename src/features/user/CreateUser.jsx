import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { User, Sparkles, ArrowRight } from "lucide-react";

function CreateUser() {
  const [username, setUsername] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username.trim()) return;
    
    setIsSubmitting(true);
    
    // Add a small delay for better UX
    setTimeout(() => {
      dispatch(updateName(username.trim()));
      navigate("/Menu");
    }, 500);
  }

  const isValidName = username.trim().length >= 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="mx-auto max-w-md rounded-2xl border border-white/20 bg-white/95 p-5 shadow-2xl backdrop-blur-sm sm:p-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="mb-6 text-center"
      >
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-500 sm:h-16 sm:w-16">
          <User className="h-7 w-7 text-white sm:h-8 sm:w-8" />
        </div>
        <h2 className="mb-2 text-xl font-bold text-stone-800 sm:text-2xl">
          Welcome to PizzaFlow! 🍕
        </h2>
        <p className="text-sm text-stone-600 sm:text-base">
          Let's get started by knowing your name
        </p>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <motion.div
            className={`relative transition-all duration-300 ${
              isFocused ? "scale-105" : "scale-100"
            }`}
          >
            <input
              type="text"
              placeholder="Enter your full name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`w-full rounded-xl border-2 px-3 py-3 pr-10 text-base transition-all duration-300 focus:outline-none sm:px-4 sm:py-4 sm:pr-12 sm:text-lg ${
                isFocused
                  ? "border-primary-500 bg-white shadow-lg"
                  : "border-stone-200 bg-stone-50"
              } ${
                username && isValidName
                  ? "border-green-400 bg-green-50"
                  : username && !isValidName
                  ? "border-red-400 bg-red-50"
                  : ""
              }`}
            />
            
            <AnimatePresence>
              {username && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {isValidName ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-3 h-3 text-white"
                      >
                        ✓
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                    >
                      <span className="text-white text-sm">!</span>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {username && !isValidName && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-500 text-sm mt-2 flex items-center"
              >
                <span className="mr-1">⚠️</span>
                Please enter at least 2 characters
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {isValidName && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Button 
                type="primary" 
                disabled={isSubmitting}
                className="w-full py-4 text-lg font-semibold"
              >
                {isSubmitting ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    Starting your journey...
                  </motion.div>
                ) : (
                  <motion.div
                    className="flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Start Ordering
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.div>
                )}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {!isValidName && username.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <p className="text-stone-500 text-sm">
              Almost there! Just a few more characters...
            </p>
          </motion.div>
        )}
      </form>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 text-center"
      >
        <p className="text-xs text-stone-400">
          By continuing, you agree to our terms of service
        </p>
      </motion.div>
    </motion.div>
  );
}

export default CreateUser;
