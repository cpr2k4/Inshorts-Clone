const mongoose = require('mongoose');
const Bulletin = require('./models/News.js')
const data = require('./constants/data.js');
require('dotenv').config();

Connection().catch(err => console.log(err));

async function Connection() {
    const URL = process.env.DB_URL;
    try{
        await mongoose.connect(URL);
        console.log("Database connected successfully...")
    }
   catch(err){
    console.log("error while connecting to mongo db...",err);
   }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let initData= async()=>{
    try{
        // await Bulletin.deleteMany({});
        // await Bulletin.insertMany(data);
        console.log("Data inserted...");
        mongoose.connection.close();
    }
    catch(err){
        console.log(err);
    }
}

//insert initial data into db
initData();