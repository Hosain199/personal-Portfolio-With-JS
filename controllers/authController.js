const {validator} = require('../helpers/Validator')
const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../models/user')


// router.get('/Login', function (req, res) {
//     res.sendFile(path.join(__dirname, "..", "views", "Login.html"))
// })

// router.get('/Register', function (req, res) {
//     res.sendFile(path.join(__dirname, "..", "views", "Register.html"))
//}

router.get("/login", (req, res) => {

  console.log("LOGIN OK")

  res.render("pages/Login", { pageTitle: "Login Page", text: "From Login Page" })

})

router.post("/login", (req, res) => {

  console.log(req.body.email, req.body.password)

})

//data validation

router.get("/register", (req, res) => {

  res.render("pages/Register", { pageTitle: "Register Page", text: "From Register Page" })



})

module.exports = router;

