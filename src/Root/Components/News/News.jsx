import { useEffect, useState } from "react";
import SingleNews from "../SingleNews/SingleNews";

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/public/data/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    console.log(news);
    return (
        <div>
            <h1 className="text-xl font-semibold">Dragon News Home</h1>
            {
                news?.map(singleNews => <SingleNews key={singleNews._id} singleNews={singleNews}></SingleNews>)
            }
        </div>
    );
};

export default News;