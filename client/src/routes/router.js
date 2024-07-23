import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";

import PageNotFound from "../pages/error/PageNotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
        ],
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
]);

export default router;
