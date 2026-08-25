console.log("Server is Running");

const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");

// 1: Kirish Code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session Code

// 3: Views Code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing Code
app.get("/", function (req, res) {
  res.render("xarid");
});

app.post("/create-item", (req, res) => {
  res.json({ test: "success" });
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running good on port: ${PORT}`);
});
