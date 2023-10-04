import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const LoginWithGoogle = () => {
    const { loginWithGoogle } = useContext(AuthContext);

    const googleClick = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            }
            )
    }
    return (
        <div >

            <h1 className="font-semibold text-xl">Login With</h1>
            <div className="border-2 p-4 border-green-500">
                <h1 onClick={googleClick} className="flex justify-center items-center text-xl font-semibold hover:text-green-400 ">Login with Google</h1>

            </div>
            <div className="border-2 p-4 border-green-500 mt-5">
                <h1 className="flex justify-center items-center text-xl font-semibold hover:text-green-400 ">Login With GitHub</h1>

            </div>

        </div>
    );
};

export default LoginWithGoogle;