console.log("Server is Running");

const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish Code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session Code

// 3: Views Code
app.set("views", "views");
app.set("views engine", "ejs");

// 4: Routing Code
app.get("/hello", function (req, res) {
  res.end("<h1>Hello World</h1>");
});
app.get("/gift", function (req, res) {
  res.end("<h1>You're at the Gifts Section</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running good on port: ${PORT}`);
});
