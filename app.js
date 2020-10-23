const express = require("express")
const bodyParser = require("body-parser")

const app =express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded(({extended:true})));
var items = ["Buy Food","Cook Food","Eat Food"];

app.get("/",function(req,res){

    var today = new Date();
    var currentDate = today.getDay();
    var options ={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    var day = today.toLocaleDateString("en-uk",options);
    res.render("list", { KindOfDay: day, newListItems: items })
})

app.post("/",function(req,res){
  var item =  req.body.newItem;
  items.push(item);
   res.redirect("/");
})

app.listen(3000,function(){
    console.log("Server started on port 3000")
})