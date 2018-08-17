var express= require("express");
var router = express.Router();
var Campground = require("../models/campground");
var Comment = require("../models/comment");

//INDEX
router.get("/", function(req,res){
    //get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log("error");
       } 
       else {
           res.render("campgrounds/index", {campgrounds:allCampgrounds, currentUser: req.user});
       }
    });

});

//CREATE ROUTE
router.post("/", isLoggedIn, function(req,res){
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
router.get("/new", isLoggedIn, function(req,res){
    res.render("campgrounds/new");
});

// Show more info about one campground
router.get("/:id", function(req,res){
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


function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    else{
        res.redirect("/login");
    }
}

module.exports = router;