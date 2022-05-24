const mongoose = require('mongoose');


/*  Create our Schema */ 

const ContactSchema = mongoose.Schema({
    name: String,
    age: Number,
    email:
    {
        type: String,
        required: true,
        unique: true 
    }
})

module.exports = mongoose.model('Contactee',ContactSchema)