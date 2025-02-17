// components/Footer.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-[80px] lg:px-[80px] md:px-10 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 place-items-center gap-8">
          {/* Logo and Social Icons */}
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="flex-shrink-0 mb-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png" // Update the path to your logo
                  alt="Leeds Institute"
                  width={200} // Adjust the width as needed
                  height={60} // Adjust the height as needed
                  className="h-16 w-auto" // Adjust the size as needed
                />
              </Link>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} /> {/* Facebook icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} /> {/* Twitter icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} /> {/* Instagram icon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} /> {/* LinkedIn icon */}
              </a>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Our Mission
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Our Vision
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="font-bold mb-4">Explore</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Courses
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Live Classes
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Events & Webinars
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Customer Support
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Refund Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Terms & Condition
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center  mt-12">
          <p className="text-[14px] font-inter">
            © 2024 Golden Pearl Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
