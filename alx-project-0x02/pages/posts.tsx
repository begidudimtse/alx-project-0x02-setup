import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

interface PostData {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostsPage = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data.slice(0, 10)); // limit to 10 posts for cleaner view
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Posts</h1>

        {loading ? (
          <p className="text-gray-500">Loading posts...</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                content={post.body}
                userId={post.userId}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default PostsPage;
