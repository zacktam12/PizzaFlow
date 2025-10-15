import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Filter menu items based on search and filter
  const filteredMenu = menu.filter((pizza) => {
    const matchesSearch = pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pizza.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = filterType === "all" || 
                          (filterType === "vegetarian" && !pizza.ingredients.some(ing => 
                            ['bacon', 'ham', 'chicken', 'pepperoni', 'sausage', 'salami'].includes(ing.toLowerCase())
                          )) ||
                          (filterType === "available" && !pizza.soldOut);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="mx-2 my-4 rounded-lg bg-white/90 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6">
      {/* Search and Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 space-y-4"
      >
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400 sm:left-4 sm:h-5 sm:w-5" />
          <input
            type="text"
            placeholder="Search pizzas or ingredients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border border-stone-300 bg-white py-2.5 pl-10 pr-4 text-sm transition-all focus:border-primary-500 focus:outline-none focus:ring focus:ring-primary-200 sm:py-3 sm:pl-12 sm:text-base"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterType("all")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${
              filterType === "all"
                ? "bg-primary-500 text-white shadow-md"
                : "border border-stone-300 bg-white text-stone-600 hover:bg-stone-100"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterType("vegetarian")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${
              filterType === "vegetarian"
                ? "bg-primary-500 text-white shadow-md"
                : "border border-stone-300 bg-white text-stone-600 hover:bg-stone-100"
            }`}
          >
            Vegetarian
          </button>
          <button
            onClick={() => setFilterType("available")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:px-4 sm:py-2 sm:text-sm ${
              filterType === "available"
                ? "bg-primary-500 text-white shadow-md"
                : "border border-stone-300 bg-white text-stone-600 hover:bg-stone-100"
            }`}
          >
            Available Only
          </button>
        </div>

        {/* Results count */}
        <p className="text-xs font-medium text-stone-600 sm:text-sm">
          Showing <span className="font-bold text-primary-600">{filteredMenu.length}</span> of{" "}
          <span className="font-bold text-stone-800">{menu.length}</span> pizzas
        </p>
      </motion.div>

      {/* Menu Items */}
      {filteredMenu.length > 0 ? (
        <ul className="divide-y divide-stone-200 rounded-lg border border-stone-200 bg-white">
          {filteredMenu.map((pizza, index) => (
            <MenuItem pizza={pizza} key={pizza.id} index={index} />
          ))}
        </ul>
      ) : (
        <div className="rounded-lg bg-stone-50 py-12 text-center">
          <p className="text-base font-medium text-stone-500 sm:text-lg">
            No pizzas found matching your criteria.
          </p>
          <p className="mt-2 text-xs text-stone-400 sm:text-sm">
            Try adjusting your search or filters.
          </p>
        </div>
      )}
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
