import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./footer";

export default function LayoutWrapper() {
  return (
    <main className="w-full">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}
