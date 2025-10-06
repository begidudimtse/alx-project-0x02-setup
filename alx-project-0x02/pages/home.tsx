import React from "react";
import  Header  from "@/components/layout/Header";
import Card from "@/components/common/Card"

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the Home Page</h1>
        <p className="mt-4 text-gray-600">
          This is the main page of your Next.js app.
        </p>

        {/* Cards Section */}
        <div className="mt-6 space-y-4">
          <Card title="Card 1" content="This is the content of card 1." />
          <Card title="Card 2" content="This is the content of card 2." />
          <Card title="Card 3" content="This is the content of card 3." />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
