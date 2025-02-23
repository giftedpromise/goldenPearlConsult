import React from "react";
import { StarIcon, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "SAP Consultant",
    company: "Tech Solutions Inc.",
    content:
      "The SAP e-learning platform transformed my career. The structured curriculum and hands-on exercises helped me master complex SAP modules efficiently.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Schmidt",
    role: "Project Manager",
    company: "Global Systems GmbH",
    content:
      "Outstanding learning experience! The platform&apos;s interactive approach and real-world scenarios made it easy to understand SAP&apos;s ecosystem.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Martinez",
    role: "ERP Specialist",
    company: "Enterprise Solutions",
    content:
      "From beginner to certified SAP professional - this platform made it possible. The course content is regularly updated and perfectly aligned with certification requirements.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Wilson",
    role: "SAP Developer",
    company: "Digital Innovations Ltd",
    content:
      "The hands-on labs and real-world projects helped me understand complex SAP concepts. The platform&apos;s approach to teaching made learning enjoyable and effective.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 md:px-10 lg:px-[80px]">
        <div className="text-center mb-8">
          <h2 className="text-[48px] font-bold font-[Gilroy-Bold] text-gray-800  mb-3">
            What Our Learners Say
          </h2>
          <p className="text-lg font-inter text-gray-600">
            Experience industry-leading SAP training from Golden Pearl
            Consulting, trusted by professionals worldwide for excellence in SAP
            education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-5 transition-transform duration-300 hover:scale-105"
            >
              <Quote className="text-blue-600 mb-3 h-6 w-6" />

              <p className="text-gray-700 font-inter italic text-sm mb-4">
                "{testimonial.content}"
              </p>

              <div className="flex mb-3">
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    size={16}
                    className={`${
                      index < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <div className="border-t pt-3">
                <h3 className="font-semibold text-base font-inter text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 font-inter text-sm">
                  {testimonial.role}
                </p>
                <p className="text-gray-500 font-inter text-xs">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
