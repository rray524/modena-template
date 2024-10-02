import Link from "next/link";
import { FC } from "react";
import FooterTitle from "./footer-title";

interface FooterMenuProps {
  title: string;
  items: { name: string; link: string }[];
}

export const FooterMenu: FC<FooterMenuProps> = ({ title, items }) => (
  <div className="text-white">
    <FooterTitle title={title} />
    <ul className="flex flex-col space-y-2 mx-auto md:mx-0">
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.link}>
            <span className="text-[15px] py-1">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
