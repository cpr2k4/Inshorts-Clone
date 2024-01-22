const mongoose = require('mongoose');

async function Connection(URL) {
    try{
        await mongoose.connect(URL);
        console.log("Database connected successfully...")
    }
   catch(err){
    console.log("error while connecting to mongo db...",err);
   }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = Connection;