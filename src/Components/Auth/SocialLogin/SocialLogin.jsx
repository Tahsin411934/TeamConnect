import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Swal from "sweetalert2";
import UseAuth from "../../../Hook/useAuth";
const SocialLogin = () => {

    const { googleLogin, githubLogin, setLoading } = UseAuth()
    const location = useLocation();
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {

                navigate(location?.state ? location.state : "/");
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
                console.log(error.Message);
                Swal.fire(`${error}`);
            })
    }
    const handleGithubLogin = () => {

        githubLogin()
            .then(() => {

                navigate(location?.state ? location.state : "/");
                setLoading(false)
            })
            .catch((error) => {
                toast.error(error.Message);
                setLoading(false)
            })
    }

    return (
        <div className="text-[#a1c9bc]">
            <div className="w-[2rem] mb-5 mx-auto"><p>OR </p></div>
            
                <div className="flex items-center gap-5  justify-center">
                    <button onClick={handleGoogleLogin} type="submit" className="btn text-xl bg-slate-300"><FcGoogle />Google </button>
                    <button onClick={handleGithubLogin} type="submit" className="btn text-xl  bg-slate-300"><FaGithub />Github </button>
                </div>
               
          
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SocialLogin;