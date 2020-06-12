const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const util = require("util");
const uuid = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

router.get("/api/notes", (req, res) => {
  console.log("api has been hit");
  res.json({ message: "hello from the api" });
});

router.post("/api/notes", (req, res) => {
  console.log("api has been hit");
  res.json({ message: "this is another button" });
});

router.delete("/api/notes/:id", (req, res) => {
  console.log("api has been hit");
  res.json({ message: "this is a third example" });
});
// endpoint /api/count
router.get("/api/count", async (req, res) => {
let countData = await readFileAsync("data.json");
countData = JSON.parse(countData);
countData.count++;

await writeFileAsync("data.json", JSON.stringify(countData, null, 2));
res.send(countData);
  // fs.readFile("data.json", "utf8", (err, data) => {
  //   if (err) throw err;
  //   const currentCount - JSON.parse(data);
  //   currentCount.count ++;

  //   fs.writeFile("data.json", JSON.stringify(currentCount, null, 2), (err => {
  //     if (err) throw err;
  //     res.send(currentCount);
  //   }))

  // })
 
})

module.exports = router;