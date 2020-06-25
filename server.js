const express = require("express");
const app = express();
const PORT = 3000;

//Sets up server for incoming and outgoing datatypes(string, array, json)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public/"));

//Sets up client side routes responsible for serving html
const clientRoutes = require("./routes/client-routes");
app.use("/", clientRoutes);

//Sets up api routers for sending data to the client
const apiRoutes = require("./routes/api-routes");
app.use("/", apiRoutes);

// const dataRoutes = require("./routes/data-routes");
// app.use(dataRoutes);

//Runs server
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));