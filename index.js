const express = require("express");
const path = require("path");
var cors = require("cors");
const app = express();
var bodyParser = require("body-parser");
const Todos = require("./database/todos.js");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Serve only the static files form the dist directory

// Crud Todos //
app.get("/api/Todos", (req, res) => {
  Todos.find({}, function (error, result) {
    if (error) console.log("this is error ====>", error);
    res.send(result);
  }); 
});
app.post("/api/Todos", (req, res) => {
  const newM = new Todos(req.body);
  newM.save((err, result) => {
    res.send({ body: "ok" });
  });
});
app.put("/api/Todos/:id", (req, res) => {
  Todos.updateOne({ _id: req.params.id }, req.body, function (error, result) {
    if (error) console.log("this is error ====>", error);
    res.send({ result: "done" });
  });
});
app.delete("/api/Todos/:id", (req, res) => {
  Todos.deleteOne({ _id: req.params.id }, function (error, result) {
    if (error) console.log("this is error ====>", error);
    res.send(result);
  });
});
// end Todos crud //

// end orders crud //
app.listen(process.env.PORT || 3000, () => {
  console.log("server is running on http://localhost:3000");
});
