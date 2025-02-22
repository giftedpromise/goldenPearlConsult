import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="">
      <div className="relative h-screen flex items-center justify-center lg:px-[80px] md:px-10 px-4">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/AbtHero.jpeg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 pt-6">
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
    </section>
  );
};

export default AboutUs;
