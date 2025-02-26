"use client";

import React, { useState } from "react";
import Image from "next/image";
import { courses } from "@/lib/courses";
import Link from "next/link";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const categories = [
    "All",
    "SAP FI",
    "SAP CO",
    "SAP Product Costing",
    "SAP Intercompany",
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || course.title.includes(categoryFilter);
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-[#F3FAFD] min-h-screen">
      <div className="container ">
        {/* Hero Section */}
        <div className="relative h-64 md:h-[400px] mb-12 lg:px-20 md:px-10 px-4 rounded-lg overflow-hidden">
          <Image
            src="/images/learnerImg.jpg" // Replace with your background image path
            alt="SAP Learning Background"
            fill
            className="object-cover"
            priority // Load this eagerly since it’s above the fold
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white">
            <h1 className="font-[Gilroy-Bold] text-[48px] font-bold mb-2 text-center">
              Unlock Your SAP Potential
            </h1>
            <p className="text-lg font-inter max-w-xl text-center px-4">
              Dive into expert-led SAP courses to boost your career.
            </p>
          </div>
        </div>
        {/* Category Showcase */}
        <div className="mb-24 px-4 lg:px-20 pt-6">
          <h2 className="font-[Gilroy-Bold] text-[48px] font-bold text-gray-800 mb-6 text-center">
            Explore by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(1).map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center"
              >
                <span className="block text-lg font-inter font-semibold text-gray-800">
                  {category}
                </span>
                <span className="text-sm text-gray-600 font-inter">
                  Learn {category} skills
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between lg:px-20 md:px-10 px-4 ">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 font-inter text-gray-700 placeholder-gray-400 transition-all"
          />
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={`px-4 py-2 rounded-full font-inter text-sm transition-all ${
                  categoryFilter === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 hover:shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-12 lg:grid-cols-3 gap-6 lg:px-20 md:px-10 px-4 ">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col mb-12 group relative h-[400px] transition-all hover:shadow-lg"
              >
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
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold font-inter text-gray-800 mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 mr-2">★★★★☆</span>
                    <span className="text-gray-600 font-inter text-sm">
                      ({course.rating})
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <p className="text-lg font-bold font-inter text-blue-600">
                      {course.price}
                    </p>
                    {course.formerPrice && (
                      <p className="text-sm text-gray-500 line-through font-inter">
                        {course.formerPrice}
                      </p>
                    )}
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mt-auto text-center font-inter"
                  >
                    Learn More
                  </Link>
                </div>
                <div className="absolute inset-0 bg-white p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col z-10">
                  <h3 className="text-lg font-semibold font-inter text-gray-800 mb-2">
                    {course.title}
                  </h3>
                  <ul className="text-gray-600 mb-4 space-y-1 flex-1 overflow-y-auto font-inter text-sm">
                    {course.description.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                  <div className="flex items-center space-x-2 mb-3">
                    <p className="text-lg font-bold font-inter text-blue-600">
                      {course.price}
                    </p>
                    {course.formerPrice && (
                      <p className="text-sm text-gray-500 line-through font-inter">
                        {course.formerPrice}
                      </p>
                    )}
                  </div>
                  <Link
                    href={`/courses/${course.id}`}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 text-center font-inter"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 font-inter col-span-full py-10">
              No courses found. Try adjusting your search or filters.
            </p>
          )}
        </div>

        {/* Footer CTA */}
        <div className="relative h-64 md:h-[400px] mb-12 mt-12 lg:px-20 md:px-10 px-4 rounded-lg overflow-hidden">
          <Image
            src="/images/learnerImg2.jpg" // Your background image path
            alt="SAP Learning Background"
            fill
            className="object-cover"
            priority // Loads eagerly since it’s above the fold
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center lg:px-20 md:px-10 px-4">
            <p className="text-[48px] text-white font-inter mb-4 text-center">
              Ready to take your SAP expertise to the next level?
            </p>
            <Link
              href="/signup"
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-inter font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Courses;
