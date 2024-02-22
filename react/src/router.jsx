import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";

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
    },
]);

export default router;
