import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import AboutUs from "./pages/AboutUs";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          {/* Redirect from / to /HomePage */}
          <Route path="/" element={<Navigate to="/HomePage" replace />} />
          {/* Route for Home Page */}
          <Route path="/HomePage" element={<HomePage />} />
          {/* Route for Products Page */}
          <Route path="/products" element={<Products />} />
          {/* Route for Product Details Page */}
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* Route for About Us Page */}
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Sidebar />
      </Router>
    </div>
  );
};

export default App;
