import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";
import { Pizza, Menu, X, Home, ShoppingCart, Utensils } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/menu", label: "Menu", icon: Utensils },
    { to: "/cart", label: "Cart", icon: ShoppingCart },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg"
    >
      <div className="px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            className="flex items-center gap-2 tracking-wider text-white hover:text-accent-300 transition-colors" 
            to="./"
          >
            <Pizza className="h-6 w-6" />
            <span className="font-bold text-lg">PizzaFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.to)
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side - Search and User */}
          <div className="flex items-center gap-2 flex-1 justify-end md:gap-3 md:flex-initial">
            <div className="flex-1 md:flex-initial max-w-[200px] sm:max-w-xs">
              <SearchOrder />
            </div>
            <UserName />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-1 border-t border-white/20 mt-3">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMenuOpen ? 1 : 0,
                    x: isMenuOpen ? 0 : -20
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(link.to)
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Header;
