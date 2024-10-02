export interface CardData {
  id: number;
  content: string;
  job: string;
}

export const cardData: CardData[] = [
  {
    id: 1,
    content: "This is a wonderful product. Highly recommended!",
    job: "CEO at Company",
  },
  {
    id: 2,
    content: "A fantastic solution to our business needs.",
    job: "Manager at Corporation",
  },
  {
    id: 3,
    content: "The best service we have ever used!",
    job: "Director at Enterprise",
  },
];
