import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { Pizza, Clock, Truck, Star } from "lucide-react";

function Home() {
  const username = useSelector((state) => state.user.username);

  const features = [
    {
      icon: Pizza,
      title: "Fresh Ingredients",
      description: "Made with the finest quality ingredients"
    },
    {
      icon: Clock,
      title: "Quick Delivery",
      description: "Hot pizza at your door in 30 minutes"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "On orders over $20"
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "5-star reviews from happy customers"
    }
  ];

  return (
    <div className="my-8 px-4 sm:my-10 md:my-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-6xl sm:text-7xl md:text-8xl">🍕</span>
        </motion.div>

        <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl font-heading text-white drop-shadow-lg">
          The best pizza.
          <br />
          <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent drop-shadow-lg">
            Straight out of the oven, straight to you.
          </span>
        </h1>

        <p className="mb-8 text-base text-white/90 sm:text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Authentic Italian pizzas made with love and delivered with care.
          Order now and taste the difference!
        </p>

        {username === "" ? (
          <CreateUser />
        ) : (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Button to="/menu" type="primary">
              Continue ordering, {username}
            </Button>
          </motion.div>
        )}
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col items-center rounded-xl bg-white/95 backdrop-blur-sm p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 rounded-full bg-primary-100 p-3">
                <Icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mb-2 font-semibold text-stone-800">{feature.title}</h3>
              <p className="text-sm text-stone-600">{feature.description}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Social Proof */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-white/90 drop-shadow-md">
          <span className="font-bold text-primary-300">10,000+</span> pizzas delivered
          {" • "}
          <span className="font-bold text-primary-300">4.9★</span> rating
          {" • "}
          <span className="font-bold text-primary-300">5,000+</span> happy customers
        </p>
      </motion.div>
    </div>
  );
}

export default Home;
