import { Link } from "react-router-dom";
import Twitter from "../assets/icons/twitter";
import Telegram from "../assets/icons/telegram";

export default function Footer() {
  return (
    <footer className=" bg-[#252525] text-white flex flex-col items-center">
      <section className="w-full p-10 md:p-20 max-w-screen-xl">
        <footer className="text-white">
          <div className="flex flex-col justify-center w-full md:flex-row md:justify-between border-y border-[#A1A9AE] mt-20 py-20">
            <div className="flex flex-col gap-5 justify-center items-center">
              <img src={"/logo.jpg"} alt="larva meme" className="w-32 h-auto" />
            </div>
            <div className="flex gap-24 mt-9 md:mt-0 justify-center">
              <div className="flex flex-col gap-5">
                <span className="font-bold text-lg">Our Coin</span>
                <div className="flex flex-col gap-5">
                  {[{ label: "Home", url: "#" }].map((item, index) => {
                    return (
                      <Link to={item.url} key={index}>
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 mb-5 flex flex-col gap-5 md:gap-0 md:flex-row justify-center md:justify-between text-sm">
            <div className=" flex items-center gap-3 mt-6">
              <Link
                to="#"
                target="_blank"
                rel="noreferrer"
                className=" border rounded-full p-3 bg-green-500 shadow-lg shadow-yellow-300 hover:shadow-black hover:scale-125 transition-all whitespace-nowrap flex items-center gap-2"
              >
                <Telegram />
                <span>Telegram</span>
              </Link>
              <Link
                to="#"
                target="_blank"
                rel="noreferrer"
                className=" border rounded-full p-3 bg-black shadow-lg shadow-yellow-300 hover:shadow-green-500 hover:scale-125 transition-all  whitespace-nowrap flex items-center gap-2"
              >
                <Twitter />
                <span>X/Twitter</span>
              </Link>
            </div>
          </div>
        </footer>
      </section>
    </footer>
  );
}
