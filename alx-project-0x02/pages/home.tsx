import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

interface Post {
  title: string;
  content: string;
}

const HomePage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [...prev, { title, content }]);
  };

  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the Home Page</h1>
        <p className="mt-4 text-gray-600">
          This is the main page of your Next.js app.
        </p>

       {/* Open Modal Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add New Post
        </button>

        {/* Post Modal */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddPost={handleAddPost}
        />

        {/* Posts */}
        <div className="mt-6 space-y-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
