"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaLaptopCode,
  FaClock,
  FaIndustry,
  FaCertificate,
  FaChalkboardTeacher,
} from "react-icons/fa";

const WhyChooseUsSection = () => {
  // Unique Selling Points Data
  const usps = [
    {
      id: 1,
      icon: <FaUserTie className="w-12 h-12 text-blue-600" />,
      title: "Expert-Led Training",
      description:
        "Learn from certified SAP professionals with extensive industry experience in SAP S/4HANA, SAP FICO, and more.",
    },
    {
      id: 2,
      icon: <FaLaptopCode className="w-12 h-12 text-blue-600" />,
      title: "Hands-On Learning",
      description:
        "Gain practical, real-world knowledge through case studies, live projects, and interactive sessions.",
    },
    {
      id: 3,
      icon: <FaClock className="w-12 h-12 text-blue-600" />,
      title: "Flexible Learning Options",
      description:
        "Choose from online, on-site, or self-paced training to fit your schedule and learning preferences.",
    },
    {
      id: 4,
      icon: <FaIndustry className="w-12 h-12 text-blue-600" />,
      title: "Industry-Relevant Curriculum",
      description:
        "Our programs are designed to align with industry best practices and current SAP market demands.",
    },
    {
      id: 5,
      icon: <FaCertificate className="w-12 h-12 text-blue-600" />,
      title: "Certification & Job Assistance",
      description:
        "Receive support for SAP certification preparation and career guidance to help you secure your dream SAP role.",
    },
    {
      id: 6,
      icon: <FaChalkboardTeacher className="w-12 h-12 text-blue-600" />,
      title: "Live Mentorship",
      description:
        "Get direct access to experienced mentors for personalized guidance and support throughout your learning journey.",
    },
  ];

  // Animation variants
  const cardVariants = {
    offscreen: {
      x: 100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      className="py-[64px] bg-cover bg-center relative lg:px-[80px] md:px-10 px-4"
      style={{ backgroundImage: "url('/images/ImgBg3.JPG')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 pt-8">
          <h2 className="font-[Gilroy-Bold] md:text-[56px] font-bold mb-4 text-white">
            Why Choose Golden Pearl Consulting?
          </h2>
          <p className="text-gray-200 text-[18px] font-inter font-medium mx-auto">
            Experience excellence in SAP training with our comprehensive
            learning solutions tailored to your success.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.id}
              className={`text-center bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-sm ${
                index >= 4 ? "lg:col-span-1 lg:justify-self-center" : ""
              }`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              transition={{ delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">{usp.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold font-inter mb-2">
                {usp.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 font-inter text-[16px]">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
