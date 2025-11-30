function validateBlog(req, res, next) {
	const { title, author, content } = req.body;
	if (!title || !author || !content) {
		return res.status(400).json({
			status: "error",
			message: "Title, author, and content are required",
		});
	}
	next();
}
module.exports = validateBlog; // biar bisa di import di file lain
