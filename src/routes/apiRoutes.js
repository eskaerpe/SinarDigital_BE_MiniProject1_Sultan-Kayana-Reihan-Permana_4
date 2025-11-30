// TO ADD: Definisikan semua API endpoint di sini
// Contoh: router.get('/authors', ...)
const express = require("express");
const { Blog, Author } = require("../controllers/apiController.js");

const app = express();
app.use(express.json());

app.get("/blog", Blog.getAllBlogs);

app.post("/blog", Blog.createBlog);

app.put("/blog/:id", Blog.updateBlog);

app.delete("/blog/:id", Blog.deleteBlog);

// defining route for authors
app.get("/authors", Author.getAllAuthors);

module.exports = app;
