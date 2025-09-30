"use client";

import { NAVBAR_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavItems = () => {
  const isActive = (path: string) => {
    const pathname = usePathname();
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAVBAR_ITEMS.map(({ title, link }) => (
        <li key={link}>
          <Link
            href={link}
            className={`hover:text-yellow-500 transition-colors ${
              isActive(link) ? "text-gray-100" : ""
            }`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
