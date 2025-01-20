import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Home from "./ui/Home";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/Order/:orderId",
    element: <Order />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/Order/new",
    element: <CreateOrder />,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
