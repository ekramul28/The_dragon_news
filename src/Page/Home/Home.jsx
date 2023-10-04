import { useLoaderData } from "react-router-dom";
import HeaderNav from "../../Root/Components/HeaderNav/HeaderNav";
import LatestHighLIghts from "../../Root/Components/LatestHighLIghts/LatestHighLIghts";
import AllCategory from "../../Root/Components/AllCaterogy/AllCaterogy";
import News from "../../Root/Components/News/News";
import Header from "../../Root/Components/Header/Header";
import LoginWithGoogle from "../../Root/Components/LoginWithGoogle/LoginWithGoogle";
const Home = () => {
    const data = useLoaderData();
    return (
        <div >
            <Header></Header>
            <LatestHighLIghts></LatestHighLIghts>
            <HeaderNav></HeaderNav>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" >

                <AllCategory allCategory={data}></AllCategory>

                <div className="col-span-2">
                    <News></News>
                </div>

                <LoginWithGoogle></LoginWithGoogle>

            </div>
        </div>
    );
};

export default Home;