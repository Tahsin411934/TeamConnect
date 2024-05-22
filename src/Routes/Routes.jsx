import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Signup from "../Components/Auth/SignUp/Signup";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
       
      ]
    },
    {
      path:'/signup',
      element: <Signup/>
    }
  ]);



export default router;