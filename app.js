const express = require("express")
const bodyParser = require("body-parser")

const app =express();
app.set('view engine','ejs');

app.use(bodyParser.urlencoded(({extended:true})));
app.use(express.static("public"));

var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];

app.get("/",function(req,res){

    var today = new Date();
    var currentDate = today.getDay();
    var options ={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    var day = today.toLocaleDateString("en-uk",options);
    res.render("list", { listTitle: day, newListItems: items })
})

app.get("/work", function (req, res) {
res.render("list",{listTitle:"Work List",newListItems:workItems})
});

app.post("/",function(req,res){
  var item =  req.body.newItem;
  items.push(item);
   res.redirect("/");
})

app.post("/work",function(req,res){
    let item = req.body.item;
    workItems.push(item);
    res.redirect("/work")
})

app.listen(3000,function(){
    console.log("Server started on port 3000")
})