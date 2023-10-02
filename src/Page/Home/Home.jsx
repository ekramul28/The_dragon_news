import { useLoaderData } from "react-router-dom";
import HeaderNav from "../../Root/Components/HeaderNav/HeaderNav";
import LatestHighLIghts from "../../Root/Components/LatestHighLIghts/LatestHighLIghts";
import AllCategory from "../../Root/Components/AllCaterogy/AllCaterogy";

const Home = () => {
    const data = useLoaderData();
    return (
        <div >
            <LatestHighLIghts></LatestHighLIghts>
            <HeaderNav></HeaderNav>
            <div className="grid grid-cols-3">
                <AllCategory allCategory={data}></AllCategory>

            </div>
        </div>
    );
};

export default Home;