import UseAuth from "../../Hook/useAuth";


const Sidebar1 = () => {
    const {user} = UseAuth()
    return (
        <div className=" mt-3 flex items-center justify-center ">
            <div className="bg-[#0D2136] rounded-2xl p-5 text-[#fff] flex items-center gap-3 ">
                <div className="">
                <img
                        alt="User Avatar"
                        className="w-16 h-16 rounded-full"
                        src={user.photoURL}
                    />
                </div>
                <div>
                    <h1>Abrar Fahim </h1>
                    <h1>Chittagong, Bnagladesh</h1>
                    <div className="flex items-center justify-center mt-3 gap-5">
                        <button className="py-2 rounded-lg px-4 text-center bg-[#2A63B8] text-[#fff]">Accept</button>
                        <button className="py-2 rounded-lg px-4 text-center bg-[#151515] text-[#fff]">decline</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar1;