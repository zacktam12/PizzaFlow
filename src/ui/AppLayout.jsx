import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import { Loader } from "../features/menu/Menu";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      <Header />
      {isLoading && <Loader />}
      <main>
        <Outlet />{" "}
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
