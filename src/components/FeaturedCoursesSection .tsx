"use client";

import React, { useEffect, useState } from "react";
// Update Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

// Import Swiper types
import type { Swiper as SwiperType } from "swiper";

const FeaturedCoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "SAP FICO Training",
      description:
        "Learn the fundamentals of SAP Financial Accounting and Controlling.",
      instructor: "John Doe",
      rating: 4.7,
      price: "$99.99",
      image: "/images/courseImg9.jpeg", // Replace with your image path
    },
    {
      id: 2,
      title: "SAP MM BootCamp",
      description:
        "Master SAP programming and develop custom SAP applications.",
      instructor: "Jane Smith",
      rating: 4.8,
      price: "$129.99",
      image: "/images/courseImg2.jpeg", // Replace with your image path
    },
    {
      id: 3,
      title: "SAP Assessment Challenge",
      description: "Evaluate your proficiency in SAP systems and modules.",
      instructor: "Mike Johnson",
      rating: 4.6,
      price: "$149.99",
      image: "/images/courseImg3.jpeg", // Replace with your image path
    },
    {
      id: 4,
      title: "Mortgage Underwriter Course",
      description:
        "Gain the skills to evaluate loan applications and assess financial risk.",
      instructor: "Mike Johnson",
      rating: 4.6,
      price: "$149.99",
      image: "/images/courseImg10.JPG", // Replace with your image path
    },
    {
      id: 5,
      title: "SAP Strategy",
      description:
        "Learn SAP integration, automation, analytics, and best practices.",
      instructor: "Mike Johnson",
      rating: 4.6,
      price: "$149.99",
      image: "/images/courseImg5.jpeg", // Replace with your image path
    },
    {
      id: 6,
      title: "SAP BootCamp Training",
      description: "Get hands-on experience with SAP database and analytics.",
      instructor: "Mike Johnson",
      rating: 4.6,
      price: "$149.99",
      image: "/images/courseImg6.jpeg", // Replace with your image path
    },
    {
      id: 7,
      title: "Starter Free SAP Course",
      description:
        "Kickstart your SAP journey with our free beginner-friendly course.",
      instructor: "Mike Johnson",
      rating: 4.6,
      price: "$149.99",
      image: "/images/courseImg4.jpeg", // Replace with your image path
    },
    {
      id: 8,
      title: "SAP HSM Bootcamp",
      description: "Get intensive, hands-on training program on SAP HSM.",
      instructor: "Mike Johnson",
      rating: 4.6,
      price: "$149.99",
      image: "/images/courseImg8.jpeg", // Replace with your image path
    },
    {
      id: 9,
      title: "SAP HANA Essentials",
      description:
        "Get hands-on experience with SAP HANA database and analytics.",
      instructor: "Mike Johnson",
      rating: 4.6,
      price: "$149.99",
      image: "/images/courseImg1.jpeg", // Replace with your image path
    },
  ];

  const [isSwiperReady, setIsSwiperReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSwiperReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-[64px] bg-[#f3fafd] lg:px-[80px] md:px-10 px-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-[Gilroy-Bold] md:text-[56px] font-bold text-center mb-8">
            Featured Courses
          </h2>
          <p className="text-gray-600 max-w-2xl text-[18px] font-medium mx-auto font-inter">
            Explore our most popular SAP courses designed to help you master
            in-demand skills and advance your career. Whether you're a beginner
            or an experienced professional, we have something for everyone.
          </p>
        </div>

        <div className="relative">
          {isSwiperReady && (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                type: "bullets",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {courses.map((course) => (
                <SwiperSlide key={course.id}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="w-full h-48 relative">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="flex items-center mb-4">
                        <span className="text-yellow-400 mr-2">★★★★☆</span>
                        <span className="text-gray-600">({course.rating})</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Instructor: {course.instructor}
                      </p>
                      <p className="text-lg font-bold text-blue-600 mb-4">
                        {course.price}
                      </p>
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <button className="custom-prev absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="custom-next absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-100 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="custom-pagination flex justify-center mt-6 space-x-2"></div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/courses"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
