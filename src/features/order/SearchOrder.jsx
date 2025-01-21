import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setquery] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.prevetDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setquery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => e.target.value}
      ></input>
    </form>
  );
}

export default SearchOrder;
