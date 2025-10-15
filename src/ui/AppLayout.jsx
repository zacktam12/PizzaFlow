import Header from "./Header";
import Footer from "./Footer";
import ToastProvider from "./ToastProvider";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <ToastProvider />
      <div className="relative grid min-h-screen grid-rows-[auto_1fr_auto_auto]">
        {/* Background Image Overlay */}
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/pizza-pic.jpg')",
          }}
        />
        
        {/* Dark overlay for better text readability */}
        <div className="fixed inset-0 z-10 bg-black/60" />
        
        {/* Content */}
        <div className="relative z-20">
          {isLoading && <Loader />}
          <Header />
          <div className="overflow-scroll">
            <main className="mx-auto max-w-3xl min-h-screen">
              <Outlet />
            </main>
          </div>
          <CartOverview />
        </div>
        
        {/* Footer without background overlay */}
        <div className="relative z-20">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
