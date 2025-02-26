export interface Course {
  id: number;
  title: string;
  description: string[];
  rating: number;
  price: string;
  formerPrice: string;
  image: string;
  instructor?: string;
}

export const courses: Course[] = [
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
    formerPrice: "$650",
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
    formerPrice: "",
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
    formerPrice: "",
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
    formerPrice: "",
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
    formerPrice: "",
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
    formerPrice: "",
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
    formerPrice: "",
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
    formerPrice: "$4148",
    image: "/images/courseImg9.jpeg",
  },
  {
    id: 9,
    title: "SAP POPM",
    description: ["(Details to come soon)"],

    rating: 4.6,
    price: "$500",
    formerPrice: "",
    image: "/images/courseImg1.jpeg",
  },
];
