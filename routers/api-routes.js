const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require('uuid');
var id = uuidv4();

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

router.get("/api/notes", (req, res) => {
 var data = JSON.parse(readFileAsync(".db/db.json", "utf8"));
 res.json(data);
});




router.post("/api/notes", (req, res) => {
  const data = JSON.parse(readFileAsync("./db/todos.json", "utf8"));
  const todo = req.body;
req.body = {
  title: "",
  text: "",
}
var id = uuid.v4();
req.body.id = id ;
data.push(todo);

}).then((res) => {
  writeFileAsync("data.json", JSON.stringify(data, null, 2));
  res.send(data);
});




router.delete("/api/notes/:id", (req, res) => {
  var todoId = req.params.id;
  var arr = JSON.parse(readFileAsync("./db/db.json", "utf8"));

arr = arr.filter(item => item !== todoId)

console.log(arr)

}).then(() => {
  writeFileAsync("./db/db.json", JSON.stringify(arr, null, 2));
});




module.exports = router;