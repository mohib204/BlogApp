const Blog = require("../models/blogModel");

const createBlog = (req, res) => {
  const body = req.body;
  console.log("🚀 ~ createBlog ~ body:", body);

  const newBlog = new Blog({
    title: body.title,
    description: body.description,
    image: body.image,
    category: body.category,
    author: body.authorId,
  });
  newBlog
    .save()
    .then((response) => {
      if (response) {
        res.send({ message: "Blog created successfully", blog: response });
      } else {
        res.status(400).send({
          message: "Somethig went wrong try again letter",
          blog: null,
        });
      }
    })
    .catch((err) => {
      res.status(400).send({
        message: err?.message,
        error: err,
      });
    });
};
const updateBlog = (req, res) => {
  const body = req.body;

  Blog.findByIdAndUpdate(body.id, {
    title: body.title,
    description: body.description,
    image: body.image,
    category: body.category,
  })
    .then((response) => {
      if (response) {
        res.send({
          message: "Blog updated successfully",
          blog: body,
        });
      } else {
        res.status(400).send({
          message: "Somethig went wrong try again letter",
          blog: null,
        });
      }
    })
    .catch((err) => {
      res.status(400).send({
        message: err?.message,
        error: err,
      });
    });
};

const deleteBlog = (req, res) => {
  const blogId = req.params.blogId;

  Blog.findOneAndDelete(blogId)
    .then((response) => {
      if (response) {
        res.send({ message: "Blog deleted successfully" });
      } else {
        res.status(400).send({ message: "Blog not found" });
      }
    })
    .catch((err) => {
      res.status(400).send({
        message: err?.message,
        error: err,
      });
    });
};

const getAllBlogs = (req, res) => {
  Blog.find()
    .populate("author")
    .then((allBlogs) => {
      console.log("🚀 ~ .then ~ response:", allBlogs);

      res.send(allBlogs);
    })
    .catch((err) => {
      res.status(400).send({
        message: err?.message,
        error: err,
      });
    });
};

const getBlogById = (req, res) => {
  const blogId = req.params.blogId;

  Blog.findById(blogId)
    .then((blog) => {
      if (blog) {
        res.send({ blog });
      } else {
        res.status(400).send({ message: "Blog not found" });
      }
    })
    .catch((err) => {
      res.status(400).send({
        message: err?.message,
        error: err,
      });
    });
};

module.exports = {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
  getBlogById,
};
