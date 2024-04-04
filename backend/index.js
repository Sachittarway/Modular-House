const express = require("express");
const cors = require("cors");
const { db } = require("./db/db");
const vendorRouter = require("./routes/vendorRoutes");
const blogRouter = require("./routes/blogRoutes");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

//middlewares

app.use(express.json());
app.use(cors());

app.use("/vendors", vendorRouter);
app.use("/blogs", blogRouter);
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });
};

server();
