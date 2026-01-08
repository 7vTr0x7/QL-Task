export interface Comment {
  id: string;
  content: string;
  author?: User;
  post?: Post;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author?: User;
  comments?: Comment[];
}

export interface User {
  id: string;
  username: string;
  email: string;
  posts?: Post[];
}
