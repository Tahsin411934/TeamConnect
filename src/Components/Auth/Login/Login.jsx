import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import UseAuth from "../../../Hook/useAuth";
import LoginContent from "./LoginContent";






const Login = () => { 
  const [error, setError] = useState(null);
  const location = useLocation();
  const {  signinUser, setLoading } = UseAuth();
  const navigate = useNavigate();
  
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset
    
//email password functionality
    signinUser(data.email, data.password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        setLoading(false);
      })
      .catch((error) => {
        
        setLoading(false);
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire(`${error}`);
        reset()
        
      });   
  };

  return (
    <div className='h-[650px] bg-[#111827]  '>
      <div className="pt-5  ">
      
      </div>
    <div className="w-[80%] lg:w-[40%]  mx-auto shadow-2xl bg-[#111827] rounded-lg ">
      <Helmet>
        <title>PlatSawp | Login </title>
      </Helmet>
      <div className="flex items-center justify-center">
       <img src="https://i.ibb.co/pW3XSyd/logo-search-grid-1x-2-removebg-preview.png" alt="" width={240} />
       </div>
      <h1 className=" text-center -mt-9 text-2xl text-[#a1c9bc] font-bold italic">
        Welcome Back 
       </h1>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          {error && <p className="text-red-500">{error}</p>}
          <label className="label">
            <span className="label-text text-[#a1c9bc]">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered bg-slate-600"
            {...register("email", { required: true })}
          />
          {errors.name && (
            <p className="text-red-500 ml-1">Email is required.</p>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-[#a1c9bc]">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input bg-slate-600 input-bordered"
            {...register("password", {
              required: true,
            })}
          />
          {errors.name && (
            <p className="text-red-500 ml-1">Password is required.</p>
          )}
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn hover:bg-slate-900 text-[#fff] bg-[#0D2136]">
            Sign In
          </button>
        </div>
        <div className="flex  items-center text-[#a1c9bc] ">
          <p>New User?</p>
          <Link to="/signup">
            <button className=" text-[#a1c9bc] bg-transparent ">SignUp</button>
          </Link>
        </div>
        <SocialLogin></SocialLogin>
        
      </form>
    </div>
    </div>
  );
};

export default Login;