import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Error/Error";
import Home from "../Components/Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import MyCart from "../Components/MyCart/MyCart";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import PrivateRoute from "./Private/PrivateRoute";
import BrandCars from "../Components/BrandCars/BrandCars";
import CarDetails from "../Components/CarDetails/CarDetails";
import Update from "../Components/UpdateCar/Update";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('https://carmedix-server-ppw2yl56z-mihads-projects.vercel.app/car')
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct/></PrivateRoute>
            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart/></PrivateRoute>,
                loader: () => fetch('https://carmedix-server-ppw2yl56z-mihads-projects.vercel.app/mycart')
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: `car/brand/:brand`,
                element: <PrivateRoute><BrandCars/></PrivateRoute>,
                loader:({params}) => fetch(`https://carmedix-server-ppw2yl56z-mihads-projects.vercel.app/car/brand/${params.brand}`)
                
            },
            {
                path: `/details/:id`,
                element: <PrivateRoute><CarDetails/></PrivateRoute>,
                loader: ({params}) => fetch(`https://carmedix-server-ppw2yl56z-mihads-projects.vercel.app/details/${params.id}`)
                
            },
            {
                path: `/update/:id`,
                loader: ({params}) => fetch(`https://carmedix-server-ppw2yl56z-mihads-projects.vercel.app/car/${params.id}`),
                element: <Update></Update>
            }
        ]
    }
])
export default Route;