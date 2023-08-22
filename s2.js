var path = require('path');
var express = require('express');
var app = express();

//var dir = path.join(__dirname, 'public');
var dir = __dirname;
app.use(express.static(dir));

app.listen(6667, function () {
    console.log('Listening on http://localhost:6667/');
});
