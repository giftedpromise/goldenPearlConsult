import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import WhoShouldJoinSection from "@/components/WhoShouldJoinSection";

const AboutUs = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="relative h-[800px] flex items-center justify-center lg:px-[80px] md:px-10 px-4">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/abtImg.JPG"
            alt="About Hero Background"
            layout="fill"
            objectFit="cover" // or "contain" to show full image
            className="z-0"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 pt-2 md:pt-6">
          <h1 className="text-4xl sm:text-5xl font-[Gilroy-Bold] md:text-[56px] font-bold mb-4 lg:leading-[48px] leading-[38.4px] lg:tracking-[-1.6px] tracking-[-1.28px]">
            Empowering Professionals with World-Class SAP Training
          </h1>
          <p className="text-xl md:text-2xl font-inter mb-[60px] mt-4">
            Join Golden Pearl Consulting and unlock your potential in the world
            of SAP.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Enroll Now
          </button>
        </div>
      </div>
      <section className="bg-[#F3FAFD] py-[80px]">
        <div className="container mx-auto px-4 md:px-[40px] lg:px-[80px]">
          <div className="flex justify-center items-center ">
            <div>
              <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
                {/* Left Content */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h2 className="text-[36px] font-bold  text-gray-800 mb-8 font-inter">
                    About Golden Pearl Consulting
                  </h2>
                  <p className="text-lg text-gray-600 mb-4 font-inter">
                    Golden Pearl Consulting is dedicated to empowering
                    professionals and organizations through world-class SAP
                    training programs.
                  </p>
                  <p className="text-lg text-gray-600 mb-4 font-inter">
                    Our mission is to enhance skills, optimize business
                    processes, and drive career growth for individuals and
                    businesses alike.
                  </p>
                  <p className="text-lg text-gray-600 mb-8 font-inter">
                    Whether you&apos;re a beginner looking to enter the SAP
                    ecosystem or an experienced consultant aiming to advance
                    your expertise, our tailored training programs cater to all
                    levels of proficiency.
                  </p>
                  <h3 className="text-xl font-semibold font-inter text-gray-800 mb-2">
                    Our Key Focus Areas
                  </h3>
                  <ul className="list-disc list-inside font-inter text-lg text-gray-600 space-y-2">
                    <li>
                      SAP Training: Comprehensive programs to master SAP skills.
                    </li>
                    <li>
                      Career Growth: Personalized coaching for professional
                      success.
                    </li>
                    <li>
                      Business Optimization: Streamlined solutions for
                      operational excellence.
                    </li>
                  </ul>
                </div>
                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center">
                  <Image
                    src="/images/SAPLAP1.jpg"
                    alt="Team of trainers in a classroom"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-16 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/sapBg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Content */}
        <div className="container  lg:px-[80px] md:px-10 px-4 relative z-10">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-center text-white mb-8">
            Our Training Programs
          </h2>

          {/* Programs List */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center">
              <FaCheck className="text-blue-600 mr-4" size={24} />
              <div>
                <h3 className="text-xl font-semibold font-inter text-white">
                  SAP S/4HANA Finance (FICO)
                </h3>
                <p className="text-gray-200 font-inter">
                  Master financial accounting and controlling with SAP S/4HANA.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <FaCheck className="text-blue-600 mr-4" size={24} />
              <div>
                <h3 className="text-xl font-semibold font-inter text-white">
                  SAP Controlling (CO)
                </h3>
                <p className="text-gray-200 font-inter">
                  Learn cost accounting, profitability analysis, and internal
                  reporting.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <FaCheck className="text-blue-600 mr-4" size={24} />
              <div>
                <h3 className="text-xl font-semibold font-inter text-white">
                  SAP Activate Methodology & Agile Project Management
                </h3>
                <p className="text-gray-200 font-inter">
                  Gain expertise in SAP implementation and agile project
                  management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F3FAFD]">
        <WhoShouldJoinSection />
      </section>
      <section
        className="relative py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/sapHand.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="container  lg:px-[80px] md:px-10 px-4  relative z-10 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🚀 Take Your SAP Skills to the Next Level!
          </h2>

          {/* Motivational Text */}
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Join Golden Pearl Consulting today and unlock your potential in the
            world of SAP.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/enroll"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Enroll Now
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-[#F3FAFD] text-[#F3FAFD] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#F3FAFD] hover:text-blue-600 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
