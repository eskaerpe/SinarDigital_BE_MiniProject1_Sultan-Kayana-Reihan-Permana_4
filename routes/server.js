// importing necessary modules
const express = require("express");
const fs = require("fs");
const Blog = require("../controller/controller.js");

// initializing express app
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const blog = require("../data/blog.json");
console.log(blog); // just for checking

app.get("/blog", Blog.getAllBlogs);

// app.post("/blog", (req, res) => {
// 	const
// })

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
