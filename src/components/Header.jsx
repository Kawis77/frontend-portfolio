import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <header className="bg-[#e3e3e3] text-black p-4">
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-16 md:h-20 w-auto" />
        <div className="w-full h-px border-b border-black mt-8 mr-4"></div>
        <nav className="w-auto flex items-center">
          <ul className="hidden md:flex space-x-auto gap-2 text-lg font-medium">
              <NavLink to="/" className={({ isActive }) => isActive ? "header-item active" : "header-item" }>
                <span className="header-text">home</span>
               </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "header-item active" : "header-item" }>
                <span className="header-text">o nas</span>
                </NavLink>
                <NavLink to="/technologies" className={({ isActive }) => isActive ? "header-item active" : "header-item" }>
                <span className="header-text">technologie</span>
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "header-item active" : "header-item" }>
                <span className="header-text">projekty</span>
                </NavLink>
               <NavLink to="/contact" className={({ isActive }) => isActive ? "header-item active" : "header-item" }>
               <span className="header-text">kontakt</span>
               </NavLink>
    
          </ul>

          <div className="md:hidden text-3xl">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              {isOpen ? "X" : "☰"}
            </button>
          </div>
        </nav>
      </div>
            {isOpen && (
            <div className="w-full h-full mt-4">
           <ul className="md:hidden flex flex-col gap-4 mt-4 text-lg">
          <NavLink to="/" className={({ isActive }) => isActive ? "header-item active mobile" : "header-item" } onClick={() => setIsOpen(false)}>
          <span className="header-text">home</span></NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "header-item active mobile" : "header-item" } onClick={() => setIsOpen(false)}>
          <span className="header-text">o nas</span></NavLink>
          <NavLink to="/technologies" className={({ isActive }) => isActive ? "header-item mobile active" : "header-item" } onClick={() => setIsOpen(false)}>
          <span className="header-text">technologie</span></NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "header-item mobile active" : "header-item" } onClick={() => setIsOpen(false)}>
          <span className="header-text">projekty</span></NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "header-item mobile active" : "header-item" } onClick={() => setIsOpen(false)}>
          <span className="header-text">kontakt</span></NavLink>
        </ul>
        </div>
      )}
    </header>
  );
}
