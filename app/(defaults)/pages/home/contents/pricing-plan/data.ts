interface PricingPlan {
  id: number;
  title: string;
  price: string;
  description: string;
  features: string[];
}

export const pricingData: PricingPlan[] = [
  {
    id: 1,
    title: "Basic Plan",
    price: "$29",
    description: "An affordable plan with essential features.",
    features: ["Access to basic features", "Basic support", "Community access"],
  },
  {
    id: 2,
    title: "Standard Plan",
    price: "$49",
    description: "The most popular plan with additional features.",
    features: [
      "Access to all features",
      "Priority support",
      "Premium content",
      "Community access",
    ],
  },
  {
    id: 3,
    title: "Premium Plan",
    price: "$99",
    description: "All the features you need for professional use.",
    features: [
      "All features included",
      "24/7 support",
      "Exclusive content",
      "Personalized assistance",
      "Community access",
    ],
  },
];
