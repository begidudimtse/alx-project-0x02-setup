import React from "react";
import Header from "@/components/layout/Header";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-gray-600">
          This page gives some info about the app and what it does.
        </p>
      </main>
    </div>
  );
};

export default AboutPage;
