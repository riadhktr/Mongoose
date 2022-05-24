const express = require('express');
const ConnectedDb = require('./config/ConnectDb');
const ContactRouter = require('./routes/contact');

const dotenv = require('dotenv').config();

const app = express();
// declaration of the server Port 
const PORT= process.env.PORT;

app.use(express.json());
app.use('/api/user',ContactRouter)

// connect to the Database
ConnectedDb()





// start the server at the specific PORT
app.listen(PORT,(err)=>{
    (err)? console.log(err): console.log(`connected succefully to the port:${PORT}`);
})