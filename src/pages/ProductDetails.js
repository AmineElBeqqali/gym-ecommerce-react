import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../cart/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // get the product id from url
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  // get the single product based on id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center text-white bg-[#1c1c1c]">
        Loading...
      </section>
    );
  }

  // destructure product
  const { title, price, description, image } = product;

  return (
    <section className="pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center bg-[#1c1c1c] text-white">
      <div className="container mx-auto">
        {/* image and text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-xs rounded-lg shadow-lg"
              src={image}
              alt={title}
            />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-2xl text-indigo-400 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8 text-gray-300">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-indigo-500 hover:bg-indigo-600 py-4 px-8 text-white rounded-lg shadow-md transition-all"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
