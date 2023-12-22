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



app.get('/', function (req, res) {
    //res.sendFile('D:/Programming language/JS/views/Home.html')
    //res.sendFile(__dirname + "/views/Home.html")
    //res.sendFile(path.join(__dirname, "views", "Home.html"))

    res.render('demo')


})

app.get('/About', function (req, res) {
    res.sendFile(path.join(__dirname, "views", "About.html"))
})

app.get('/Contact', function (req, res) {
    res.sendFile(path.join(__dirname, "views", "Contact.html"))
})

app.use('/', authController);

app.get('*', function (req, res) {  //'*' use for unused page
    res.sendFile(path.join(__dirname, "views", "404.html"))
})
//Listening a port 
app.listen(3000)