import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import NotFound from "./views/NotFound";
import Projects from "./views/Projects";
import ProjectForm from "./views/ProjectForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            { path: "/", element: <Navigate to="/projects" /> },
            { path: "/projects", element: <Projects /> },
            { path: "/projects/new", element: <ProjectForm key="create" /> },
            { path: "/projects/:id", element: <ProjectForm key="update" /> },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
