const mongoose = require('mongoose');

const newsSchema  =  mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
        // unique:true // Ensures that each entry must be unique
    },
    timestamp:{
        type:String,
        required:true,
    },
    link:{
        type:String,
        required:true,
    },
    publisher:{
        type:String,
        required:true,
    }
})

const Bulletin = mongoose.model("Bulletin",newsSchema);

module.exports = Bulletin;