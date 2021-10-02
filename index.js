const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");

const app = express();

// init middleware
app.use(logger);
// bodyparser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// set static folder
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/members", require("./routes/api/members"));
app.use;
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
