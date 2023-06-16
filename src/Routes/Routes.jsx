import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Category from "../Pages/Home/ToyCategory/Category";
//import AddToys from "../Pages/AddToys/AddToys";
//import Login from "../Pages/Login/Login";
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
      ]
    },
  ])
  export default router;