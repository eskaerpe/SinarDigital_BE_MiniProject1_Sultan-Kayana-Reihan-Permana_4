const fs = require("fs");
const path = require("path");
const blog = require("../../data/blog.json");
const authors = require("../../data/authors.json");
const blogFilePath = path.join(__dirname, "../../data/blog.json");
const generateID = require("../utils/helpers.js").generateID;

class Blog {
	static getAllBlogs(req, res) {
		res.json(blog);
	}

	static createBlog(req, res) {
		// const newId = blog[blog.length - 1].id + 1;
		const newId = generateID(blog);
		const { title, author, content } = req.body;
		const newBlog = {
			id: newId,
			title: title,
			author: author,
			content: content,
		};
		blog.push(newBlog);

		fs.writeFile(blogFilePath, JSON.stringify(blog, null, 2), (err) => {
			if (err) {
				return res.status(500).json({ error: "Failed to save blog", details: err.message });
			}
			res.json({ message: "Blog created successfully!", createdBlog: newBlog });
		});

		console.log(req.body);
		console.log({ title: title, author: author, content: content });
	}

	static updateBlog(req, res) {
		const existingId = req.params.id;
		const { title, author, content } = req.body;
		const blogIndex = blog.findIndex((blog) => blog.id == existingId);

		if (blogIndex === -1) {
			return res.status(404).json({ error: "Blog not found" });
		}
		blog[blogIndex] = {
			id: parseInt(existingId),
			title: title,
			author: author,
			content: content,
		};

		fs.writeFile(blogFilePath, JSON.stringify(blog, null, 2), (err) => {
			if (err) {
				return res.status(500).json({ error: "Failed to update blog", details: err.message });
			}
			res.json({ message: "Blog updated successfully!", updated: blog[blogIndex] });
		});
	}

	static deleteBlog(req, res) {
		const existingId = req.params.id;
		const blogIndex = blog.findIndex((blog) => blog.id == existingId);
		if (blogIndex === -1) {
			return res.status(404).json({ error: "Blog not found" });
		}
		const deleted = blog.splice(blogIndex, 1);
		fs.writeFile(blogFilePath, JSON.stringify(blog, null, 2), (err) => {
			if (err) {
				return res.status(500).json({ error: "Failed to delete blog", details: err.message });
			}
			res.json({ message: "Blog deleted successfully!", deleted: deleted });
		});
	}
}

class Author {
	static getAllAuthors(req, res) {
		res.json(authors);
	}
}

module.exports = { Author, Blog }; // biar bisa di import di file lain
