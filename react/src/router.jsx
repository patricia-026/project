import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import NotFound from "./views/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            { path: "/", element: <Navigate to="/projects" /> },
            { path: "/projects" },
            { path: "/projects/new" },
            { path: "/projects/:id" },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
