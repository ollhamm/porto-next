"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="text-neutral-300 flex flex-col z-10 md:flex-row bg-[#0d3740] w-full py-6 px-8 text-sm">
      <div className="flex justify-between w-full md:w-auto">
        <div onClick={() => router.push("/")} className="flex cursor-pointer">
          <Image src={"/images/logo.png"} height={30} width={30} alt="logo" />
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-neutral-300 focus:outline-none"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:flex flex-col items-center md:flex-row md:ml-auto gap-6 cursor-pointer overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 md:max-h-full md:opacity-100"
        }`}
      >
        <div
          onClick={() => {
            router.push("/");
            closeMenu();
          }}
          className="bg-[#134f5c] mt-6 md:mt-0 bg-opacity-0 hover:bg-opacity-100 py-2 px-3 rounded-md transition duration-300"
        >
          Home
        </div>
        <div
          onClick={() => {
            router.push("/about");
            closeMenu();
          }}
          className="bg-[#134f5c] bg-opacity-0 hover:bg-opacity-100 py-2 px-3 rounded-md transition duration-300"
        >
          About
        </div>
        <div
          onClick={() => {
            router.push("/skill");
            closeMenu();
          }}
          className="bg-[#134f5c] bg-opacity-0 hover:bg-opacity-100 py-2 px-3 rounded-md transition duration-300"
        >
          Skill
        </div>
        <div
          onClick={() => {
            router.push("/project");
            closeMenu();
          }}
          className="bg-[#134f5c] bg-opacity-0 hover:bg-opacity-100 py-2 px-3 rounded-md transition duration-300"
        >
          My Project
        </div>
        <div
          onClick={() => {
            router.push("/contact");
            closeMenu();
          }}
          className="bg-[#134f5c] bg-opacity-0 hover:bg-opacity-100 py-2 px-3 rounded-md transition duration-300"
        >
          Contact Me
        </div>
      </div>
    </div>
  );
};

export default Navbar;
