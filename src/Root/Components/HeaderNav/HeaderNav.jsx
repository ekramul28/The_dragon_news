import { Link, NavLink } from "react-router-dom";

const HeaderNav = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1 gap-3 justify-center">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/career">Career</NavLink>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/public/assets/user.png" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>

                </div>
                <Link to="/login"><button className="btn bg-[#403F3F] ml-3 text-white font-semibold ">Login</button></Link>

            </div>
        </div>
    );
};

export default HeaderNav;