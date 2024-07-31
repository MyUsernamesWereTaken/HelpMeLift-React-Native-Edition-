var express = require("express");
var http = require("http");
var joi = require("joi");
const { title } = require("process");

var app = express();
// var server = http.createServer(app);

var customers = [
    {title: "George", id: 1},
    {title: "Josh", id: 2},
    {title: "Tyler", id: 3},
    {title: "Alice", id: 4},
    {title: "Candice", id:5}
];

app.get("/", (request, response) => {
    response.send(customers);
});

app.get("/:id", (request, response) => {
    const customer = customers.find(c => c.id === parseInt(request.params.id));

    if (!customer){
        response.status(404).send("<h2> Error! Customer Not Found </h2>")
    }

    response.send(customer);
})

app.get("/WorkoutVideos/", function(request, response){

});

app.listen(8081, function(){
    console.log("Server listening to port 8081");
});