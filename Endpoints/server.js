let express = require("express");
let morgan = require("morgan");
let bodyParser = require("body-parser");

let app = express();
let jsonParser = bodyParser.json();

app.use(express.stativ('public'));
app.use(morgan("dev"));

let students = [];

app.get("/api/postStudent", (req, res, next) => {

    return res.status(200).json(students);
});