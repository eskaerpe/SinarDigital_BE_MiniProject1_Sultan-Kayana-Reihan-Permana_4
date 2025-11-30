// importing necessary modules
const express = require("express");
const fs = require("fs");
const Blog = require("../controller/blogController.js");
const Author = require("../controller/authorsController.js");

// initializing express app
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const blog = require("../data/blog.json");
console.log(blog); // just for checking

// defining routes for blog operations
app.get("/blog", Blog.getAllBlogs);

app.post("/blog", Blog.createBlog);

app.put("/blog/:id", Blog.updateBlog);

app.delete("/blog/:id", Blog.deleteBlog);

// defining route for authors
app.get("/authors", Author.getAllAuthors);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
