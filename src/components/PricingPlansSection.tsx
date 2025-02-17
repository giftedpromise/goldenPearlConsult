"use client";

import React from "react";

const PricingPlansSection = () => {
  // Pricing plans data
  const plans = [
    {
      id: 1,
      name: "Monthly Subscription",
      price: "$29.99/month",
      description: "Perfect for learners who want flexibility.",
      features: [
        "Access to all courses",
        "New content added monthly",
        "Cancel anytime",
      ],
      cta: "Get Started",
      ctaLink: "/signup/monthly",
      isRecommended: false, // Not recommended
    },
    {
      id: 2,
      name: "Annual Subscription",
      price: "$299.99/year",
      description: "Best value for long-term learners.",
      features: [
        "Access to all courses",
        "Access to live classes",
        "New content added monthly",
        "2 months free compared to monthly",
        "Priority support",
      ],
      cta: "Get Started",
      ctaLink: "/signup/annual",
      isRecommended: true, // Recommended plan
    },
    {
      id: 3,
      name: "One-Time Payment",
      price: "$499.99",
      description: "Lifetime access to all current and future courses.",
      features: [
        "Access to all courses",
        "New content added monthly",
        "Lifetime access",
        "Priority support",
        "Exclusive resources",
      ],
      cta: "Get Started",
      ctaLink: "/signup/lifetime",
      isRecommended: false, // Not recommended
    },
  ];

  return (
    <section className="py-[80px] bg-[#F3FAFD] lg:px-[80px] md:px-10 px-4">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-[Gilroy-Bold] md:text-[56px] font-bold mb-4">
            Pricing Plans
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your learning needs and budget.
          </p>
        </div>

        {/* Pricing Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white p-8 rounded-lg shadow-sm text-center ${
                plan.isRecommended ? "border-2 border-blue-600" : ""
              }`}
            >
              {/* Recommended Badge */}
              {plan.isRecommended && (
                <div className="bg-blue-600 text-white py-1 px-4 rounded-lg inline-block mb-4">
                  Recommended
                </div>
              )}
              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              {/* Plan Price */}
              <p className="text-3xl font-semibold mb-4">{plan.price}</p>
              {/* Plan Description */}
              <p className="text-gray-600 mb-6">{plan.description}</p>
              {/* Plan Features */}
              <ul className="text-left mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 mb-2">
                    ✔️ {feature}
                  </li>
                ))}
              </ul>
              {/* Call-to-Action Button */}
              <a
                href={plan.ctaLink}
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 block"
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlansSection;
