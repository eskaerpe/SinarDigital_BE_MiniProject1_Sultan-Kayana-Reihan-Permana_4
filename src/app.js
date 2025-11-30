// TO ADD: Inisialisasi aplikasi utama
// Import express, middleware, routes, dan konfigurasi
// Setup middleware dan routes
// importing necessary modules
const express = require("express");
const indexRoutes = require("./routes/index.js");
const apiRoutes = require("./routes/apiRoutes.js");

const app = express();
app.use(express.json());

// ROUTES

app.use("/", indexRoutes);
app.use("/api", apiRoutes);

module.exports = app;
