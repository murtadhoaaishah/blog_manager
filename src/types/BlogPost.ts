export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  publishDate: string | Date;
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