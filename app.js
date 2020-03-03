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
//dotenv
require('dotenv').config()
//KEY
const port = process.env.PORT
const OMDB = process.env.OMDB_API
app.set("view engine", "ejs");


app.get("/", (err, res) =>{
    request(`${OMDB}&t=spiderman`, (error, response, body) => {
        let movies = body
        res.render("results", {movies:movies})
    })
})

app.listen(port, (err,res)=>{
    if   (!err) console.log(`Running on ${port}`)
    else        return err;
})