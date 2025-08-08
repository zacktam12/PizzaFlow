import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <div className="flex flex-col gap-3 border-b border-stone-500 bg-yellow-500 px-4 py-3 font-pizza uppercase sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:px-6">
      <Link className="tracking-wider" to="./">
        Fast react pizza Co.
      </Link>
      <div className="flex items-center justify-between gap-2">
        <SearchOrder />
        <UserName />
      </div>
    </div>
  );
}

export default Header;
