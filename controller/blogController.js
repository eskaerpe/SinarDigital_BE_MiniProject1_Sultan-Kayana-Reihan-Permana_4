const fs = require("fs");
const blog = require("../data/blog.json");

class Blog {
	static getAllBlogs(req, res) {
		res.json(blog);
	}
}

module.exports = Blog;
