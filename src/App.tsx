import { useEffect, useState } from 'react';
import BlogList from './components/BlogList';
import { BlogForm } from './components/BlogForm';
import type { BlogPost, BlogPostInput } from "./types/BlogPost";


function App() {
  const [showForm, setShowForm] = useState(false);
   const initialPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with React",
      content:
        "React is a powerful JavaScript library for building user interfaces. In this post, we will explore the basics of React and how to get started with your first component.",
      author: "John Doe",
      publishDate: "2024-01-15",
      category: "Technology",
    },
    {
      id: 2,
      title: "Understanding TypeScript",
      content:
        "TypeScript adds static typing to JavaScript, making it easier to catch errors early and improve code quality. Learn about types, interfaces, and more.",
      author: "Jane Smith",
      publishDate: "2024-02-20",
      category: "Programming",
    },
    {
      id: 3,
      title: "The Art of Writing Clean Code",
      content:
        "Clean code is essential for maintainability. This article discusses principles and practices for writing code that is easy to read and understand.",
      author: "Bob Johnson",
      publishDate: "2024-03-10",
      category: "Best Practices",
    },
    {
      id: 4,
      title: "Modern CSS Techniques",
      content:
        "CSS has evolved significantly. Explore modern techniques like Grid, Flexbox, and CSS Variables that make styling easier and more powerful.",
      author: "Alice Brown",
      publishDate: "2024-04-05",
      category: "Design",
    },
    {
      id: 5,
      title: "State Management in React",
      content:
        "Managing state effectively is crucial in React applications. Compare different approaches including Context API, Redux, and Zustand.",
      author: "John Doe",
      publishDate: "2024-05-12",
      category: "Technology",
    },
  ];
 const [posts, setPosts] = useState<BlogPost[]>(initialPosts);

 const handleAddPost=(post: BlogPostInput)=> {
  const newPost= {
    id: posts.length + 1,
  publishDate: new Date(),
    author:post.author,
    title: post.title,
    content: post.content,
    category: post.category



  }
  setPosts([newPost, ...posts])
 }


 

 

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Blog Post Management</h1>
          <p className="mt-2 text-gray-600">Create, manage, and organize your blog posts</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create New Post
            </button>
          </div>

              {showForm && <BlogForm onCancel={() => setShowForm(false)} handleAddPost={handleAddPost} onSuccess={() => setShowForm(false)}/>}

        <BlogList posts={posts} />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            Blog Post Management System - Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;