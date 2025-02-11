"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLaptop, FaRoute, FaAward, FaUsers } from "react-icons/fa";

const WhyChooseUsSection = () => {
  // Unique Selling Points Data
  const usps = [
    {
      id: 1,
      icon: <FaLaptop className="w-12 h-12 text-blue-600" />,
      title: "Flexible Learning at Your Pace",
      description:
        "Access a wide variety of SAP master-driven, social, and cooperative content through our digital learning solution. Learn at your own pace and stay updated with new SAP software features.",
    },
    {
      id: 2,
      icon: <FaRoute className="w-12 h-12 text-blue-600" />,
      title: "Tailored Learning Paths",
      description:
        "Follow SAP Learning Journeys designed for your specific job requirements and learning objectives. Benefit from easy-to-navigate instructional content and flexible learning formats.",
    },
    {
      id: 3,
      icon: <FaAward className="w-12 h-12 text-blue-600" />,
      title: "Boost Your Career with Certifications",
      description:
        "Gain credibility as an SAP specialist with our certification training. Hone your skills and unlock new career prospects with recognized SAP certifications.",
    },
    {
      id: 4,
      icon: <FaUsers className="w-12 h-12 text-blue-600" />,
      title: "Collaborate and Network",
      description:
        "Interact with SAP experts and peers in interactive virtual rooms. Access high-quality content, live sessions, and social networking opportunities.",
    },
  ];

  // Animation variants
  const cardVariants = {
    offscreen: {
      x: 100, // Start offscreen to the right
      opacity: 0,
    },
    onscreen: {
      x: 0, // Move to the original position
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
            Why Choose Us?
          </h2>
          <p className="text-gray-200 text-[18px] font-inter font-medium mx-auto">
            Discover what makes our platform the best choice for mastering SAP
            skills and advancing your career.
          </p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.id}
              className="text-center bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              transition={{ delay: index * 0.2 }} // Staggered delay
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
