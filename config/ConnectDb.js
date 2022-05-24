const mongoose = require('mongoose');
//import dotenv module
const dotenv = require('dotenv').config();
//import the URI from .env
const URI = process.env.MONGODB_URI;

const ConnectedDb = async()=>{
    try{
      // connect to the Database
      await  mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true })
      console.log("connected to the database")
    } catch (err) {
      console.log(err);
    }
}

module.exports = ConnectedDb;