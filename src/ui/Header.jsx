import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/userName";

function Header() {
  return (
    <div className="bg-yellow-500 uppercase">
      <Link className="tracking-[0.5rem]" to="./">
        Fast react pizza Co.
      </Link>
      <SearchOrder />
      <UserName />{" "}
    </div>
  );
}

export default Header;
