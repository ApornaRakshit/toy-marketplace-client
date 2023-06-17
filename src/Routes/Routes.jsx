import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Category from "../Pages/Home/ToyCategory/Category";
import MyToys from "../Pages/MyToys/MyToys";
import AddToy from "../Pages/AddToys/AddToy";
import PrivateRoutes from "./PrivateRoutes";
import UpdatedToy from "../Pages/MyToys/UpdatedToy";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'blogs',
            element: <Blogs></Blogs>
        },
        {
            path: 'category',
            element: <Category></Category>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'registration',
            element: <Registration></Registration>
        },
        {
            path: 'addToys',
            element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
        },
        {
            path: 'myToys',
            element:<PrivateRoutes><MyToys></MyToys></PrivateRoutes> ,
            loader:() =>fetch('http://localhost:5000/toy')
        },
        {
            path: 'updatedToy/:id',
            element: <PrivateRoutes><UpdatedToy></UpdatedToy></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        }
      ]
    },
  ])
  export default router;