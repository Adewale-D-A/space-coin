import { Link } from "react-router-dom";
import Logo from "../component/logo";

export default function NavBar() {
  return (
    <nav className=" sticky top-0 left-0 w-full flex items-center justify-center bg-[#061f31] shadow-md">
      <div className="w-full max-w-screen-xl py-3 text-white flex items-center justify-between px-5 md:px-10">
        <Logo />
        <ul className=" flex items-center gap-2 md:gap-12">
          {[
            {
              id: 1,
              label: "Home",
              url: "#",
            },
            {
              id: 1,
              label: "About",
              url: "#",
            },
            {
              id: 1,
              label: "Contact",
              url: "#",
            },
          ].map((item) => (
            <li key={item?.id} className=" text-sm md:text-3xl ">
              <Link
                to={item?.url}
                className=" hover:bg-green-600 rounded-lg hover:shadow-lg hover:shadow-yellow-400 px-2 md:px-4 transition-all hover:py-3"
              >
                {item?.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to={"#"}
          className=" p-2 bg-green-600 rounded-lg shadow-lg shadow-yellow-400 px-4 animate-bounce"
        >
          Tap to swipe
        </Link>
      </div>
    </nav>
  );
}
