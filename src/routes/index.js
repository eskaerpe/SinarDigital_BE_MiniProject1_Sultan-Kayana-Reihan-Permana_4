// TO ADD: Inisialisasi route utama aplikasi
// Import dan gunakan semua route dari apiRoutes.js
const express = require("express");
const router = express.Router();
const apiRoutes = require("./apiRoutes.js");

// router.use("/api", apiRoutes);
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

module.exports = router;
