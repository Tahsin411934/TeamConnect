import { IoMdVideocam } from "react-icons/io";
import { IoDocumentAttach, IoImage } from "react-icons/io5";
import UseAuth from "../../Hook/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Post = () => {
    const { user } = UseAuth();
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
    const [requestDate, setRequestDate] = useState(new Date().toISOString().slice(0, 19));
    useEffect(() => {
        const interval = setInterval(() => {
            setRequestDate(new Date().toISOString().slice(0, 19));
        }, 1000); // Update requestDate every second
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
    // console.log(new Date().toISOString().slice(0, 19))
    const onSubmit = async (data) => {
        console.log(data);
        await axios.post('http://localhost:5000/allPost', data, {
            headers: {
                "Content-Type": 'Application/json'
            }
        });

        reset({ postContent: "" });
        document.getElementById('my_modal_5').close();
        // queryClient.invalidateQueries('posts');
    };

    const openModal = () => {
        if (user) {
            setValue('poster_email', user.email || '');
            setValue('poster_image', user.photoURL || '');
            setValue('Post_date', requestDate || '');
            setValue('poster_Name', user.displayName || '');
            setValue('Like', 0 || '');
        }
        document.getElementById('my_modal_5').showModal();
    };

    return (
        <div className="bg-[#111827] text-[#fff] rounded-t-xl p-4">
            <div className="flex items-center px-3 pt-1">
                <div>
                    <img
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full ring-2 ring-offset-4 bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
                        src={user.photoURL}
                    />
                </div>
                <fieldset
                    onClick={openModal}
                    className="w-full space-y-1 py-5 px-3 cursor-pointer dark:text-gray-800"
                >
                    <label htmlFor="Search" className="hidden">Search</label>
                    <div className="relative">
                        <input
                            placeholder={`What's on your mind? ${user.displayName}`}
                            className="text-[#111827] w-full px-3 bg-slate-200 rounded-3xl h-14"
                            type="text"
                            readOnly
                        />
                    </div>
                </fieldset>
            </div>

            <div className="flex items-center justify-around w-3/4 mx-auto pb-2">
                <PostOption icon={<IoMdVideocam size={28} />} label="Live" />
                <PostOption icon={<IoImage size={28} />} label="Image" />
                <PostOption icon={<IoDocumentAttach size={28} />} label="Document" />
            </div>

            {/* Modal */}
            <dialog id="my_modal_5" className="modal text-[#111827] modal-bottom sm:modal-middle">
                <div className="modal-box bg-gray-800 text-white rounded-lg p-6">
                    <div>
                        <div className="flex items-center gap-4 mb-5">
                            <img
                                alt="User Avatar"
                                className="w-12 h-12 rounded-full ring-2 ring-offset-4 bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
                                src={user.photoURL}
                            />
                            <h1 className="text-2xl font-bold ">{user.displayName}</h1>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="w-full mb-4">
                            <label htmlFor="postContent" className="block mb-2 text-sm font-medium text-gray-300">Post Content</label>
                            <textarea
                                id="postContent"
                                placeholder="What's on your mind?"
                                className="w-full px-3 py-2 text-gray-800 rounded-lg"
                                {...register("postContent", { required: "Content is required." })}
                            />
                            {errors.postContent && (
                                <p className="text-red-500 mt-1">{errors.postContent.message}</p>
                            )}
                        </div>
                        <input type="hidden" {...register('poster_email')} />
                        <input type="hidden" {...register('poster_image')} />
                        <input type="hidden" {...register('Post_date')} />
                        <input type="hidden" {...register('poster_Name')} />
                        <input type="hidden" {...register('Like')} />
                        <div className="flex items-center justify-around">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                            >
                                Post
                            </button>
                            <form method="dialog">
                                <button className="btn mt-0">Close</button>
                            </form>
                        </div>
                    </form>
                </div>
            </dialog>
            <div className="w-[100%] flex justify-center items-center">
                <hr className='-ml-0 h-[0.5px] border-none bg-slate-600  w-[100%] mx-auto' />
            </div>
        </div>
    );
};

const PostOption = ({ icon, label }) => (
    <div className="flex items-center gap-1 p-1 hover:bg-gray-700 rounded-xl cursor-pointer">
        {icon}
        <span>{label}</span>
    </div>
);

const queryClient = new QueryClient();

const PostWithQueryClient = () => (
    <QueryClientProvider client={queryClient}>
        <Post />
    </QueryClientProvider>
);

export default PostWithQueryClient;
