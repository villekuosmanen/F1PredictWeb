var express = require('express');
const path = require('path');
var app = express();

const port = process.env.PORT || 1337;
console.log("Starting on port " + port);

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port);