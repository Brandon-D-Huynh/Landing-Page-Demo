import React from "react";
import { FaFingerprint } from "react-icons/fa";
import { HiOutlineChat } from "react-icons/hi";
import { IoAppsOutline, IoWifiOutline } from "react-icons/io5";
import { MdNotifications, MdOutlineTouchApp } from "react-icons/md";

const featureData = [
  {
    title: "Touch to control",
    description:
      "Effortlessly manage your audio, calls, and voice assistant with intuitive touch controls right on your headphones.",
    icon: (
      <MdOutlineTouchApp className="w-12 h-12 text-pink-600 mx-auto"></MdOutlineTouchApp>
    ),
  },
  {
    title: "Secure Fit",
    description:
      "Designed for ultimate comfort and stability, ensuring your headphones stay put during any activity, from workouts to commutes.",
    icon: (
      <FaFingerprint className="w-12 h-12 text-pink-600 mx-auto"></FaFingerprint>
    ),
  },
  {
    title: "Instant Connect",
    description:
      "Seamlessly pair with your devices in seconds, so you can dive into your audio experience without delay.",
    icon: (
      <HiOutlineChat className="w-12 h-12 text-pink-600 mx-auto"></HiOutlineChat>
    ),
  },
  {
    title: "Real-time Notifications",
    description:
      "Stay informed with subtle audio alerts for incoming calls, messages, and important updates, without needing to check your phone.",
    icon: (
      <MdNotifications className="w-12 h-12 text-pink-600 mx-auto"></MdNotifications>
    ),
  },
  {
    title: "Reliable Wireless",
    description:
      "Experience crystal-clear audio and a stable connection with advanced wireless technology, free from interruptions.",
    icon: (
      <IoWifiOutline className="w-12 h-12 text-pink-600 mx-auto"></IoWifiOutline>
    ),
  },
  {
    title: "Companion App",
    description:
      "Unlock advanced features and personalize your sound profile with our intuitive companion app, giving you full control over your listening experience.",
    icon: (
      <IoAppsOutline className="w-12 h-12 text-pink-600 mx-auto"></IoAppsOutline>
    ),
  },
];

const Features = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {featureData.map((feature, index) => {
          return (
            <div key={index} className="text-center mx-auto">
              {/* Icon */}
              <div className="mx-auto text-center">{feature.icon}</div>
              {/* Title */}
              <h1 className="mt-4 text-lg font-semibold text-center text-gray dark:text-white">
                {feature.title}
              </h1>
              {/* Paragraph */}
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
