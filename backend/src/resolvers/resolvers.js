import { User } from "../models/user.js";
import { Post } from "../models/post.js";
import { Comment } from "../models/comment.js";

export const resolvers = {
  Query: {
    users: async () => User.find(),
    user: async (_, { id }) => User.findById(id),
    posts: async () => Post.find(),
    post: async (_, { id }) => Post.findById(id),
    comments: async () => Comment.find(),
  },

  Mutation: {
    createUser: async (_, { username, email }) => {
      const user = await User.create({ username, email });
      return user;
    },

    createPost: async (_, { authorId, title, content }) => {
      const post = await Post.create({
        title,
        content,
        author: authorId,
      });
      return post;
    },

    updateUser: async (_, { id, input }) => {
      const user = await User.findByIdAndUpdate(
        id,
        { $set: input },
        { new: true, runValidators: true }
      );
      if (!user) throw new Error("User not found");
      return user;
    },

    updatePost: async (_, { id, input }) => {
      const post = await Post.findByIdAndUpdate(
        id,
        { $set: input },
        { new: true, runValidators: true }
      );
      if (!post) throw new Error("Post not found");
      return post;
    },

    createComment: async (_, { authorId, postId, text }) => {
      const comment = await Comment.create({
        content: text,
        author: authorId,
        post: postId,
      });

      await Post.findByIdAndUpdate(postId, {
        $push: { comments: comment._id },
      });

      return comment;
    },
  },

  User: {
    posts: (parent) => Post.find({ author: parent.id }),
  },

  Post: {
    author: (parent) => User.findById(parent.author),
    comments: (parent) => Comment.find({ post: parent.id }),
  },

  Comment: {
    author: (parent) => User.findById(parent.author),
    post: (parent) => Post.findById(parent.post),
  },
};
