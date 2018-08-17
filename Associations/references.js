var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo2");

var Post = require("./models/post");
var User = require("./models/user");




//find User


//find all posts for that user


/*User.findOne({email:"bob@gmail.com"}).populate("posts").exec(function(err,user){
    if(err){
        console.log(err);
    }
    else {
        console.log(user);
    }
});*/


Post.create({
   title: "Cooking burgers part 4",
   content: "Yummy yum part 4"
}, function(err, post){
    if(err){
        console.log(err);
    }
    else{
        User.findOne({email:"bob@gmail.com"}, function(err, foundUser){
           if(err){
               console.log(err);
           } 
           else{
               foundUser.posts.push(post);
               foundUser.save(function(err, data){
                   if(err){
                       console.log(err);
                   }
                   else{
                       console.log(data);
                   }
               });
           }
        });
    }
});


/*User.create({
    email:"bob@gmail.com",
    name: "Bobby B"
});*/