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
req.body = {
  title: "",
  text: "",
}
var todoId = uuid.v4();
req.body.todoTd =" " ;

writeFileAsync("data.json", JSON.stringify(id, null, 2));
res.send(id);
});

router.delete("/api/notes/:id", (req, res) => {
  var todoId = req.params.id;
  var arr = JSON.parse(readFileAsync("./db/db.json", "utf8"));

arr = arr.filter(item => item !== todoId)

console.log(arr)

}).then(() => {
  writeFileAsync("./db/db.json", JSON.stringify(arr, null, 2));
})


module.exports = router;