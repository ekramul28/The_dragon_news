import moment from "moment/moment";
const Header = () => {
    return (
        <div className="text-center">
            <div className="flex justify-center">
                <img className="mt-12 mb-5" src="logo.png" alt="" />
            </div>
            <p className="mb-2 text-lg font-medium">Journalism Without Fear or Favour</p>
            <p className="text-xl font-medium">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;