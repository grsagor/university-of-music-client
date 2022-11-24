import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import AllServices from "../../Pages/Home/Services/AllServices";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Login from "../../Pages/Login/Login";
import EditReview from "../../Pages/Review/EditReview/EditReview";
import MyReviews from "../../Pages/Review/MyReviews/MyReviews";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/services/:id',
                loader: ({params}) => {
                    return fetch(`https://assignment-11-server-iota-six.vercel.app/services/${params.id}`)
                },
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/editreview/:id',
                loader: ({params}) => {
                    return fetch(`https://assignment-11-server-iota-six.vercel.app/${params.id}`)
                },
                element: <EditReview></EditReview>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;