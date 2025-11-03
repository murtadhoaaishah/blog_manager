import { BlogPostCard } from "./BlogPostCard";
import type { BlogPost } from "../types/BlogPost";

interface BlogListProps {
  posts: BlogPost[];
  onEdit: (post: BlogPost) => void;
  onDelete: (id: number) => void;
}

const BlogList = ({ posts, onEdit, onDelete }: BlogListProps) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <div key={post.id} className="relative">
          <BlogPostCard post={post} onEdit={onEdit} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;