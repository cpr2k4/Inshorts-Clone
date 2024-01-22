const Bulletin = require('../models/News');

const getNews = async(req,res)=>{
    try{
        let news = await Bulletin.find({});
        res.status(200).send(news);
    }
    catch(err){
        res.send(500).send({message:error.message});
        console.log("Error in getting news: ", err);
    }
}

module.exports = {getNews};