/*
//Thank you for coming by, hope this a good representation of not only
//my programming skills but also my ability to learn and progress FAST.
//                <--INSERT LINK TO PORTFOLIO HERE-->
//Your Friendly Neighborhood Engineer,
//
//James Cervantes
*/

//Express
const express = require("express");
const app = express();
//request
const request = require('request');
//dotenv
require('dotenv').config()
//KEY
const port = process.env.PORT
const OMDB = process.env.OMDB_API
app.set("view engine", "ejs");

app.get("/", (err, res) =>{
    //if(err) console.log(err);
    request(`${OMDB}&s=spiderman`, (error, response, body) => {
        if (error) console.log("ERROR: "+error);
        let movies = JSON.parse(body) 
        res.render("results", {movies:movies})
    })
})

app.get("/search", (req ,res)=>{
    var search = req.query.search
    request(`${OMDB}&s=${search}`, (error,response,body) =>{
        if (error) console.log("ERROR: "+error);
        let movies = JSON.parse(body)
        res.render("results", {movies:movies})
    })
})




// var bd 
// request(`${OMDB}&s=spiderman`,  (error, response, body) =>{
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   bd = JSON.parse(body);
//   console.log('body:', bd.Search[0]); // Print the HTML for the Google homepage.
// });

app.listen(port, (err,res)=>{
    if   (!err) console.log(`Running on ${port}`)
    else        return err;
})