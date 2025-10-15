import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit} className="flex-1 max-w-xs">
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-full bg-white/90 px-3 py-2 text-xs transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-white/50 sm:text-sm sm:px-4 md:focus:w-full"
      />
    </form>
  );
}

export default SearchOrder;
