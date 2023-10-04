import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import HeaderNav from "../HeaderNav/HeaderNav";

const NewsDetails = () => {
    const { id } = useParams();
    const allData = useLoaderData();
    const news = allData.find(data => data._id === id)
    console.log(news)
    console.log(id)
    return (
        <div>
            <Header></Header>
            <HeaderNav></HeaderNav>
        </div>
    );
};

export default NewsDetails;