import axios from "axios";

let getNews = async()=>{
    const url = "http://localhost:8080";
    try{
        return await axios.get(`${url}/news`);
    }
    catch(err){
        console.log("error while calling api...",err);
    } 
}

export default getNews;