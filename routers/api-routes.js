const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const util = require("util");
// const { v4: uuidv4 } = require('uuid');
// var id = uuidv4();

console.log(id);
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

router.get("/api/notes", (req, res) => {
  console.log("api has been hit");
  res.json({ message: "hello from the api" });
});

router.post("/api/notes", (req, res) => {
req.body = {
  title: "",
  text: "",
}
var id = uuid.v4();
req.body.id =" " ;

writeFileAsync("data.json", JSON.stringify(id, null, 2));
res.send(id);
});

router.delete("/api/notes/:id", (req, res) => {
  var id = req.params.id;
  var arr = JSON.parse(await readFileAsync("./db/todos.json", "utf8"));

arr = arr.filter(item => item !== id)

console.log(arr)
});


module.exports = router;