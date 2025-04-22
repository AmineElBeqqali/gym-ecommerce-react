import React, { useContext } from "react";
import { SidebarContext } from "../cart/SidebarContext";
import { CartContext } from "../cart/CartContext";
import { Link } from "react-router-dom";
import Logo from "..//img/gym_logo.png";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <header
      className={`bg-[#10100f] py-6 fixed w-full z-10 lg:px-8 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/HomePage">
          <div className="w-[70px]">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>

        {/* Navigation Buttons */}
        <div className="flex space-x-60">
          <Link to="/HomePage">
            <button className="px-4 py-2 text-sm font-medium text-white border border-transparent hover:border-white transition">
              Home
            </button>
          </Link>
          <Link to="/products">
            <button className="px-4 py-2 text-sm font-medium text-white border border-transparent hover:border-white transition">
              Products
            </button>
          </Link>
          <Link to="/about">
            <button className="px-4 py-2 text-sm font-medium text-white border border-transparent hover:border-white transition">
              About Us
            </button>
          </Link>
        </div>

        {/* Cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl text-white" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
