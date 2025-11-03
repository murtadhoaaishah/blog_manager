import { useState, useEffect } from "react";
import type {
  BlogPost,
  BlogPostInput,
  ValidationError,
} from "../types/BlogPost";

interface BlogFormProps {
  editingPost?: BlogPost | null;
  onCancel: () => void;
  onSuccess: () => void;
  handleAddPost: (post: BlogPostInput) => void;
  handleUpdatePost: (id: number, post: BlogPostInput) => void;
  addingPost: boolean;
}

export const BlogForm = ({
  editingPost,
  onCancel,
  onSuccess,
  handleAddPost,
  handleUpdatePost,
  addingPost,
}: BlogFormProps) => {
  const [formData, setFormData] = useState<BlogPostInput>({
    title: "",
    content: "",
    author: "",
    category: "",
  });
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (editingPost) {
      setFormData({
        title: editingPost.title,
        content: editingPost.content,
        author: editingPost.author,
        category: editingPost.category,
      });
    } else {
      setFormData({
        title: "",
        content: "",
        author: "",
        category: "",
      });
    }
  }, [editingPost]);

  const validate = (): boolean => {
    const newErrors: ValidationError[] = [];

    if (!formData.title.trim()) {
      newErrors.push({ field: "title", message: "Title is required" });
    } else if (formData.title.length < 5) {
      newErrors.push({
        field: "title",
        message: "Title must be at least 5 characters",
      });
    }

    if (!formData.content.trim()) {
      newErrors.push({ field: "content", message: "Content is required" });
    } else if (formData.content.length < 20) {
      newErrors.push({
        field: "content",
        message: "Content must be at least 20 characters",
      });
    }

    if (!formData.author.trim()) {
      newErrors.push({ field: "author", message: "Author is required" });
    }

    if (!formData.category.trim()) {
      newErrors.push({ field: "category", message: "Category is required" });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      if (editingPost) {
        handleUpdatePost(editingPost.id, formData);
      } else {
        handleAddPost(formData);
      }
      setFormData({ title: "", content: "", author: "", category: "" });
      setErrors([]);
      onSuccess();
    } catch (error) {
      console.error("Failed to submit:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (field: string): string | undefined => {
    return errors.find((e) => e.field === field)?.message;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {editingPost ? "Edit Post" : "Create New Post"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title *
          </label>
          <input
            id="title"
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
              getFieldError("title") ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter post title"
          />
          {getFieldError("title") && (
            <p className="mt-1 text-sm text-red-600">
              {getFieldError("title")}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Author *
          </label>
          <input
            id="author"
            type="text"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
              getFieldError("author") ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter author name"
          />
          {getFieldError("author") && (
            <p className="mt-1 text-sm text-red-600">
              {getFieldError("author")}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Category *
          </label>
          <input
            id="category"
            type="text"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${
              getFieldError("category") ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g., Technology, Programming, Design"
          />
          {getFieldError("category") && (
            <p className="mt-1 text-sm text-red-600">
              {getFieldError("category")}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Content *
          </label>
          <textarea
            id="content"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            rows={6}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-y ${
              getFieldError("content") ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Write your blog post content here..."
          />
          {getFieldError("content") && (
            <p className="mt-1 text-sm text-red-600">
              {getFieldError("content")}
            </p>
          )}
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={isSubmitting || addingPost}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting || addingPost
              ? "Saving..."
              : editingPost
              ? "Update Post"
              : "Create Post"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};