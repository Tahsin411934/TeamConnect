import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import UseAuth from "../../../Hook/useAuth";






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
    <div className='font-Poppins'>
      <div className="pt-5"></div>
    <div className="w-[80%] lg:w-[40%] mx-auto shadow-2xl bg-[#fff] rounded-lg pt-5">
      <Helmet>
        <title>PlatSawp | Login </title>
      </Helmet>
      <h1 className=" text-center  text-2xl font-bold italic">
        Welcome Back 
        <h1 className="text-base text-[#424242] font-Montserrat font-normal mt-1">Welcome to <span className=" font-bold text-[#218b31]">Plate</span> <span className="font-bold">Swap!</span>  Sign In to continue</h1>
      </h1>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          {error && <p className="text-red-500">{error}</p>}
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
            {...register("email", { required: true })}
          />
          {errors.name && (
            <p className="text-red-500 ml-1">Email is required.</p>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
            {...register("password", {
              required: true,
            })}
          />
          {errors.name && (
            <p className="text-red-500 ml-1">Password is required.</p>
          )}
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn text-[#fff] bg-[#218b31]">
            Sign In
          </button>
        </div>
        <div className="flex  items-center ">
          <p>New User?</p>
          <Link to="/signup">
            <button className="btn text-[#218b31] bg-slate-100">SignUp</button>
          </Link>
        </div>
        <SocialLogin></SocialLogin>
      </form>
    </div>
    </div>
  );
};

export default Login;