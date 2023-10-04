import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import HeaderNav from "../HeaderNav/HeaderNav";
import FindUs from "../Find us/FindUs";
import Qzone from "../Qzone/Qzone";
import LoginWithGoogle from "../LoginWithGoogle/LoginWithGoogle";

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
            <div className="grid md:grid-cols-2 lg:grid-cols-4">
                <div className="col-span-3">
                    <div className="bg-[#fff] p-3">
                        <img className="w-full mb-4" src={news.image_url} alt="" />
                        <p className="font-bold text-2xl mb-5">{news.title}</p>
                        <p>{news.details}</p>
                        <button className="btn bg-[#D72050] border-none text-white rounded-none mt-8">All news in this category</button>
                    </div>
                </div>
                <div className="col-span-1">
                    <LoginWithGoogle></LoginWithGoogle>
                    <FindUs></FindUs>
                    <Qzone></Qzone>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;