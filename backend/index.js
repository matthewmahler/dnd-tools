const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const cors = require("cors");

const app = express();

// Init middleware
// app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// DB Connection
// require("./src/database/connection");

// Routes
app.use("/api/scrape", require("./src/routes/api/scrape"));

// App config
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
