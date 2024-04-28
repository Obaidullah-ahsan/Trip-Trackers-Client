import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import AllTouristSpot from "../Pages/AllTouristSpot/AllTouristSpot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path: "/",
            element:<Home></Home>,
            loader: ()=> fetch("http://localhost:5000/touristspot")
        },
        {
            path: "/alltouristspot",
            element:<AllTouristSpot></AllTouristSpot>,
            loader: ()=> fetch("http://localhost:5000/touristspot")
        },
        {
            path: "/addtouristspot",
            element:<AddTouristSpot></AddTouristSpot>
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path: "/register",
            element:<Register></Register>
        }
    ]
  },
]);

export default router;
