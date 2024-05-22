import { IoGitNetwork, IoHome, IoNotifications } from "react-icons/io5";
import { MdAnnouncement } from "react-icons/md";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="shadow-xl -mb-1 rounded-2xl bg-[#111827] text-[#ffffff] flex items-center lg:gap-20 gap-3">
                <img src="https://i.ibb.co/pW3XSyd/logo-search-grid-1x-2-removebg-preview.png" alt="" width={140} />

                <div >
               
                    <div className="lg:flex hidden items-center justify-center ">
                    <NavLink>
                        <div className="mr-10 font-bold text-base text-center flex-col justify-center items-center hover:bg-[#0D2136] rounded-xl p-3 ">
                            <div className="flex justify-center items-center"><IoHome /></div>
                            <h1>Home</h1>
                        </div>
                        </NavLink>
                        <NavLink>
                        <div className="mr-10 text-center font-bold text-base flex-col justify-center items-center hover:bg-[#0D2136] rounded-xl p-3 ">
                            <div className="flex justify-center items-center"><IoGitNetwork /></div>
                            <h1>Network</h1>
                        </div>
                        </NavLink>
                        <NavLink>
                        <div className="mr-10 text-center font-bold text-base flex-col justify-center items-center hover:bg-[#0D2136] rounded-xl p-3">
                            <div className="flex justify-center items-center"><IoNotifications /></div>
                            <h1>Announcement</h1>
                        </div>
                        </NavLink>
                        <NavLink>
                        <div className="mr-10 font-bold text-base text-center flex-col justify-center items-center hover:bg-[#0D2136] rounded-xl p-3">
                            <div className="flex justify-center items-center"><MdAnnouncement /></div>
                            <h1>Job</h1>
                        </div>
                        </NavLink>
                        
                    </div>



                    {/* for mobile device */}
                    <div className="lg:hidden flex gap-10">
                        <div className="flex lg:hidden items-center justify-center ">
                            <div className="mr-5 text-center flex-col justify-center items-center hover:bg-slate-300 rounded-xl p-1 ">
                                <div className="flex justify-center items-center"><IoHome size={28} /></div>

                            </div>


                            <div className="mr-5 text-center flex-col justify-center items-center hover:bg-slate-300 rounded-xl p-1 ">
                                <div className="flex justify-center items-center"><IoGitNetwork size={28} /></div>

                            </div>


                            <div className="mr-5 text-center flex-col justify-center items-center hover:bg-slate-300 rounded-xl p-1">
                                <div className="flex justify-center items-center"><IoNotifications size={28} /></div>

                            </div>


                        </div>
                        <div>
                            <img alt="" className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100" src="https://source.unsplash.com/40x40/?portrait?1" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;