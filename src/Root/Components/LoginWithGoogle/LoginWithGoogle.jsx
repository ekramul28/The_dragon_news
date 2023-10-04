import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../../firebaseConfig/firebaseConfig";

const LoginWithGoogle = () => {
    const handelClick = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => console.log(result.user))
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div >

            <h1 className="font-semibold text-xl">Login With</h1>
            <div className="border-2 p-4 border-green-500">
                <h1 onClick={handelClick} className="flex justify-center items-center text-xl font-semibold hover:text-green-400 ">Login with Google</h1>

            </div>
            <div className="border-2 p-4 border-green-500 mt-5">
                <h1 className="flex justify-center items-center text-xl font-semibold hover:text-green-400 ">Login With GitHub</h1>

            </div>

        </div>
    );
};

export default LoginWithGoogle;