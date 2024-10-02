import profile from "@/public/images/team-1.jpg";
import profile1 from "@/public/images/team-2.jpg";
import profile2 from "@/public/images/team-3.jpg";
import { StaticImageData } from "next/image";

export interface TeamMember {
  name: string;
  position: string;
  imgSrc: StaticImageData;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Thomas Miller",
    position: "CEO",
    imgSrc: profile,
  },
  {
    name: "Jennifer Meyer",
    position: "CFO",
    imgSrc: profile1,
  },
  {
    name: "Peter Houston",
    position: "SALES",
    imgSrc: profile2,
  },
];
