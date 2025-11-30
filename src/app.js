const express = require("express");
const indexRoutes = require("./routes/index.js");
const apiRoutes = require("./routes/apiRoutes.js");

// middleware
const errorHandler = require("./middlewares/errorHandler.js");
const validator = require("./middlewares/validator.js");

const app = express();
app.use(express.json());

// ROUTES

app.use("/", indexRoutes);
app.use("/api", apiRoutes);

// use ERROR HANDLER
app.use(errorHandler);

module.exports = app; // biar bisa di import di file lain
