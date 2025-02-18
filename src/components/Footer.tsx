import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social icons

const Footer = () => {
  return (
    <footer className="py-[80px] lg:px-[80px] md:px-10 px-4 bg-[#F3FAFD]">
      <div className="flex flex-col lg:flex-row gap-[80px] py-6 pb-[60px]">
        {/* Left Section */}
        <div className="w-full lg:w-[450px]">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={400}
              height={80}
              className="h-16 w-auto"
            />
          </Link>

          {/* Newsletter Section */}
          <h1 className="text-center lg:text-left text-[32px] font-bold tracking-[-0.64px] text-[#1D2739] pt-6">
            Subscribe to our newsletter
          </h1>
          <p className="text-center lg:text-left text-[16px] text-[#667185] lg:w-[90%] mt-2">
            Be the first to know. Receive the most recent news and updates from
            Golden Pearl SAP Learning, delivered straight to your inbox.
          </p>

          {/* Subscription Form */}
          <form className="flex flex-col lg:flex-row items-center gap-2 pt-[28px]">
            <input
              type="email"
              placeholder="Email address"
              className="w-full lg:w-[236px] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition w-full lg:w-[173px]"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full">
          {/* About */}
          <div>
            <h3 className="font-bold  font-inter mb-6"> Quick Links</h3>
            <ul>
              <li className="mb-4 font-inter">
                <Link href="#" className="hover:text-gray-400 ">
                  {" "}
                  Home
                </Link>
              </li>
              <li className="mb-4 font-inter">
                <Link href="#" className="hover:text-gray-400">
                  {" "}
                  About Us
                </Link>
              </li>
              <li className="mb-4 font-inter">
                <Link href="#" className="hover:text-gray-400">
                  Courses
                </Link>
              </li>
              <li className="mb-4 font-inter">
                <Link href="#" className="hover:text-gray-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-bold mb-4 font-inter">Explore</h3>
            <ul>
              <li className="mb-4 font-inter">
                <Link href="#" className="hover:text-gray-400">
                  Courses
                </Link>
              </li>
              <li className="mb-4 font-inter">
                <Link href="#" className="hover:text-gray-400">
                  Live Classes
                </Link>
              </li>
              <li className="mb-4 font-inter">
                <Link href="#" className="hover:text-gray-400">
                  Events & Webinars
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold mb-4 font-inter">Help</h3>
            <ul>
              <li className="mb-4 font-inter">
                <Link href="#" className="hover:text-gray-400">
                  Customer Support
                </Link>
              </li>
              <li className="mb-4 font-inter">
                <Link href="#" className="hover:text-gray-400">
                  Refund Policy
                </Link>
              </li>
              <li className="mb-4 font-inter">
                <Link href="#" className="hover:text-gray-400">
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-4 font-inter">
                <Link href="#" className="hover:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-400 my-4" />

      <div className="flex justify-between items-center mt-12">
        {/* Left: Copyright Text */}
        <p className="text-[14px] font-inter text-gray-700">
          © 2024 Golden Pearl Consulting. All rights reserved.
        </p>

        {/* Right: Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-black hover:text-gray-600">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
