"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
      category: "General Questions",
      questions: [
        {
          question: "What is Golden Pearl Consulting?",
          answer:
            "Golden Pearl Consulting is a leading provider of SAP training programs designed to empower professionals and organizations with the skills needed to excel in SAP solutions, including SAP S/4HANA, SAP FICO, and more.",
        },
        {
          question: "Who can benefit from your SAP training programs?",
          answer:
            "Our programs are tailored for beginners, experienced professionals, finance and accounting experts, IT and business analysts, project managers, and consultants looking to upskill or start a career in SAP.",
        },
        {
          question: "What SAP training programs do you offer?",
          answer:
            "We specialize in SAP S/4HANA Finance (FICO), SAP Controlling (CO), and SAP Activate Methodology & Agile Project Management.",
        },
        {
          question:
            "Do you offer training for beginners with no prior SAP experience?",
          answer:
            "Yes, our training programs cater to individuals at all levels, including beginners who want to start a career in SAP.",
        },
      ],
    },
    {
      category: "Training Details",
      questions: [
        {
          question: "What is the duration of your SAP training programs?",
          answer:
            "The duration varies depending on the program and learning mode (online, on-site, or self-paced). Please get in touch with us for specific details.",
        },
        {
          question: "Do you provide hands-on training?",
          answer:
            "Our training includes real-world case studies, live projects, and interactive sessions to ensure practical, hands-on learning.",
        },
        {
          question:
            "Are your training programs aligned with industry standards?",
          answer:
            " Absolutely. Our curriculum is designed to align with industry best practices and current SAP market demands.",
        },
        {
          question: "What are the learning options available?",
          answer:
            "We offer flexible learning options, including online, on-site, and self-paced training to suit your schedule and learning style.",
        },
      ],
    },
    {
      category: "Certification and Career Support",
      questions: [
        {
          question: "Do you help with SAP certification preparation?",
          answer:
            "We assist with SAP certification preparation, including study materials and practice exams.",
        },
        {
          question: "Do you offer job placement assistance?",
          answer:
            "Yes, we offer career support, including resume building, interview preparation, and job placement assistance to help you land your dream SAP role.",
        },
        {
          question:
            "Will I receive a certificate after completing the training?",
          answer:
            "Yes, you will receive a certificate of completion from Golden Pearl Consulting after successfully finishing the training program.",
        },
      ],
    },
    {
      category: "Enrollment and Fees",
      questions: [
        {
          question: "How can I enroll in your SAP training programs?",
          answer:
            "You can enroll by contacting us via email at info@goldenpearlconsulting.com or by calling 281-922-8669.",
        },
        {
          question: "What is the cost of your SAP training programs?",
          answer:
            "The cost varies depending on the program and learning mode. Please reach out to us for detailed pricing information.",
        },
        {
          question: "Do you offer discounts or payment plans?",
          answer:
            "We occasionally offer discounts and flexible payment plans. Contact us for more details.",
        },
      ],
    },
    {
      category: "Technical and Support Questions",
      questions: [
        {
          question: "What are the technical requirements for online training?",
          answer:
            "You will need a stable internet connection, a computer or laptop, and access to SAP software (we provide guidance on setting this up).",
        },
        {
          question: "Can I access training materials after the course ends?",
          answer:
            "Yes, you will have access to course materials for a specified period after completing the training.",
        },
        {
          question: "What if I miss a live session?",
          answer:
            "Recordings of live sessions are typically provided for online training, so you can catch up at your convenience.",
        },
      ],
    },

    {
      category: "Corporate Training",
      questions: [
        {
          question: "Do you offer corporate training for organizations?",
          answer:
            "Yes, we provide customized SAP training programs for organizations to upskill their teams and optimize business processes.",
        },
        {
          question: "Can training be conducted on-site for corporate clients?",
          answer:
            "Yes, we offer on-site training options for corporate clients based on their requirements.",
        },
        {
          question: "How do you tailor training for corporate needs?",
          answer:
            "We work closely with organizations to understand their goals and customize the curriculum to meet their specific business needs.",
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
              {activeCategories[categoryIndex] ? (
                <Minus className="w-5 h-5 text-gray-600" />
              ) : (
                <Plus className="w-5 h-5 text-gray-600" />
              )}
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
                    {activeQuestions[`${categoryIndex}-${questionIndex}`] ? (
                      <Minus className="w-4 h-4 text-gray-600" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-600" />
                    )}
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
