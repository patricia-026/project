import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { Link } from "react-router-dom";

export default function Projects() {
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            const projects = await axiosClient.get("/projects");
            setProjects(projects.data.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return (
        <div className="pt-24 px-12">
            <div className="block m-5">
                <h1 className="text-2xl text-center">Projects</h1>
                <div className="text-right">
                    <Link
                        to="/projects/new"
                        className="text-lg bg-green-500 rounded-lg p-2"
                    >
                        New Project
                    </Link>
                </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-xl text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Status
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Number of Contacts
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    {/* {loading && (
                        <tbody>
                            <td colSpan={4} className="w-full text-center">
                                Loading...
                            </td>
                        </tbody>
                    )} */}

                    {!loading && <tbody></tbody>}
                </table>
            </div>
        </div>
    );
}
