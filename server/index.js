const express = require("express");
const app = express();

const db = require("./db/db");
app.use(express.json());
const PORT = 5000;
var bodyParser = require('body-parser')

const adminRoute = require("./routes/adminRoute");
app.use("/api/admin/", adminRoute);


const path = require("path");


app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));