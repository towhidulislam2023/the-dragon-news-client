import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import News from "../Components/News";
import SingalNews from "../Components/SingalNews/SingalNews";
import Login from "../Components/Login/Login";
import SecondLayout from "../layout/SecondLayout";
import Registar from "../Components/Registar/Registar";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <News></News>,
                loader: () => fetch('http://localhost:5000/news')
            },
        ]
    },
    {
        path: "/news/:id",
        element: <PrivateRoute><SecondLayout></SecondLayout></PrivateRoute> ,
        children:[
            {
                path: "/news/:id",
                element: <SingalNews></SingalNews>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]

    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/registar",
        element: <Registar></Registar>,
    },
]);
export default router