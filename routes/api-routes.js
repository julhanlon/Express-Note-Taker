const express = require("express");
const router = express.Router();
const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

router.get("/api/notes", (req, res) => {
  let data = fs.readFileSync("./db/db.json", "utf8");
  data = JSON.parse(data);
  res.json(data);
});


router.post("/api/notes", (req, res) => {
  var data = fs.readFileSync("./db/db.json", "utf8");
    newNote = JSON.parse(data);
    const { title, text } = req.body;
    var id = newNote.length + 1;
    newNote.push({ title, text, id });


    fs.writeFileSync("./db/db.json", JSON.stringify(newNote, null, 2));
    res.send({ msg: "new note added" });
});




router.delete("/api/notes/:id", async (req, res) => {
  var noteId = req.params.id;
  var arr = JSON.parse( await readFileAsync("./db/db.json", "utf8"));
  arr.map((value, index) => {
    if (value.id == noteId) {
      arr.splice(index, 1);
    }
  });

 await writeFileAsync("./db/db.json", JSON.stringify(arr, null, 2));
 res.json({message:"deleted todo"});
});




module.exports = router;