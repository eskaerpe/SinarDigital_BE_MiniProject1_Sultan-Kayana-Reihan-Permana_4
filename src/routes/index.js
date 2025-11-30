const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.json({
		message: "Welcome to the Blog API",
		routes: {
			getBlogs: "/api/blog [GET]",
			createBlog: "/api/blog [POST]",
			updateBlog: "/api/blog/:id [PUT]",
			deleteBlog: "/api/blog/:id [DELETE]",
			getAuthors: "/api/authors [GET]",
		},
	});
});

module.exports = router; // biar bisa di import di file lain
