import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";

const Products = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  console.log(products);

  // Define included categories
  const includedCategories = ["gym equipment", "gym accessories", "gym apparel"];

  // Filter products by included categories
  const filteredProducts = products.filter((item) =>
    includedCategories.includes(item.category)
  );

  return (
    <div className="bg-[#1c1c1c] text-white min-h-screen">
      {/* Header Section */}
      <section className="py-36">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center text-indigo-400">
            Explore Our Products
          </h1>
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
