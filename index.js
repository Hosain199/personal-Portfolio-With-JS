// import some package
const path = require('path')
const DB = require('./helpers/DB')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const express = require('express');
const app = express() //app is my backend site


//import the conroller

const authController = require('./controllers/authController');


//middlewhere

//dotenv
const config = require('./config');
// console.log(process.env.PORT)


//bodyparser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


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
//  connect DB

DB.ConnectMongo();




const PORT = process.env.PORT;
//Listening a port 

// app.listen(3000)

app.listen(PORT, () =>
  console.log(`server is listening on port: ${PORT}`));
