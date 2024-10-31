import { Link } from "react-router-dom";
import Logo from "../component/logo";

export default function NavBar() {
  return (
    <nav className=" sticky top-0 left-0 z-10 w-full flex items-center justify-center bg-[#061f31] shadow-md">
      <div className="w-full max-w-screen-xl py-3 text-white flex items-center justify-between px-5 md:px-10">
        <Logo />
        <ul className=" flex items-center gap-2 md:gap-12">
          {[
            {
              id: 1,
              label: "Home",
              url: "#home",
            },
          ].map((item) => (
            <li key={item?.id} className=" text-sm md:text-3xl ">
              <a
                href={item?.url}
                className=" hover:bg-green-600 rounded-lg hover:shadow-lg hover:shadow-yellow-400 px-2 md:px-4 transition-all hover:py-3"
              >
                {item?.label}
              </a>
            </li>
          ))}
        </ul>

        <Link
          to={"#"}
          className=" p-2 gradient-style-1 rounded-lg shadow-lg shadow-yellow-400 px-4 animate-bounce"
        >
          Tap to swipe
        </Link>
      </div>
    </nav>
  );
}
