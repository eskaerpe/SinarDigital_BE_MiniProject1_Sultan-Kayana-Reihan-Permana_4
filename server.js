// TO MOVE: server.js harus berada di root sesuai struktur folder yang direkomendasikan
// initializing express app
const app = require("./src/app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
