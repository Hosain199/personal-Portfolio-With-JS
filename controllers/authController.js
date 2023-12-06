const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/Login', function (req, res) {
    res.sendFile(path.join(__dirname, "..", "views", "Login.html"))
})

router.get('/Register', function (req, res) {
    res.sendFile(path.join(__dirname, "..", "views", "Register.html"))
})


module.exports = router;