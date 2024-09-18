import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import PrivateRoute from "@/components/PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<LandingPage />} />
      {/* Private Routes */}
      <Route
        path="/product/:id"
        element={
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      {/* page not found */}
      <Route
        path="*"
        element={
          <div className="w-full h- h-screen flex justify-center items-center">
            <div className="text-center">
              <h1 className="text-xl font-semibold">Page Not Found</h1>
              <Link to="/"><p className="underline text-indigo-800">Go Back</p></Link>
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
