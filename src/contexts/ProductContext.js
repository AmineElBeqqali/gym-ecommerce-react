import React, { createContext, useState, useEffect } from "react";
import productData from "../data/product.json"; // Adjust the path if needed

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Directly use the imported JSON data
    setProducts(productData);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
