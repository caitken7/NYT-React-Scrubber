const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact", {
	useMongoClient: true
});

/* TODO move db stuff out*/
const db = require("./models");
const { Article } = db;
/* END TODO move db stuff out*/

/* routes */
app.post("/api/saved", (req, res) => {
	// get the posted object
	var article = req.body;

	// call Article.create

	Article.create(article)
		.then(() => {
			// then return some json (success | error)
			res.json(article);
		})
		.catch(err => {
			res.json(err);
		});
});

/* routes */

// Article.create({
// 	title: "Manual insert",
// 	url: "http://example.org/insert"
// })
// 	.then(x => console.log(x))
// 	.catch(x => console.error(x));

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
	console.log(`🌎 ==> Server now on port ${PORT}!`);
});
