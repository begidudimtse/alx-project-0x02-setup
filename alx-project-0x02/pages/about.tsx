import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-gray-600">
          This page gives some info about the app and what it does.
        </p>

        {/* Buttons Section */}
        <div className="mt-6 flex gap-4">
          <Button size="small" shape="rounded-sm">Small Rounded-Sm</Button>
          <Button size="medium" shape="rounded-md">Medium Rounded-Md</Button>
          <Button size="large" shape="rounded-full">Large Rounded-Full</Button>
        </div>
        
      </main>
    </div>
  );
};

export default AboutPage;
