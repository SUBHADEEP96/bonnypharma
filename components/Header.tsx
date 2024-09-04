"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
const menuItems = [
  { name: "Medicines", url: "/medicines", mm: true },
  { name: "Our Motive", url: "/our-motive", mm: false },
  { name: "Partners", url: "/partners", mm: false },
  { name: "Doctors", url: "/doctors", mm: false },
  { name: "Contact", url: "/contact", mm: false },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#E8E8E8] text-[#700c39] shadow-md my-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[130px]">
          <div className="flex items-center">
            <Link href="/">
              <img
                className="h-[140px] w-[200px] my-0"
                src="bonnypharma_logo.png"
                alt="Bonny Pharma"
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems?.map((menu, id) => (
                  <Link
                    key={id}
                    href={menu?.url}
                    className="hover:font-bold hover:text-black hover:bg-gradient-to-r from-slate-50 to-emerald-700  px-[16px] py-[12px] rounded-full text-lg font-medium"
                  >
                    {menu?.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Phone Number and Social Media Links */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-lg" />
              <span className="text-md font-medium">+1 (234) 567-890</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-lg hover:text-blue-600" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-lg hover:text-pink-500" />
              </a>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#700c39]"
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>

              {isOpen ? (
                <TfiClose className="w-6 h-6" />
              ) : (
                <RxHamburgerMenu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          {menuItems.map((menu, id) => (
            <Link
              key={id}
              href={menu.url}
              className="hover:border-2 hover:border-[#700c39] block px-3 py-2 rounded-md font-medium text-xl"
            >
              {menu.name}
            </Link>
          ))}
          {/* Mobile View: Phone and Social Media */}
          <div className="mt-4 flex justify-between items-center px-3">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-lg" />
              <span className="text-md font-medium">+1 (234) 567-890</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-lg hover:text-blue-600" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-lg hover:text-pink-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
