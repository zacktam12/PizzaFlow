import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/userName";

function Header() {
  return (
    <div className="flex items-center justify-between border-b border-stone-500 bg-yellow-500 px-4 py-3 font-pizza uppercase sm:px-6">
      <Link className="tracking-wider" to="./">
        Fast react pizza Co.
      </Link>
      <SearchOrder />
      <UserName />{" "}
    </div>
  );
}

export default Header;
