import React from "react";
import Image from "next/image";

interface TrainingModesProps {
  image: string;
  title: string;
  description: string;
}

const TrainingModes = ({ image, title, description }: TrainingModesProps) => (
  <div className="relative pt-12 group">
    {/* White card shadow with blue bottom border and hover effects */}
    <div
      className="bg-white rounded-lg shadow-sm p-6 pt-16 border-b-4 border-[#2563eb] 
        transition-all duration-300 ease-in-out relative
        hover:shadow-xl hover:scale-105 hover:-translate-y-2 z-10"
    >
      {/* Rounded image positioned on top of the card */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
        <div
          className="w-24 h-24 rounded-full overflow-hidden bg-[#2563eb] 
            transition-transform duration-300 ease-in-out group-hover:scale-110 relative"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold font-inter mb-4 mt-8 text-center">
        {title}
      </h3>
      <p className="text-gray-600 font-inter text-sm leading-relaxed text-center">
        {description}
      </p>
    </div>
  </div>
);

const TrainingMode = () => {
  const trainingModes = [
    {
      image: "/images/training.png",

      title: "SELF PACED VIDEO TRAINING",
      description:
        "Students learn from pre-recorded videos of the Live sessions. Learn at your own pace from anywhere at any time using any device. These self-paced videos are recorded by certified instructors. Access to all Course materials through LMS. 24x7 support using tickets. Certification of completion at the end.",
    },
    {
      image: "/images/learning.png",
      title: "INSTRUCTOR LED VIDEO TRAINING",
      description:
        "Students attend well-structured Video sessions by certified instructors and SME's. This learning program is free from geographical and time limitations. Students can access e-learning content, interact with trainers through discussion boards of LMS. Course material, videos, Assignments, and Assessments. 24X7 support using tickets. Certification of completion at the end.",
    },
    {
      image: "/images/social.png",
      title: "INSTRUCTOR LED LIVE TRAINING",
      description:
        "Students attend well structured Live Interactive sessions by certified instructors. Recorded videos of every session. LMS to access course material, videos, Assignments, and Assessments. Ability to ask offline questions. 24x7 support using tickets. Certification of completion at the end.",
    },
  ];

  return (
    <div className="py-[80px] bg-gray-50 md:px-10 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Modes of Training
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainingModes.map((mode, index) => (
            <TrainingModes
              key={index}
              image={mode.image}
              title={mode.title}
              description={mode.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingMode;
