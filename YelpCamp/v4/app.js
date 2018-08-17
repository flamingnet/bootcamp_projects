var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var seedDB = require("./seeds");




mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


seedDB();


app.get("/", function(req,res){
    res.render("landing");
});


//INDEX
app.get("/campgrounds", function(req,res){
    //get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log("error");
       } 
       else {
           res.render("campgrounds/index", {campgrounds:allCampgrounds});
       }
    });

});

//CREATE ROUTE
app.post("/campgrounds", function(req,res){
    //res.send("you hit the post route");
   //get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var newCampground = {name:name, image:image, description:desc};
   //Create new Campground and save to DB
   Campground.create(newCampground, function(err, newlyCreated){
       if(err){
           console.log(err);
       }
       else{
           res.redirect("/campgrounds");
       }
   });
});


//SHOW FORM TO CREATE NEW CAMPGROUNDS
app.get("/campgrounds/new", function(req,res){
    res.render("campgrounds/new");
});

// Show more info about one campground
app.get("/campgrounds/:id", function(req,res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else{
            console.log(foundCampground);
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
    
    //render show template with that information

});


app.get("/campgrounds/:id/comments/new", function(req,res){
    Campground.findById(req.params.id, function(err,campground){
        if(err){
            console.log(err);
        }
        else {
            res.render("comments/new", {campground: campground});
        }
    });
});


app.post("/campgrounds/:id/comments", function(req,res){
    //lookup campground using ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        }
        else{
            Comment.create(req.body.comment, function(err,comment){
                if(err){
                    console.log(err);
                }
                else{
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
          //  Comment.create({})
        }
    });
    //create new comment
    
    //connect new comment to campground
    
    //redirect to campground show page
    
    
    
    
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Server Started"); 
});