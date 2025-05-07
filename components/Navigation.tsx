"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { links } from "@/lib/constants";

export default function Navigation() {
  const pathname = usePathname();
    return (
    <nav className="border border-white flex gap-8 p-4 justify-center">
      {links.map((link) => (
        <Link
          key={link.key}
          href={link.href}
          className={clsx(
            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-500 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
            {
              "bg-sky-100 text-blue-600": pathname === link.href,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
