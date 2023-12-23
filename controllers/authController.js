const {Validator} = require('../helpers/Validator')
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
  res.render("pages/Login", { pageTitle: "Login Page", text: "From Login Page", errors: false, old: false})

})

//submit login form data
router.post("/login", (req, res) => {
  const errors = Validator.LoginValidator(req.body)
  
  const errors_count = Validator.ErrorCount(errors)
  //res.send(errors_count)
  //res.send(req.body)
  //console.log(req.body.email, req.body.password)
  if(errors_count > 0){

    res.render("pages/Login", {pageTitle: "Login", text: "From Home", errors, old: req.body})
    //errors are there
    res.send(errors)
  }
  else{
    res.render("pages/Home", {pageTitle: "Home", text: "From Home"})
  }

})

//data validation

router.get("/register", (req, res) => {

  res.render("pages/Register", { pageTitle: "Register Page", text: "From Register Page" })


})

router.post("/register", (req, res) => {

  
  //res.send(req.body)
  const errors = Validator.RegistrationValidator(req.body)
  const errors_count = Validator.ErrorCount(errors)
  // console.log(errors)
  //res.send(errors)
  if(errors_count>0){
    res.render("pages/Register", {pageTitle: "Register", text: "From register", errors, old: req.body})
  }
  else{
     res.render("pages/Home", {pageTitle:"Home", text: "From Home page" })
  }

})




module.exports = router;

