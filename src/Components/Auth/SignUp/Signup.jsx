import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import UseAuth from "../../../Hook/useAuth";



const Signup = () => {
  const [passError, setPassError] = useState(null);
  const [pass, setPass] = useState(false);
 const { createUser, updateUserProfile, setUser,setLoading } = UseAuth();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();



  const onSubmit = (data) => {
    setPassError('')


    if(data.password.length<6){
      setPassError("Password Length must be at least 6 character")
      return;
    }
    else if (!/[A-Z]/.test(data.password)) {
      setPassError('Password must contain at least one uppercase letter');
      return;
    }
    else if (!/[a-z]/.test(data.password)) {
      setPassError('Password must contain at least one lower letter');
      return;
    }
//create functionality
    // createUser(data.email, data.password)
    //   .then((userCredential) => {
    //     setLoading(false);
    //     const user = userCredential.user;
    //     updateUserProfile(data.name, data.photoURL)
    //       .then(() => {
    //         setUser({
    //           ...user,
    //           displayName: data.name,
    //           photoURL: data.photoURL,
    //         });
    //         toast.success("Registration successful");
    //         reset();
            
    //       })
    //       .catch(() => {
            
    //       });
    //       navigate("/");
    //   })
    //   .catch((error) => {
    //     setPassError(error.message);
    //     toast.error(error.message);
    //   });
  };


 //password toggle functionality 
 const  handlePassword=()=>{
  setPass(!pass)
 }

  return (
    <div className="font-Poppins">
      <div className="pt-5"></div>
      <div className="w-[35rem] mx-auto shadow-2xl bg-[#fff] rounded-lg pt-5">
        <Helmet>
          <title>PlateSwap | Signup</title>
        </Helmet>
        <h1 className="pt-5 text-center text-2xl font-bold italic">
        Welcome To  <span className=" font-bold text-[#218b31]">Plate</span> <span className="font-bold">Swap!</span>
        {/* <h1 className="text-base text-[#424242] font-normal mt-1">Welcome to <span className=" font-bold text-[#218b31]">Plate</span> <span className="font-bold">Swap!</span>  Sign Up to Start Your Journey</h1> */}
      </h1>
        
       
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 ml-1">Name is required.</p>
            )}
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 ml-1">Email is required</p>
            )}
          </div>


          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              {...register("photoURL", { required: true })}
            />
             {errors.photoURL && (
              <p className="text-red-500 ml-1">photoURL is required</p>
            )}
          </div>


          <div className="form-control ">
            <label className="label ">
              <span className="label-text">Password</span>
             
            </label>
            <div className="flex item-center relative" ><input
              type={pass? 'text': "password"}
              placeholder="Password"
              className="input input-bordered w-[100%]"
              {...register("password", {
                required: true,
              })}
              
            /><i onClick={handlePassword} className="top-4 absolute left-[90%] "><FaEye /></i></div>
            
           {passError && <p className="text-red-500">{passError}</p>}  
            {errors.password && <p className="text-red-500 ml-1">password is required</p>}
          </div>


          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn w-[100%] mx-auto bg-[#218b31] text-[#fff]"
            >
              Sig Up
            </button>
          </div>
          <div className="flex gap-5 items-center ">
            <p>Already have an account?</p>
            <Link to="/login">
              <button className="btn bg-[#40a65] text-[#218b31] bg-slate-100">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Signup;