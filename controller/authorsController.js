const fs = require("fs");
const path = require("path");
const authors = require("../data/authors.json");
const authorsFilePath = path.join(__dirname, "../data/authors.json");

class Author {
	static getAllAuthors(req, res) {
		res.json(authors);
	}
}

module.exports = Author;
