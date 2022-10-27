import { createBrowserRouter } from "react-router-dom";
import EPage from "../../Pages/404Pege/EPage";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseContainer from "../../Pages/Container/CourseContainer";
import CourseDetails from "../../Pages/Container/CourseDetails/CourseDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Main from "./Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course-container',
                element: <CourseContainer></CourseContainer>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/course-details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/course-details/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/course-details/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <EPage></EPage>
    }

])