import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router";
import { FaBars } from "react-icons/fa";

import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);



  return (
    <header className=" text-white flex flex-col justify-between">

    <div className="top flex justify-between items-center">

        <div className="right">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-3xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-900 from-red-400">Quickly </span>E-Commerce
            </h1>
        </div>

        <div className="left">
            <FaCartShopping className="text-2xl text-black absolute right-14 top-2.5 cursor-pointer md:relative md:left-0 md:top-0" />
        </div>

    </div>

    <>
  {/* Burger Icon */}
                <FaBars
                    className="text-2xl text-black absolute right-24 top-2 cursor-pointer md:hidden"
                    onClick={() => setIsOpen(!isOpen)}/>

  {/* Menu (show if isOpen) */}
            {isOpen && (
                <div className="container flex gap-5 h-52 md:hidden">
                    <div className="menu flex flex-col gap-5 justify-center items-center w-full rounded-3xl bg-gradient-to-l from-[#020024] to-[#007991] text-white">
                        <NavLink to="/" className="Navlinks">Producs</NavLink>
                        <NavLink to="/Categories" className="Navlinks">Categories</NavLink>
                        <NavLink to="/about" className="Navlinks">About</NavLink>
                        <NavLink to="/login" className="Navlinks">Login</NavLink>
                        <NavLink to="/rigester" className="Navlinks">Register</NavLink>
                    </div>
                </div>
            )}
</>


    <nav className="rounded-3xl bg-gradient-to-l from-[#020024] to-[#00B9DE] hidden md:flex">
        <div className="max-w-screen-xl p-4 w-full md:block " id="navbar-solid-bg">
                <ul className="flex justify-between items-center font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <div className="right flex gap-7">
                    <NavLink to="/" className="Navlinks">
                    Producs
                    </NavLink>

                    <NavLink to="/Categories" className="Navlinks">
                        Categories
                    </NavLink>

                    <NavLink to="/about" className="Navlinks">
                        About
                    </NavLink>
                </div>

                <div className="left flex gap-7">
                    <NavLink to="/login" className="Navlinks">
                        Login
                    </NavLink>

                    <NavLink to="/rigester" className="Navlinks">
                        Register
                    </NavLink>
                </div>
                </ul>
        </div>
    </nav>

    </header>
  )
}
