import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Signup from "../Components/Auth/SignUp/Signup";
import Login from "../Components/Auth/Login/Login";
import Network from "../Components/Network/Network";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
       
        {
          path:'/login',
          element: <Login/>
        },
        {
          path:'/network',
          element: <Network/>
        },
       
      ]
    },
    {
      path:'/signup',
      element: <Signup/>
    },
   
  ]);



export default router;