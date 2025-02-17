"use client";

import React, { useState } from "react";

interface FAQ {
  category: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

interface CategoryState {
  [key: number]: boolean;
}

interface QuestionState {
  [key: string]: boolean;
}

const FAQSection: React.FC = () => {
  const faqs: FAQ[] = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "Do I need prior experience to learn SAP?",
          answer:
            "No, prior SAP experience is not required for our beginner courses. We start with fundamental concepts and gradually progress to more advanced topics. However, basic computer literacy and understanding of business processes can be helpful.",
        },
        {
          question: "What is the duration of the courses?",
          answer:
            "Course duration varies by module and learning path: Foundation courses (4-6 weeks), Specialized modules (6-8 weeks), and Complete certification tracks (3-6 months). You can learn at your own pace, as all course materials remain accessible after enrollment.",
        },
      ],
    },
    {
      category: "Course Details",
      questions: [
        {
          question: "Which SAP module should I start with?",
          answer:
            "We recommend beginning with SAP S/4HANA Fundamentals if you're new to SAP. For those with a specific career goal, popular starting points include SAP FICO for finance, SAP MM for procurement, SAP SD for sales, and SAP HCM for HR professionals.",
        },
        {
          question: "What technical requirements do I need?",
          answer:
            "You'll need a modern web browser, 8GB RAM recommended, broadband internet connection (minimum 5 Mbps), and screen resolution of 1280x800 or higher.",
        },
      ],
    },
    {
      category: "Support & Access",
      questions: [
        {
          question: "What kind of support is available?",
          answer:
            "We provide 24/7 technical support, expert instructor assistance during business hours, community forum access, weekly live Q&A sessions, and private discussion groups for each course.",
        },
        {
          question: "Can I access materials after completion?",
          answer:
            "Yes, you maintain lifetime access to all course materials including video lectures, practice exercises, documentation, case studies, and content updates.",
        },
      ],
    },
    {
      category: "Refund Policy",
      questions: [
        {
          question: "What is your refund policy?",
          answer:
            "We offer a 30-day money-back guarantee with a full refund if requested within first 14 days (no questions asked). Refunds are available if less than 30% of course content is completed. Processing time is 5-7 business days.",
        },
        {
          question: "How do I request a refund?",
          answer:
            "Simply log into your student dashboard, go to 'Billing & Payments', click 'Request Refund', and complete the refund request form. Our team will process your request within 5-7 business days.",
        },
      ],
    },
  ];

  const [activeCategories, setActiveCategories] = useState<CategoryState>({});
  const [activeQuestions, setActiveQuestions] = useState<QuestionState>({});

  const toggleCategory = (categoryIndex: number): void => {
    setActiveCategories((prev) => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex],
    }));
  };

  const toggleQuestion = (
    categoryIndex: number,
    questionIndex: number
  ): void => {
    const key = `${categoryIndex}-${questionIndex}`;
    setActiveQuestions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-sm">
      <h2 className="text-[48px] font-bold font-[Gilroy-Bold] text-center text-gray-800 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleCategory(categoryIndex)}
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
            >
              <h3 className="text-xl font-semibold font-inter text-gray-800">
                {category.category}
              </h3>
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  activeCategories[categoryIndex] ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                activeCategories[categoryIndex]
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {category.questions.map((item, questionIndex) => (
                <div key={questionIndex} className="border-t border-gray-200">
                  <button
                    onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                    className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                  >
                    <h4 className="text-lg font-medium font-inter text-gray-700">
                      {item.question}
                    </h4>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeQuestions[`${categoryIndex}-${questionIndex}`]
                          ? "rotate-180"
                          : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    className={`transition-all duration-200 ease-in-out ${
                      activeQuestions[`${categoryIndex}-${questionIndex}`]
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="px-6 py-4 font-inter text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
