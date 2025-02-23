"use client";

import dynamic from "next/dynamic";
import { User, Briefcase, Code, Settings } from "lucide-react"; // Import icons from Lucide

// Dynamically import motion with SSR disabled
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const WhoShouldJoinSection = () => {
  // Animation variants for cards
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="py-[80px] ">
      <div className="container lg:px-[80px] md:px-10 px-4 ">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold font-inter text-center mb-12">
          Who Should Join?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Aspiring SAP Professionals */}
          <MotionDiv
            className="bg-white p-6 rounded-lg shadow-sm max-w-lg w-full hover:shadow-lg transition-shadow duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="flex items-center mb-4">
              <User className="text-blue-600 mr-4" size={24} />{" "}
              {/* Lucide User icon */}
              <h3 className="text-xl font-semibold font-inter">
                Aspiring SAP Professionals
              </h3>
            </div>
            <p className="text-gray-600 font-inter">
              Beginners looking to build a career in SAP and gain expertise in
              SAP solutions.
            </p>
          </MotionDiv>

          {/* Card 2: Finance and Accounting Professionals */}
          <MotionDiv
            className="bg-white p-6 rounded-lg shadow-sm max-w-lg w-full hover:shadow-lg transition-shadow duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="flex items-center mb-4">
              <Briefcase className="text-blue-600 mr-4" size={24} />{" "}
              {/* Lucide Briefcase icon */}
              <h3 className="text-xl font-semibold font-inter">
                Finance & Accounting Professionals
              </h3>
            </div>
            <p className="text-gray-600 font-inter">
              Professionals seeking to master SAP FICO for financial accounting
              and controlling.
            </p>
          </MotionDiv>

          {/* Card 3: IT and Business Analysts */}
          <MotionDiv
            className="bg-white p-6 rounded-lg shadow-sm max-w-lg w-full hover:shadow-lg transition-shadow duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="flex items-center mb-4">
              <Code className="text-blue-600 mr-4" size={24} />{" "}
              {/* Lucide Code icon */}
              <h3 className="text-xl font-semibold font-inter">
                IT & Business Analysts
              </h3>
            </div>
            <p className="text-gray-600 font-inter">
              Analysts aiming to enhance their skills in SAP solutions for
              business processes.
            </p>
          </MotionDiv>

          {/* Card 4: Project Managers and Consultants */}
          <MotionDiv
            className="bg-white p-6 rounded-lg shadow-sm max-w-lg w-full hover:shadow-lg transition-shadow duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="flex items-center mb-4">
              <Settings className="text-blue-600 mr-4" size={24} />{" "}
              {/* Lucide Settings icon */}
              <h3 className="text-xl font-semibold font-inter">
                Project Managers & Consultants
              </h3>
            </div>
            <p className="text-gray-600 font-inter">
              Consultants and managers looking to upskill in SAP implementation
              and project management.
            </p>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default WhoShouldJoinSection;
