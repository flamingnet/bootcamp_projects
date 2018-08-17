var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

    var campgrounds = [
            {name: "Salmon Creek", image: "https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_auto,h_452,q_75,w_982/http://res.cloudinary.com/simpleview/image/upload/v1469218578/clients/lanecounty/constitution_grove_campground_by_natalie_inouye_417476ef-05c3-464d-99bd-032bb0ee0bd5.png"},
            {name: "Granite Hill", image: "https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_auto,h_452,q_75,w_982/http://res.cloudinary.com/simpleview/image/upload/v1469218578/clients/lanecounty/constitution_grove_campground_by_natalie_inouye_417476ef-05c3-464d-99bd-032bb0ee0bd5.png"},
            {name: "Mountain Goat Hill", image: "https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_auto,h_452,q_75,w_982/http://res.cloudinary.com/simpleview/image/upload/v1469218578/clients/lanecounty/constitution_grove_campground_by_natalie_inouye_417476ef-05c3-464d-99bd-032bb0ee0bd5.png"},
            {name: "Salmon Creek", image: "https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_auto,h_452,q_75,w_982/http://res.cloudinary.com/simpleview/image/upload/v1469218578/clients/lanecounty/constitution_grove_campground_by_natalie_inouye_417476ef-05c3-464d-99bd-032bb0ee0bd5.png"},
            {name: "Granite Hill", image: "https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_auto,h_452,q_75,w_982/http://res.cloudinary.com/simpleview/image/upload/v1469218578/clients/lanecounty/constitution_grove_campground_by_natalie_inouye_417476ef-05c3-464d-99bd-032bb0ee0bd5.png"},
            {name: "Mountain Goat Hill", image: "https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_auto,h_452,q_75,w_982/http://res.cloudinary.com/simpleview/image/upload/v1469218578/clients/lanecounty/constitution_grove_campground_by_natalie_inouye_417476ef-05c3-464d-99bd-032bb0ee0bd5.png"},
            {name: "Salmon Creek", image: "https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_auto,h_452,q_75,w_982/http://res.cloudinary.com/simpleview/image/upload/v1469218578/clients/lanecounty/constitution_grove_campground_by_natalie_inouye_417476ef-05c3-464d-99bd-032bb0ee0bd5.png"},
            {name: "Granite Hill", image: "https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_auto,h_452,q_75,w_982/http://res.cloudinary.com/simpleview/image/upload/v1469218578/clients/lanecounty/constitution_grove_campground_by_natalie_inouye_417476ef-05c3-464d-99bd-032bb0ee0bd5.png"},
            {name: "Mountain Goat Hill", image: "https://res.cloudinary.com/simpleview/image/fetch/c_fill,f_auto,h_452,q_75,w_982/http://res.cloudinary.com/simpleview/image/upload/v1469218578/clients/lanecounty/constitution_grove_campground_by_natalie_inouye_417476ef-05c3-464d-99bd-032bb0ee0bd5.png"},
        ];


app.get("/", function(req,res){
    res.render("landing");
});



app.get("/campgrounds", function(req,res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req,res){
    //res.send("you hit the post route");
   //get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name:name, image:image};
   campgrounds.push(newCampground);
   //redirect back to campgrounds page
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Server Started"); 
});