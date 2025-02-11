import React from "react";
import Hero from "@/components/Hero";
import FeaturedCoursesSection from "@/components/FeaturedCoursesSection ";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import PricingPlansSection from "@/components/PricingPlansSection";

const page = () => {
  return (
    <section>
      <Hero />
      <FeaturedCoursesSection />
      <WhyChooseUsSection />
      <PricingPlansSection />
    </section>
  );
};

export default page;
