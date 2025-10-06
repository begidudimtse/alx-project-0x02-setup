import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-900 text-white px-6 py-4">
      <h1 className="text-xl font-bold">My App</h1>
      <nav className="space-x-6">
        <Link href="/home" className="hover:text-gray-300">Home</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
      </nav>
    </header>
  );
};

export default Header;
