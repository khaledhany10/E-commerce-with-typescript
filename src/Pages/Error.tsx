import { Link } from "react-router";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Error Page" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}


export default function Error() {
  return (
                <div className="right text-center flex flex-col justify-center items-center gap-5 mt-4 ">
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-3xl">404</h1>
                    <span className="text-transparent text-3xl bg-clip-text bg-gradient-to-r to-orange-900 from-red-400">Page Not Found</span>
                    <Link to="/" replace={true} className="bg-gray-300 rounded-md p-2">
                        Home
                    </Link>
                </div>
  )
}
