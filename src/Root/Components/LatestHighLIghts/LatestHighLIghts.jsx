import Marquee from "react-fast-marquee";

const LatestHighLIghts = () => {

    return (

        <div>
            <div className="h-20 bg-[#F3F3F3] flex items-center mt-7">
                <button className="btn bg-[#D72050] ml-4 text-white rounded-none  ">Latest</button>
                <Marquee speed={200} pauseOnHover={true}>
                    <p className="text-lg font-semibold ml-4">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestHighLIghts;