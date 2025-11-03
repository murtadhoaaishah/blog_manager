import type { BlogPost, BlogPostInput } from "../types/BlogPost";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

interface JSONPlaceholderPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const transformPost = (post: JSONPlaceholderPost): BlogPost => ({
  id: post.id,
  title: post.title,
  content: post.body,
  author: `User ${post.userId}`,
  publishDate: new Date().toISOString().split("T")[0],
  category: ["Technology", "Programming", "Design", "Best Practices"][
    post.userId % 4
  ],
});

export const api = {
  getPosts: async () => {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) throw new Error("Failed to fetch posts");
    const data: JSONPlaceholderPost[] = await response.json();
    return data.map(transformPost);
  },

  getPost: async (id: number) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Failed to fetch post");
    const data: JSONPlaceholderPost = await response.json();
    return transformPost(data);
  },

  createPost: async (post: BlogPostInput) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: post.title,
        body: post.content,
        userId: 1,
      }),
    });

    if (!response.ok) throw new Error("Failed to create post");
    const data: JSONPlaceholderPost = await response.json();

    return {
      id: data.id,
      title: post.title,
      content: post.content,
      author: post.author,
      publishDate: new Date().toISOString().split("T")[0],
      category: post.category,
    };
  },

  updatePost: async (id: number, post: BlogPostInput): Promise<BlogPost> => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: post.title,
        body: post.content,
        userId: 1,
      }),
    });

    if (!response.ok) throw new Error("Failed to update post");

    return {
      id,
      title: post.title,
      content: post.content,
      author: post.author,
      publishDate: new Date().toISOString().split("T")[0],
      category: post.category,
    };
  },

  deletePost: async (id: number) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete post");
  },
};