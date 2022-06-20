import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavMobile = ({ isOpen, setIsOpen }) => {
  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      animate={isOpen ? { x: "-100%" } : { x: "0" }}
      className="fixed -right-full top-0 flex flex-col justify-evenly items-center bg-black font-bold text-3xl w-full h-screen origin-right"
    >
      <NavLink onClick={handleNav} className="nav-link-hover" to="/characters">
        Characters
      </NavLink>
      <NavLink onClick={handleNav} className="nav-link-hover" to="/locations">
        Locations
      </NavLink>
      <NavLink onClick={handleNav} className="nav-link-hover" to="/episodes">
        Episodes
      </NavLink>
    </motion.div>
  );
};

export default NavMobile;
