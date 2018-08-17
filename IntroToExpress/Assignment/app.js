var express = require('express');

var app = express();


app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});


app.get("/speak/:animal", function(req, res){
    if(req.params.animal === "pig")
    {
        res.send("The pig says 'oink'");
    }
    if(req.params.animal === "cow")
    {
        res.send("The cow says 'moo'");
    }
    if(req.params.animal === "dog")
    {
        res.send("The dog says 'woof'");
    }
    
});


app.get("/repeat/:word/:times", function(req, res){
    var numb = Number(req.params.times);
    var word = req.params.word;
    var returnz = "";
    console.log(typeof numb);
    if (numb === 1) {
        res.send(word);
    }
    else {
        for (var i = 0; i < numb; i++)
        {
            returnz = returnz + word + " ";
        }
        res.send(returnz);
    }
});




app.get("*", function(req, res){
    res.send("Sorry, page not found");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server has started");
});