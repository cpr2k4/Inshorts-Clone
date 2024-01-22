import { useEffect ,useState} from "react";
import getNews from '../Service/api'
import Article from "./Article";
function Articles(){

    useEffect(()=>{
        dailyNews();
    },[]);
    
    let [news,setNews] = useState([]);

    const dailyNews = async()=>{
        let response = await getNews();
        setNews(response.data);
    }
    return(
        <>
            {
               news.length>0 && news.map((data)=>(
               <Article key={data._id} data={data}/>
               ))
            }
        </>
    )
}

export default Articles;