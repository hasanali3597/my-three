import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import ThemToggle from "./ThemToggle";
import { FaCartShopping } from "react-icons/fa6";
import { CardContext } from "../root/root";

const links = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
  {
    name: "Shop ",
    path: "/shoppin",
    icon: (
      <div className="relative w-fit">
        <FaCartShopping className="text-2xl cursor-pointer" />

        <span className="text-xl absolute -top-5 -right-5 rounded-full px-2 py-1">
          0
        </span>
      </div>
    ),
  },
];

const Navebar = () => {
  const { cart, setCart } = use(CardContext);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  className={({ isActive }) => (isActive ? "bg-amber-300" : "")}
                  to={link.path}
                >
                  {link.icon ? link.icon : link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <Link to="/">
          <img
            className=" h-13 w-15"
            src="https://i.ibb.co.com/Kc8NFLW9/Pngtree-tree-logo-with-green-leaves-8952332.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                className={({ isActive }) => (isActive ? "bg-amber-300" : "")}
                to={link.path}
              >
                {link.icon ? link.icon : link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <p>{cart.length}</p>
      </div>
      <div className="navbar-end">
        <ThemToggle />
      </div>
    </div>
  );
};

export default Navebar;
