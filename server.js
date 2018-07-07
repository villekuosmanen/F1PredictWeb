const http = require('http');
var express = require('express');
var app = express();
const port = process.env.PORT || 1337;

app.listen(port);
app.use(express.static('public'));
//app.get("/", serveStatic);  //Default one

//function serveStatic(req, res) {
    //res.sendFile("predictions.json", { root: '.' });
//}