import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import AllTouristSpot from "../Pages/AllTouristSpot/AllTouristSpot";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import MyList from "../Pages/MyList/MyList";
import UpdateTouristSpot from "../Pages/UpdateTouristSpot/UpdateTouristSpot";
import PrivateRoutes from "../Routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/touristspot"),
      },
      {
        path: "/alltouristspot",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch("http://localhost:5000/touristspot"),
      },
      {
        path: "/touristspot/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/touristspot/${params.id}`),
      },
      {
        path: "/addtouristspot",
        element: <PrivateRoutes><AddTouristSpot></AddTouristSpot></PrivateRoutes>,
      },
      {
        path: "/updatetouristspot/:id",
        element: <PrivateRoutes><UpdateTouristSpot></UpdateTouristSpot></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/touristspot/${params.id}`),
      },
      {
        path: "/mylist",
        element: <PrivateRoutes><MyList></MyList></PrivateRoutes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
