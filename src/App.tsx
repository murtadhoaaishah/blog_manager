import React, { useState } from 'react';
import BlogPost from './components/BlogPost';
import BlogPostForm from './components/CreateBlog';


type BlogPostType = {
  title: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
};


const BlogManager: React.FC = () => {
    const [posts, setPosts] = useState<BlogPostType[]>([
        {
      title: 'Intro to TypeScript',
      content: 'TypeScript adds types to JavaScript, helping you catch errors early and write more robust code.',
      author: 'Alice Johnson',
      publishDate: '2025-10-28',
      category: 'Programming',
    },
      {
    title: 'Tailwind CSS Tips',
    content: 'Tailwind CSS is a utility-first framework that makes styling fast and responsive.',
    author: 'Bob Smith',
    publishDate: '2025-10-27',
    category: 'Design',
  },
    ])

      const addPost = (newPost: BlogPostType) => {
    setPosts([newPost, ...posts]);
  };
  
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Blog Post Manager</h1>
       <BlogPostForm onSubmit={addPost} />
      {posts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogManager;
