import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/userName";

function Header() {
  return (
    <div className="border-b border-stone-500 bg-yellow-500 px-4 py-3 uppercase">
      <Link className="tracking-[0.5rem]" to="./">
        Fast react pizza Co.
      </Link>
      <SearchOrder />
      <UserName />{" "}
    </div>
  );
}

export default Header;
