import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./cart/SidebarContext";
import CartProvider from "./cart/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
