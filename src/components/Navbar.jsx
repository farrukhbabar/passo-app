import React, { useState } from "react";
import logo from "../assets/logo.png";
import Button from "./button";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#9FCB09] w-full">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center h-[92px] px-4">
        <div className="logo">
          <img src={logo} alt="Logo" className="w-[144px] h-[36px]" />
        </div>

        <ul className="hidden md:flex space-x-8 font-medium text-lg">
          <li className="font-medium text-lg"><NavLink to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? " font-bold "
                    : ""
                }>Home</NavLink> </li>

          <li className="font-medium text-lg"> <NavLink to="/about"
                className={({ isActive }) =>
                  isActive
                    ? " font-bold "
                    : ""
                }>How it works</NavLink>  </li>

          <li className="font-medium text-lg"><NavLink to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? " font-bold "
                    : ""
                }>Contact us</NavLink> </li>
        </ul>

        <div className="hidden md:block">
          <Button
            text="Download App"
            style={{
              background: "white",
              height: "54px",
              width: "204px",
              borderRadius: "50px",
              fontSize: "18px",
              fontWeight: 600,
            }}
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-20">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#9FCB09] px-4 pb-4">
          <ul className="flex flex-col space-y-4 font-medium text-lg">
            <li onClick={toggleMenu}>Home</li>
            <li onClick={toggleMenu}>How it works</li>
            <li onClick={toggleMenu}>Contact us</li>
            <li>
              <Button
                text="Download App"
                style={{
                  background: "white",
                  height: "54px",
                  width: "100%",
                  borderRadius: "50px",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
