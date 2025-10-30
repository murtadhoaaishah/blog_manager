import React, { useState } from "react";
import type { BlogPost } from "../types/BlogPost";
import { BlogPostCard } from "../components/BlogPostCard";

const BlogManager: React.FC = () => {
  const initialPosts: BlogPost[] = [
    {
      id: "1",
      title: "Getting Started with React",
      content:
        "React is a powerful JavaScript library for building user interfaces. In this post, we will explore the basics of React and how to get started with your first component.",
      author: "John Doe",
      publishDate: "2024-01-15",
      category: "Technology",
    },
    {
      id: "2",
      title: "Understanding TypeScript",
      content:
        "TypeScript adds static typing to JavaScript, making it easier to catch errors early and improve code quality. Learn about types, interfaces, and more.",
      author: "Jane Smith",
      publishDate: "2024-02-20",
      category: "Programming",
    },
    {
      id: "3",
      title: "The Art of Writing Clean Code",
      content:
        "Clean code is essential for maintainability. This article discusses principles and practices for writing code that is easy to read and understand.",
      author: "Bob Johnson",
      publishDate: "2024-03-10",
      category: "Best Practices",
    },
    {
      id: "4",
      title: "Modern CSS Techniques",
      content:
        "CSS has evolved significantly. Explore modern techniques like Grid, Flexbox, and CSS Variables that make styling easier and more powerful.",
      author: "Alice Brown",
      publishDate: "2024-04-05",
      category: "Design",
    },
    {
      id: "5",
      title: "State Management in React",
      content:
        "Managing state effectively is crucial in React applications. Compare different approaches including Context API, Redux, and Zustand.",
      author: "John Doe",
      publishDate: "2024-05-12",
      category: "Technology",
    },
  ];

  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);


 

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Blog Post Manager</h1>

      {/* <BlogPostForm onSubmit={addPost} /> */}

      

      {posts.map((post) => (
        <div key={post.id} className="relative">
          <BlogPostCard post={post} />
         
         
        </div>
      ))}
    </div>
  );
};

export default BlogManager;
