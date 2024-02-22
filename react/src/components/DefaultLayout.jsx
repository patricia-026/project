import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div className="">
            <div className="fixed w-full h-24 bg-black">
                <div className="flex items-center justify-center h-full space-x-12 text-xl">
                    <div className="text-white" to="/">
                        Projects
                    </div>
                </div>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    );
}
