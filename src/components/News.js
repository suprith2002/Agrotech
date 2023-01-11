import React,{useState,useEffect} from 'react';
import NewsItem from './NewsItem';

const News =() => {
    const [articles, setArticles] = useState([])
    const [totalResults, setTotalResults] = useState(0)   
    const apiKey="2d4818909b984e08b602524ea1094e53"
   const updateNews=async()=>
    {const url=`https://newsapi.org/v2/everything?q=agriculture&apiKey=${apiKey}&pageSize=10`
    let data = await fetch(url);
        
        let parsedData = await data.json()
  
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)}

        useEffect(() => {
            updateNews(); 
        }, [])
    return (
    <div>  <div className="container">
                         
    <div className="row">
        {articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
        })}
    </div>
    </div> </div>
  )
}

export default News