import React from 'react';
import BlogPost from './components/BlogPost';


const blogPosts = [
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
];

const BlogManager: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Blog Post Manager</h1>
      {blogPosts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogManager;
