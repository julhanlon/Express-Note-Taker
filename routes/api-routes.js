const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require('uuid');
var id = uuidv4();

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

router.get("/api/notes", (req, res) => {
  let data = fs.readFileSync("./db/db.json", "utf8");
  data = JSON.parse(data);
  res.json(data);
});




router.post("/api/notes", async (req, res) => {
  const data = JSON.parse( await readFileAsync("./db/db.json", "utf8"));
  const todo = req.body;
  todo.id = data.length + 1;
  data.push(todo);


await writeFileAsync("db.json", JSON.stringify(data, null, 2));
  res.json(data);
});




router.delete("/api/notes/:id", async (req, res) => {
  var todoId = req.params.id;
  var arr = JSON.parse( await readFileAsync("./db/db.json", "utf8"));

arr = arr.filter(item => item !== todoId)

console.log(arr)

 await writeFileAsync("./db/db.json", JSON.stringify(arr, null, 2));
 res.json({message:"deleted todo"});
});




module.exports = router;