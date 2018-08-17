var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");



var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//var george = new Cat({
  // name:"Mrs. Norris",
   //age:110,
   //temperament:"Evil"
//});

//george.save(function(err, cat){
 //   if(err){
   //     console.log("ERROR!");
    //}
    //else {
      //  console.log("CAT SAVED");
        //console.log(cat);
  //  }
//});

//add a new cat to the database

Cat.create({
   name:"Chetums",
   age:28,
   temperament:"Nice"
}, function(err,cat){
    if(err){
        console.log(err);
    }
    else{
        console.log(cat);
    }
});

//retreive all cats from the database

Cat.find({},function(err, cats){
   if(err){
       console.log(err);
       console.log("error");
   } 
   else {
       console.log("All the cats");
       console.log(cats);
   }
});