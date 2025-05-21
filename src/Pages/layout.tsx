import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="container w-[80%] mx-auto">
          <Navbar />
        <main className="pt-4">
          <Outlet />
        </main>
        <Footer />
    </div>
);
}
