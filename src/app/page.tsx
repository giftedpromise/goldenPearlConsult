import Hero from "@/components/Hero";
import Link from "next/link";
import FeaturedCoursesSection from "@/components/FeaturedCoursesSection ";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import PricingPlansSection from "@/components/PricingPlansSection";
import FAQSection from "@/components/FAQSection";

const page = () => {
  return (
    <section className="overflow-x-hidden">
      <Hero />
      <FeaturedCoursesSection />
      <WhyChooseUsSection />
      <PricingPlansSection />

      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/heroBg2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/55 to-transparent"></div>

        <div className="relative container mx-auto lg:px-[80px] md:px-10 px-4 h-full flex items-center">
          <div className="max-w-2xl text-left text-white py-20">
            <h1 className="text-5xl font-[Gilroy-Bold] font-bold mb-6">
              Unlock Your SAP Career with Golden Pearl Consulting
            </h1>

            {/* Engaging Paragraph */}
            <p className="text-lg md:text-xl font-inter lg:text-2xl mb-8">
              Join thousands of professionals who have transformed their careers
              with our industry-leading SAP courses. Whether you&apos;re a
              beginner or an experienced professional, we provide the tools,
              knowledge, and support to help you succeed in the competitive
              world of SAP.
            </p>

            {/* Call-to-Action Button */}
            <Link
              href="/enroll"
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              aria-label="Enroll in SAP courses"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="min-h-screen bg-gray-50 py-[80px]">
        <FAQSection />
      </div>
    </section>
  );
};

export default page;
