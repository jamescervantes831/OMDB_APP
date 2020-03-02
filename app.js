/*
//I have to make mental notes to myself inorder to stay on track with the code
//SO most commenting I hope informs you as much as it informs me about 
//"What the hell am I looking at"
//
//Your Friendly Neighborhood Engineer,
//
//James Cervantes
*/

//Express
const express = require("express");
const app = express();
//request
const request = require("request");
//

app.set("view engine", "ejs");


app.get("/", (err, res) =>{
    res.render("results");
})

app.listen(5000, (err,res)=>{
    if   (!err) console.log("Running on 5000", res)
    else        console.log(err);
})