import { Routes, Route } from "react-router-dom";
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
    </Routes>
  );
};

export default AllRoutes;
