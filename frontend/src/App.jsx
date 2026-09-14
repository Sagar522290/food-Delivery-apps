import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Restaurants from "./pages/Restaurants";
import RestaurantDetails from "./pages/RestaurantDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/MyOrders";
import OrderTracking from "./pages/OrderTracking";
import Profile from "./pages/Profile";
import AdminDashboard from "./admin/Dashboard";
import AdminRestaurants from "./admin/Restaurants";
import AdminFoodItems from "./admin/FoodItems";
import AdminOrders from "./admin/Orders";
import AdminUsers from "./admin/Users";
import AdminReviews from "./admin/Reviews";
import AdminCoupons from "./admin/Coupons";
import AdminReports from "./admin/Reports";
import AdminSettings from "./admin/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/:id/track" element={<OrderTracking />} />
      <Route path="/order/:id" element={<OrderTracking />} />
      <Route path="/profile" element={<Profile />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/restaurants" element={<AdminRestaurants />} />
      <Route path="/admin/food-items" element={<AdminFoodItems />} />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/reviews" element={<AdminReviews />} />
      <Route path="/admin/coupons" element={<AdminCoupons />} />
      <Route path="/admin/reports" element={<AdminReports />} />
      <Route path="/admin/settings" element={<AdminSettings />} />
    </Routes>
  );
}

export default App;