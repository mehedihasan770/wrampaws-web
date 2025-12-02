import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Details from "../Layouts/Details";
import Auth from "../Layouts/Auth";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivetRouts from "../PrivetRouts/PrivetRouts";
import MyProfile from "../Layouts/MyProfile";
import ProfileUpdate from "../Layouts/ProfileUpdate";
import ForgetPass from "../Layouts/ForgetPass";
import Services from "../Layouts/Services";
import AppsNotFound from "../Pages/PageNotFound";
import AboutUs from "../Components/AboutUs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch('/data.json'),
        hydrateFallbackElement: <div></div>
    },
    {
        path: '/myprofile',
        element: <PrivetRouts><MyProfile></MyProfile></PrivetRouts>
    },
    {
        path: '/about-us',
        element: <AboutUs></AboutUs>
    },
    {
        path: '/services',
        element: <Services></Services>,
        loader: () => fetch('/data.json')
    },
    {
        path: '/ProfileUpdate',
        element: <PrivetRouts><ProfileUpdate></ProfileUpdate></PrivetRouts>
    },
    {
        path: '/Details/:id',
        element: <Details></Details>,
        loader: () => fetch('/data.json')
    },
    {
        path: '/forgatpassword',
        element: <ForgetPass></ForgetPass>
    },
    {
        path: '/auth',
        element: <Auth></Auth>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '*',
        element: <AppsNotFound></AppsNotFound>
    }
])