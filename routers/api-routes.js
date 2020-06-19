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
  console.log("api has been hit");
  res.json({ message: "hello from the api" });
});

router.post("/api/notes", (req, res) => {
let id = await readFileAsync("data.json");
id = JSON.parse(id);
countData.count++;

await writeFileAsync("data.json", JSON.stringify(id, null, 2));
res.send(id);
});

router.delete("/api/notes/:id", (req, res) => {
  console.log("api has been hit");
  res.json({ message: "this is a third example" });
});


module.exports = router;