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
import NotFound from "../Pages/NotFound/NotFound";
import AllToys from "../Pages/AllToys/AllToys";
import CategoryItem from "../Pages/Shared/CategoryItem/CategoryItem";
import ToyDetail from "../Pages/Shared/ToyDetail/ToyDetail";

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
            path:'notFound',
            element:<NotFound></NotFound>
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
            path: 'allToys',
            element: <AllToys></AllToys>
        },
        {
            path: 'myToys',
            element:<PrivateRoutes><MyToys></MyToys></PrivateRoutes> ,
            loader:() =>fetch('https://toy-marketplace-server-six-lake.vercel.app/toy')
        },
        {
            path: 'updatedToy/:id',
            element: <PrivateRoutes><UpdatedToy></UpdatedToy></PrivateRoutes>,
            loader: ({params}) => fetch(`https://toy-marketplace-server-six-lake.vercel.app/toy/${params.id}`)
        },
        {
            path:'cart/:_id',
            element:<PrivateRoutes><ToyDetail></ToyDetail></PrivateRoutes>
        }
      ]
    },
  ])
  export default router;