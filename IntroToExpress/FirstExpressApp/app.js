var express = require("express");

var app = express();


// "/" => "hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" => "goodbye!"
app.get("/bye", function(req, res){
    res.send("goodbye!!!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
    res.send("MEOW");
});



app.get("*", function(req, res){
    res.send("YOU ARE A STAR");
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});