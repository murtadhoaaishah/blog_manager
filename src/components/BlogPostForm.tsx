import React from 'react';
import type { BlogPost } from '../types/BlogPost';

// type BlogPostProps = {
//   title: string;
//   content: string;
//   author: string;
//   publishDate: string;
//   category: string;
// };

const BlogPost: React.FC<BlogPost> = ({ title, content, author, date, category }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 border-l-4 border-blue-500">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-1">
        By <span className="font-medium">{author}</span> | {new Date(publishDate).toDateString()} | <span className="text-blue-600 font-semibold">{category}</span>
      </p>
      <p className="text-gray-800 mt-2">{content}</p>
    </div>
  );
};

export default BlogPost;

