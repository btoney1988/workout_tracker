const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");


const PORT = process.env.PORT || 3000;

let app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


htmlRoutes(app);
apiRoutes(app);



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"))
// });

// app.get("/exercise", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/exercise.html"))
// });

// app.get("/stats", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/stats.html"))
// });
