import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import News from "../Components/News";
import SingalNews from "../Components/SingalNews/SingalNews";
import Login from "../Components/Login/Login";
import SecondLayout from "../layout/SecondLayout";
import Registar from "../Components/Registar/Registar";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TertiaryLayout from "../layout/TertiaryLaout/TertiaryLayout";
import CatagoryNews from "../Components/CatagoryNews/CatagoryNews";
import Terms from "../pages/Terms/Terms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <News></News>,
                loader: () => fetch('https://the-dragon-news-server-towhidulislam2023.vercel.app/news')
            },
            {
                path: "/catagory/:id",
                element: <CatagoryNews></CatagoryNews>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-towhidulislam2023.vercel.app/catagory/${params.id}`)
            },
        ]
    },
    {
        path: "/news/:id",
        element: <PrivateRoute><SecondLayout></SecondLayout></PrivateRoute>,
        children: [
            {
                path: "/news/:id",
                element: <SingalNews></SingalNews>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-towhidulislam2023.vercel.app/news/${params.id}`)
            }
        ]

    },
    {
        path: "/login",
        element: <TertiaryLayout></TertiaryLayout>,
        children: [
            {
                path: "/login",
                element: <Login></Login>,
            },

        ]
    },
    {
        path: "/registar",
        element: <TertiaryLayout></TertiaryLayout>,
        children: [
            {
                path: "/registar",
                element: <Registar></Registar>
            },
        ]
    },
    {
        path: "/terms",
        element: <Terms></Terms>
    },


]);
export default router