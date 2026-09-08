console.log("Server is Running");

const express = require("express");
const res = require("express/lib/response");
const app = express();
const fs = require("fs");

// MongoDB Connection
const db = require("./server").db("reja");
const mongodb = require("mongodb");

fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  }
  let user = JSON.parse(data);
});

// 1: Kirish Code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session Code

// 3: Views Code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing Code
app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

app.post("/create-item", (req, res) => {
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    {
      _id: new mongodb.ObjectId(id),
    },
    function (err, data) {
      res.end("Success");
    },
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  db.collection("plans").findOneAndUpdate(
    {
      _id: new mongodb.ObjectId(data.id),
    },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    },
  );
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany({}, function (err, result) {
      res.json({ state: "all items deleted" });
    });
  }
});

app.get("/", function (req, res) {
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log("Error", err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
