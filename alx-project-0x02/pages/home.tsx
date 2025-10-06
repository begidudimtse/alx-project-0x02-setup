import React from "react";
import  Header  from "@/components/layout/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the Home Page</h1>
        <p className="mt-4 text-gray-600">
          This is the main page of your Next.js app.
        </p>
      </main>
    </div>
  );
};

export default HomePage;
