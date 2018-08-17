//Middleware and Backend Initialization
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/hubble");

//APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


//Database Configuration
var custSchema = new mongoose.Schema({
    company: String,
    bio: String,
    cimg:{type:String, default: "http://visuallightbox.com/images/demo/catalyst/index_files/vlb_images1/1.jpg"},
    industry: String,
    founder1: String,
    founder1title: String,
    f1img:{type:String, default: "http://visuallightbox.com/images/demo/catalyst/index_files/vlb_images1/1.jpg"},
    founder2: String,
    founder2title: String,
    f2img:{type:String, default: "http://visuallightbox.com/images/demo/catalyst/index_files/vlb_images1/1.jpg"},
    founder3: String,
    founder3title: String,
    f3img:{type:String, default: "http://visuallightbox.com/images/demo/catalyst/index_files/vlb_images1/1.jpg"},
    milestone1Title:String,
    milestone1Date:String,
    milestone1Desc:String,
    milestone2Title:String,
    milestone2Date:String,
    milestone2Desc:String,
    milestone3Title:String,
    milestone3Date:String,
    milestone3Desc:String,
});

var Company = mongoose.model("Company", custSchema);

//create test data
/*var testData = new Company(
    {
        company: "Hubble4",
        bio: "Hubble is a test company that builds this website",
        industry: "News",
        founder1: "JT Fant",
        founder1title: "Founder",
        founder2: "Justin Barbaro",
        founder2title: "Founder",
        founder3: "Chet Murthy",
        founder3title: "Founder",
        milestone1Title:"Found Company",
        milestone1Date:"3/10/2018",
        milestone1Desc:"Founded in the Poconos and discussed business plan, etc",
        milestone2Title:"Get initial prototype out",
        milestone2Date:"7/1/2018",
        milestone2Desc:"Build prototype website with RESTful routing",
        milestone3Title:"User and Company Validation",
        milestone3Date:"12/29/2018",
        milestone3Desc:"Get Feedback on product and change as necessary",
    }
);

Company.create(testData, function(err,newCompany){
    if(err){
        console.log(err);
    }
    else{
        console.log("DB Upload Successful");
    }
});*/
    


    




//RESTful Routes

//Homepage
app.get("/", function(req,res){
    res.render("landing");
});


//Company List
app.get("/companies", function(req,res){
    //get all companies from DB
    Company.find({}, function(err, allCompany){
       if(err){
           console.log(err);
       } 
       else {
           res.render("companyList", {companies : allCompany});
       }
    });
});


app.post("/companies", function(req,res){
    var company = req.body.company;
    var bio = req.body.bio;
    var cimg = req.body.cimg;
    var industry = req.body.industry;
    var founder1 = req.body.founder1;
    var founder1title = req.body.founder1title;
    var f1img = req.body.f1img;
    var founder2 = req.body.founder2;
    var founder2title = req.body.founder2title;
    var f2img = req.body.f2img;
    var founder3 = req.body.founder3;
    var founder3title = req.body.founder3title;
    var f3img = req.body.f3img;
    var milestone1Title = req.body.milestone1Title;
    var milestone1Date = req.body.milestone1Date;
    var milestone1Desc = req.body.milestone1Desc;
    var milestone2Title = req.body.milestone2Title;
    var milestone2Date = req.body.milestone2Date;
    var milestone2Desc = req.body.milestone2Desc;
    var milestone3Title = req.body.milestone3Title;
    var milestone3Date = req.body.milestone3Date;
    var milestone3Desc = req.body.milestone3Desc;
    
    var NewComp = {
        company: company,
        bio: bio,
        cimg: cimg,
        industry: industry,
        founder1: founder1,
        founder1title: founder1title,
        f1img: f1img,
        founder2: founder2,
        founder2title: founder2title,
        f2img: f2img,
        founder3: founder3,
        founder3title: founder3title,
        f3img: f3img,
        milestone1Title: milestone1Title,
        milestone1Date: milestone1Date,
        milestone1Desc: milestone1Desc,
        milestone2Title: milestone2Title,
        milestone2Date: milestone2Date,
        milestone2Desc: milestone2Desc,
        milestone3Title: milestone3Title,
        milestone3Date: milestone3Date,
        milestone3Desc: milestone3Desc
    };
    
    Company.create(NewComp, function(err,NewlyComp){
        if(err){
            console.log(err);
        }
        else {
            res.redirect("/companies");
        }
    });
});

//Create New Company
app.get("/companies/new", function(req,res){
    res.render("compAdder");
});






//View Company Bio
app.get("/companies/:id", function(req,res){
    Company.findById(req.params.id, function(err,foundCompany){
       if(err){
           console.log(err);
       } 
       else{
           res.render("compBio", {company : foundCompany});
       }
    });
});








//Server Listener
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Hubble Server Started"); 
});