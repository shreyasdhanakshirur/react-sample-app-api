const mongoose = require("mongoose");
const express = require("express");
const app = express();
require('dotenv').config();
const user = process.env.MONGOOSE_HOST;
const pwd = process.env.MONGOOSE_PWD

mongoose.connect(
    `mongodb+srv://${user}:${pwd}@cluster0.v6jp0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
        dbName : 'test_database',
        user : user,
        pass : pwd,
        useNewUrlParser : true,
        useUnifiedTopology : true
    }
    
    )
    .then(()=>{
        console.log("Mongodb connected")
    })
    .catch((ex)=>{
    console.log("Connection Failed"+JSON.stringify(ex))
    })

