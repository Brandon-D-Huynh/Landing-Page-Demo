import React from "react";
import { FaDribbble, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-950">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 grid gap-10 ">
        {/* Logo and Paragraph */}
        <div>
          <div className="text-white font-bold text-3xl ">LOGO</div>
          <p className="mt-5 font-semibold text-gray-300 text-sm ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus ullam odio, officia inventore optio natus commodi
            maiores, placeat recusandae quisquam vel doloribus sed et odit nam,
            unde atque eos sunt.
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
          <h1 className="text-lg text-white fond-bold">Company</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            About Us
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Services
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Our Customers
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Portfolio
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Blogs
          </p>
        </div>
        {/* Support Portion */}
        <div className="space-y-5">
          <h1 className="text-lg text-white fond-bold">Support</h1>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Legal Information
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Terms & Conditions
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Report Abuse
          </p>
          <p className="text-gray-300 hover:text-gray-400 font-medium cursor-pointer text-sm">
            Privacy Policy
          </p>
        </div>
        {/* Get in Touch Portion */}
        <div>
          <h1 className="text-lg text-white fond-bold">Get In Touch</h1>
          <div className="mt-6">
            <h1 className="text-sm text-white">Our Mobile Number</h1>
            <h1 className="text-base font-bold text-white mt-1">
              +1 714 890 2144
            </h1>
            <h1 className="text-sm text-white">Our Address</h1>
            <h1 className="text-base font-bold text-white mt-1">
              Garden Grove, California
            </h1>
          </div>
        </div>
      </div>
      {/* Bottom Portion */}
    </div>
  );
};

export default Footer;
