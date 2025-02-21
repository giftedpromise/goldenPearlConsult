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
      </div>
    </section>
  );
};

export default AboutUs;
