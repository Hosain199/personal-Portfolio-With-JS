const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {                            //1st argument
        type: String,
        min: 2,
        max: 10,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        min: 10,
        max: 20,
        required: true
    },
},

    { timestamps: true }        //2nd argument

);

module.exports = mongoose.model("User", userSchema);