import React from "react";
import { FaDribbble, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-950">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 grid gap-10 ">
        {/* Logo and Paragraph */}
        <div>
          <div className="text-white font-bold text-3xl ">AudioMax</div>
          <p className="mt-5 font-semibold text-gray-300 text-sm ">
            Delivering premium audio experiences since 2018. We craft headphones
            that bring your music to life with exceptional sound quality,
            comfort, and cutting-edge wireless technology.
          </p>
          {/* Social Links */}
          <div className="flex items-center text-white space-x-4 mt-6">
            <div className="w-8 h-8 bg-blue-700 flex items-center justify-center flex-col rounded-full">
              <FaFacebookF />
            </div>
            <div className="w-8 h-8 bg-sky-500 flex items-center justify-center flex-col rounded-full">
              <FaTwitter />
            </div>
            <div className="w-8 h-8 bg-pink-700 flex items-center justify-center flex-col rounded-full">
              <FaDribbble />
            </div>
            <div className="w-8 h-8 bg-rose-700 flex items-center justify-center flex-col rounded-full">
              <FaYoutube />
            </div>
          </div>
        </div>
        {/* Company Portion*/}
        <div className="space-y-5">
          <h1 className="text-lg text-white font-bold">Company</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            About Us
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Our Technology
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Careers
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Press & Media
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Blog
          </p>
        </div>
        {/* Support Portion */}
        <div className="space-y-5">
          <h1 className="text-lg text-white font-bold">Support</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Help Center
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Warranty
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Product Registration
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Returns & Exchanges
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Privacy Policy
          </p>
        </div>
        {/* Get in Touch Portion */}
        <div>
          <h1 className="text-lg text-white font-bold">Get In Touch</h1>
          <div className="mt-6">
            <h1 className="text-sm text-white">Customer Support</h1>
            <h1 className="text-base font-bold text-white mt-1">
              +1 714 890 2144
            </h1>
            <h1 className="text-sm text-white mt-4">Our Headquarters</h1>
            <h1 className="text-base font-bold text-white mt-1">
              Garden Grove, California
            </h1>
            <h1 className="text-sm text-white mt-4">Email Us</h1>
            <h1 className="text-base font-bold text-white mt-1">
              support@audiomax.com
            </h1>
          </div>
        </div>
      </div>
      {/* Bottom Portion */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">
          Copyright © 2025 AudioMax Corp. All rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Follow Us:</span>
          <span className="text-gray-500 hover:text-gray-300 cursor-pointer">
            <FaFacebookF />
          </span>
          <span className="text-gray-500 hover:text-gray-300 cursor-pointer">
            <FaTwitter />
          </span>
          <span className="text-gray-500 hover:text-gray-300 cursor-pointer">
            <FaDribbble />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
