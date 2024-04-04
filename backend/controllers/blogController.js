const BlogModel = require("../models/blogModel");

const createBlog = async (req, res) => {
  try {
    const { blog_title, blog_description, authorType } = req.body;
    const blog = await BlogModel.create({
      blog_title,
      blog_description,
      like_count: 0,
      author: {
        id: req.userId,
        type: authorType,
      },
    });
    res.status(201).json({ blog });
  } catch (error) {
    res.status(400).send(error);
  }
};

const likeBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const { userType } = req.body;
    const userId = req.userId;
    const blog = await BlogModel.findById(blogId);
    const likedByUser = blog.liked_by.find(
      (like) => like.user_id.toString() === userId.toString()
    );
    if (likedByUser) {
      blog.like_count -= 1;
      blog.liked_by = blog.liked_by.filter(
        (like) => like.user_id.toString() !== userId.toString()
      );
      await blog.save();
      return res.status(200).json({ blog, message: "unliked" });
    }
    blog.like_count += 1;
    blog.liked_by.push({ user_id: userId, type: userType });
    await blog.save();
    res.status(200).json({ blog, message: "liked" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
module.exports = { createBlog, likeBlog, getBlogs };
