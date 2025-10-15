import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { useNavigate, useRouteError } from "react-router-dom";
import Button from "./Button";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-lg rounded-xl bg-white/95 p-6 text-center shadow-xl backdrop-blur-sm sm:p-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6 flex justify-center"
        >
          <div className="rounded-full bg-red-100 p-5 sm:p-6">
            <AlertCircle className="h-12 w-12 text-red-600 sm:h-16 sm:w-16" />
          </div>
        </motion.div>
        <h1 className="mb-3 text-2xl font-bold text-stone-800 sm:text-3xl">
          Oops! Something went wrong
        </h1>
        <p className="mx-auto mb-8 max-w-md text-sm text-stone-600 sm:text-base">
          {error.data || error.message}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button type="secondary" onClick={() => navigate(-1)}>
            Go Back
          </Button>
          <Button type="primary" to="/">
            Go Home
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;
