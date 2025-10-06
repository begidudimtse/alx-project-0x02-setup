import React from "react";
import Link from "next/link";
import { HeaderProps } from "@/interfaces";

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-md">
      <h1 className="text-xl font-semibold">{title}</h1>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
