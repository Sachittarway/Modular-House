const express = require("express");
const {
  createBlog,
  likeBlog,
  getBlogs,
} = require("../controllers/blogController");
const blogRouter = express.Router();
const auth = require("../auth/auth");

blogRouter.post("/create", auth, createBlog);
blogRouter.put("/like/:blogId", auth, likeBlog);
blogRouter.get("/allblogs", auth, getBlogs);

module.exports = blogRouter;
