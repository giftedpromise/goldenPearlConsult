"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const FeaturedCoursesSection = () => {
  interface Course {
    id: number;
    title: string;
    description: string[];
    rating: number;
    price: string;
    image: string;
    instructor?: string;
  }

  const courses: Course[] = [
    {
      id: 1,
      title: "SAP FI Configuration",

      description: [
        "Hands on Configuration",
        "Self-Paced Learning",
        "Scenario Based Configuration.",
      ],
      rating: 4.7,
      price: "$500",
      image: "/images/courseImg9.jpeg",
    },
    {
      id: 2,
      title: "SAP CO Configuration",
      description: [
        "Hands on Configuration in Controlling",
        "Basic Product Costing Exposure",
        "Self-Paced Learning",
      ],

      rating: 4.8,
      price: "$500",
      image: "/images/courseImg2.jpeg",
    },
    {
      id: 3,
      title: "SAP Product Costing",
      description: [
        "Extensive Product Costing Scenario",
        "Extensive Product Costing Configuration",
        "Self-Paced Learning",
        "BOM-Bill Of Material Overview",
        "Reports in Product Costing",
      ],
      rating: 4.6,
      price: "$500",
      image: "/images/SapProduct.PNG",
    },
    {
      id: 4,
      title: "SAP Project Systems",
      description: [
        "Scenario Based Configuration.",
        "End to End Configuration",
        "End to End Project Creation",
        "Self-Paced Learning",
        "Configuration Document",
      ],

      rating: 4.6,
      price: "$499",
      image: "/images/SAPProject.jpg",
    },
    {
      id: 5,
      title: "SAP Intercompay",
      description: [
        "Scenario Based Configuration.",
        "Transfer Pricing/Markup",
        "Stock Transfer Order (STO)",
        "Contract Maufacturing Scenario",
        "EDI/IDOC AP/AR document",
        "Inter-company Reconcilation Configuration",
        "3-Legs Intercompany Scenario",
        "Self-Paced Learning",
      ],

      rating: 4.6,
      price: "$699",
      image: "/images/SAPintercompany.jpg",
    },
    {
      id: 6,
      title: "SAP Market Class",
      description: [
        "The class is tailored for consultants with hands-on experiece in configuring S4 Financial (FI) and Management Accounting (CO) modules",
        "Key Business Process",
        "Project and Assignments",
        "Contract Maufacturing Scenario",
        "Interview Preparation",
        "Live Classes",
        "Project Documents(Real-life)",
      ],

      rating: 4.6,
      price: "$700",
      image: "/images/SAPMarket.jpg",
    },
    {
      id: 7,
      title: "SAP Job Strategy",
      description: [
        "The class covers a comprehensive career supportp package to elevate your professional presence and interview readiness",
        "Professionally Written Resume ",
        "LinkedIn Profile Assistance",
        "Interview Coaching Sessions",
        "On the Job Continous Orientation for the first three months of starting the job",
        "SAP Community with about 400 seasoned experts in SAP",
        "Project Documents(Real-life)",
      ],
      rating: 4.6,
      price: "$999",
      image: "/images/SAPJob.jpg",
    },
    {
      id: 8,
      title: "SAP FICO Bootcamp",
      description: [
        "AP FI Configuration Package",
        "SAP CO Configuration Package",
        "SAP Product Costing Package",
        "SAP Project Systems Package",
        "SAP Intercompay Package",
        "SAP Market Class Package",
        "SAP Job Strategy Package",
      ],

      rating: 4.8,
      price: "$3500",
      image: "/images/courseImg9.jpeg",
    },
    {
      id: 9,
      title: "SAP POPM",
      description: ["(Details to come soon)"],

      rating: 4.6,
      price: "$500",
      image: "/images/courseImg1.jpeg",
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
    <section className="py-[64px] bg-[#F3FAFD] lg:px-[80px] md:px-10 px-4">
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
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {courses.map((course) => (
                <SwiperSlide key={course.id}>
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[650px] flex flex-col group">
                    <div className="w-full h-[200px] relative">
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={320}
                        height={200}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 flex flex-col h-full relative">
                      <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                        {course.title}
                      </h3>
                      <ul className="text-gray-600 mb-4 space-y-1 flex-1 min-h-[150px] overflow-hidden">
                        {course.description.slice(0, 5).map((item, index) => (
                          <li key={index} className="text-sm">
                            • {item}
                          </li>
                        ))}
                      </ul>
                      {/* Hover overlay for full description */}
                      <div
                        className="absolute top-0 left-0 right-0 bg-white p-6 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-start z-10 overflow-y-auto pointer-events-none"
                        style={{ bottom: "150px" }}
                      >
                        <h3 className="text-xl font-semibold mb-2">
                          {course.title}
                        </h3>
                        <ul className="text-gray-600 space-y-1">
                          {course.description.map((item, index) => (
                            <li key={index} className="text-sm">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-auto flex-shrink-0 relative z-20">
                        <div className="flex items-center mb-4">
                          <span className="text-yellow-400 mr-2">★★★★☆</span>
                          <span className="text-gray-600">
                            ({course.rating})
                          </span>
                        </div>
                        <p className="text-lg font-bold text-blue-600 mb-4">
                          {course.price}
                        </p>
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                          Enroll Now
                        </button>
                      </div>
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
