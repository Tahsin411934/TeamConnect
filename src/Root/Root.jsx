import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Sidebar1 from "../Pages/Sidebar1/Sidebar1";
import Login from "../Components/Auth/Login/Login";
import Signup from "../Components/Auth/SignUp/Signup";
import UseAuth from "../Hook/useAuth";
import Sidebar2 from "../Pages/Sidebar2/Sidebar2";
import { FaUserFriends } from "react-icons/fa";

const Root = () => {
    const { user, loading } = UseAuth()

    if (loading) {
        // set loading
        return <div className="bg-[#2F7955] h-screen flex justify-center items-center">
            <div>
                <span className=" text-white m-auto loading loading-spinner w-20"></span>
                <div className="flex items-center justify-center  -ml-[30%]">

                    <h1 className="mt-5 mr-10 tracking-widest text-[#FFFFFF] font-Prata font text-5xl">PLATE SWAP</h1>
                </div>
            </div>


        </div>
    }
    return (

        <div>
            {
                user ? (<div className="lg:grid grid-cols-11 gap-1 container mx-auto mt-3">
                    <div className="w-full h-full bg-[#111827] col-span-3  hidden rounded-2xl lg:flex justify-center ">
                        <div>
                        <div className="mr-10 text-center font-bold text-base flex-col justify-center mt-5 text-white items-center hover:bg-[#0D2136] rounded-xl p-3 ">
                            <div className="flex justify-center items-center"> <FaUserFriends /></div>
                            <h1>Invitation</h1>
                            <hr className='mt-3 -mr-5 h-[0.5px] border-none bg-slate-600   mx-auto'  />
                        </div>
                            <Sidebar1 />
                        </div>

                    </div>
                    <div className="w-full h-full col-span-6 rounded-2xl">
                        <Navbar></Navbar>
                        <Outlet />
                    </div>
                    <div className="w-full h-full bg-slate-200 col-span-2 hidden lg:flex"> <Sidebar2></Sidebar2> </div>  </div>) : <Login />
            }
        </div>




    );
};

export default Root;