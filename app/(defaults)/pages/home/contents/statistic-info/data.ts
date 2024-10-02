export interface CardData {
  id: number;
  amount: string;
  title: string;
  description: string;
}

export const cardData: CardData[] = [
  {
    id: 1,
    amount: "$390M",
    title: "Property Sales",
    description:
      "Cras pulvinar ultricies vehicula cras et nulla id lorem vulputate pulvinar eget non neque.",
  },
  {
    id: 2,
    amount: "+1,290",
    title: "Active Listings",
    description:
      "Cras pulvinar ultricies vehicula cras et nulla id lorem vulputate pulvinar eget non neque.",
  },
  {
    id: 3,
    amount: "210x",
    title: "Revenue Growth",
    description:
      "Cras pulvinar ultricies vehicula cras et nulla id lorem vulputate pulvinar eget non neque.",
  },
];
