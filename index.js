// import some package
const path = require('path')
const ejs = require('ejs')
const express = require('express');
const app = express() //app is my backend site


//import the conroller

const authController = require('./controllers/authController');


//middlewhere

//templating engine
app.set('view engine', 'ejs')



app.get("/", (req, res) => {
    //res.sendFile('D:/Programming language/JS/views/Home.html')
    //res.sendFile(__dirname + "/views/Home.html")
    //res.sendFile(path.join(__dirname, "views", "Home.html"))

    //res.render('demo', {pageTitle: "Home", text: "Hosain Mahmud"});   //object pass

    res.render("pages/Home", {pageTitle: "Home", text: "From Home"})


})

app.get("/about", (req, res) => {
    //res.sendFile(path.join(__dirname, "views", "About.html"))
    res.render("pages/About", {pageTitle: "About", text: "From about"})


})

app.get("/contact", (req, res) => {
   // res.sendFile(path.join(__dirname, "views", "Contact.html"))
   res.render("pages/Contact", {pageTitle: "Contact", text: "From contact"})


})

app.use('/', authController);

app.get("*", (req, res) => { //'*' use for unused page
    //res.sendFile(path.join(__dirname, "views", "404.html"))
    res.render("pages/404", {pageTitle: "Not Found", text: "Invalid Page search"})


})
//Listening a port 
app.listen(3000)