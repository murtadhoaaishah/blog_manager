export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
}

export interface BlogPostInput {
  title: string;
  content: string;
  author: string;
  category: string;
}

export interface ValidationError {
  field: string;
  message: string;
}