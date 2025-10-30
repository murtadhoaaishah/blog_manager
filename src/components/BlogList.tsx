import { BlogPostCard } from "./BlogPostCard";
import type { BlogPost } from "../types/BlogPost";

const BlogList = ({posts}: {posts: BlogPost[]}) => {
 

 

 

  return (
    <div className="">

      {/* <BlogPostForm onSubmit={addPost} /> */}

      

      {posts.map((post) => (
        <div key={post.id} className="relative">
          <BlogPostCard post={post} />
         
         
        </div>
      ))}
    </div>
  );
};

export default BlogList;
