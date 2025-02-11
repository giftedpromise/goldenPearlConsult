"use client";

import { useState, useEffect } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    title: "Acquire Expertise That Drives Innovation",
    subtitle:
      "Unlock your potential with expert-led SAP training from Golden Pearl Consulting. Our comprehensive courses and certification programs equip you with the skills to streamline business processes and drive innovation across your organization",
    bgImage: "/images/ImgBg4.JPG",
    overlayPosition: "center", // Set to "center" for the first slide
    overlayColor: "from-black-600/60",
  },
  {
    title: "Enhance Your SAP Skills & Accelerate Your Career ",
    subtitle:
      "Master data management and SAP best practices with our flexible, expert-led online courses. Gain hands-on experience with the latest tools, collaborate in an interactive learning environment, and upskill at your own pace.",
    bgImage: "/images/ImgBg3.JPG",
    overlayPosition: "center", // Set to "center"
    overlayColor: "from-black-600/60",
  },
  {
    title: "Master SAP & Unlock New Career Opportunities",
    subtitle:
      "Stay ahead in the digital era with expert-led SAP training designed for professionals at all levels. Our flexible online courses provide hands-on experience, real-world case studies, and industry-recognized certifications to help you boost efficiency and drive innovation.",
    bgImage: "/images/ImgBg6.jpeg",
    overlayPosition: "center", // Already set to "center"
    overlayColor: "from-black-400/40",
  },
];

const Hero = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  }, [swiperInstance]);

  return (
    <div className="h-screen w-full mt-[64px]">
      <style jsx global>{`
        /* Hide navigation buttons on smaller screens */
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        }

        .swiper-pagination {
          bottom: 20px !important; /* Move pagination bullets up */
        }
        /* Custom styles for pagination bullets */
        .swiper-pagination-bullet {
          width: 14px !important;
          height: 14px !important;
          background: white !important;
          opacity: 1 !important;
        }

        .swiper-pagination-bullet-active {
          width: 18px !important;
          height: 18px !important;
          background: #007bff !important;
        }
      `}</style>

      <Swiper
        onSwiper={setSwiperInstance}
        modules={[Autoplay, Pagination, Navigation]}
        speed={1000}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        className="h-full w-full swiper-pagination-white"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.bgImage}
                  alt="Background"
                  fill
                  priority={index === 0}
                  quality={85}
                  className="object-cover"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/60" />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${
                    slide.overlayPosition === "left"
                      ? `${slide.overlayColor} to-5%`
                      : `${slide.overlayColor} via-50%`
                  }`}
                />
              </div>

              {/* Content */}
              <div
                className={`relative h-full flex items-center justify-center`} // Always center the content
              >
                <div
                  className={` px-4 sm:px-6 lg:px-[80px] text-center`} // Always center the text
                >
                  <h1 className="text-4xl sm:text-5xl font-[Gilroy-Bold] md:text-[56px] font-bold text-white mb-4 leading-[100%] tracking-[-1.92px] ">
                    {slide.title}
                  </h1>
                  <p className="text-xl sm:text-2xl font-inter leading-[34.8px] text-white/90 mb-8">
                    {slide.subtitle}
                  </p>
                  <button className="bg-blue-600 mt-8 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
                    Start Learning Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default Hero;
