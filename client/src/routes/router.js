import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
import Login from "../pages/login/Login";
import Signup from "../pages/signUp/SignUp";
import PageNotFound from "../pages/error/PageNotFound";
import Schedules from "../pages/schedules/Schedules";
import GenerateSchedules from "../pages/schedules/GenerateSchedules";
import SchedulesDetail from "../pages/schedules/SchedulesDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/schedules",
                element: <Schedules />,
                children: [
                    {
                        path: "/schedules/",
                        element: <GenerateSchedules />,
                    },
                    // {
                    //     path: "/schedules/temp",
                    //     element: <SchedulesDetail />,
                    // },
                    {
                        path: "/schedules/:scheduleId",
                        element: <SchedulesDetail />,
                    },
                ],
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signUp",
        element: <Signup />,
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);

export default router;
