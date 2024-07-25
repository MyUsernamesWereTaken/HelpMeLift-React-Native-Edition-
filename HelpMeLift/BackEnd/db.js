var express = require("express");
var http = require("http");

var app = express();
var server = http.createServer(app);

app.get("/", function(request, response){
    res.send("Backend working");
});

app.get("/WorkoutVideos/", function(request, response){

});

server.listen(8081, function(){
    console.log("Server listening to port 8081");
});