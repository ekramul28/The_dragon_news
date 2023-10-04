import { Link } from "react-router-dom";
import HeaderNav from "../HeaderNav/HeaderNav";

const Login = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="text-center lg:text-left flex mt-3
                         items-center  justify-center">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <form className="card-body w-96">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="m-3">Dont’t Have An Account ? <Link className="text-[#FF8C47] text-xl" to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;