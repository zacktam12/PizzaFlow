import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div className="bg-yellow-500">
      <Link to="./">Fast react pizza Co.</Link>
      <SearchOrder />
      <p>Zack</p>
    </div>
  );
}

export default Header;
