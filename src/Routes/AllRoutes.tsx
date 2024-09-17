import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<LandingPage />} />
      {/* Private Routes */}
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AllRoutes;
