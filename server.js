const http = require('http');
var express = require('express');
var app = express();
const port = process.env.PORT || 1337;
console.log("Starting on port " + port);

app.listen(port);
app.use(express.static("public"));