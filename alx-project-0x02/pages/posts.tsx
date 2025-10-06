// pages/posts.tsx
import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Posts</h1>
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

// ✅ This function enables static data fetching
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;
