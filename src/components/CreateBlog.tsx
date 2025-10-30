import React, { useState } from 'react';

type BlogPost = {
  title: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
};

type BlogPostFormProps = {
  onSubmit: (post: BlogPost) => void;
};

const BlogPostForm: React.FC<BlogPostFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<BlogPost>({
    title: '',
    content: '',
    author: '',
    publishDate: '',
    category: '',
  });

  const [errors, setErrors] = useState<Partial<BlogPost>>({});

  const validate = () => {
    const newErrors: Partial<BlogPost> = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.content.trim()) newErrors.content = 'Content is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    if (!formData.publishDate.trim()) newErrors.publishDate = 'Publish date is required';
    if (!formData.category.trim()) newErrors.category = 'Category is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({ title: '', content: '', author: '', publishDate: '', category: '' });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Create New Blog Post</h2>

      {['title', 'author', 'publishDate', 'category'].map((field) => (
        <div key={field} className="mb-4">
          <label className="block text-gray-700 font-medium mb-1 capitalize">{field}</label>
          <input
            type={field === 'publishDate' ? 'date' : 'text'}
            name={field}
            value={(formData as any)[field]}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors[field as keyof BlogPost] && (
            <p className="text-red-500 text-sm mt-1">{errors[field as keyof BlogPost]}</p>
          )}
        </div>
      ))}

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit Post
      </button>
    </form>
  );
};

export default BlogPostForm;
