import { Link } from "react-router-dom";
import Instagram from "../assets/icons/instagram";
import Telegram from "../assets/icons/telegram";
import Twitter from "../assets/icons/twitter";
import Coin from "../assets/icons/coin";
import Chart from "../assets/icons/chart";
import ScreenMobile from "../assets/icons/screen";
import Layer from "../assets/icons/layer";
import Plug from "../assets/icons/plug";

export default function Home() {
  return (
    <main className=" w-full flex flex-col gap-10">
      <section className=" w-full">
        <div className="w-full h-screen home-bg bg-cover bg-no-repeat bg-center bg-fixed flex items-center justify-center">
          <div className=" flex flex-col items-center gap-3 p-4 backgrop-bg-filter shadow-lg rounded-lg">
            <img
              src="/logo.jpg"
              alt="logo"
              title="logo"
              className=" w-60 h-auto rounded-md"
            />
            <div className=" max-w-screen-xl w-full px-5 md:px-10 flex flex-col items-end justify-end text-center text-white">
              <h1 className=" text-5xl md:text-7xl font-bold  max-w-2xl text-shadow drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                Hi, I'm Larva Meme
              </h1>
              <p>
                -Halloween is almost here, join us and our pets in celebrating
                our favorite global holiday!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-yellow-300 text-primary-500 py-20 mt-20  flex justify-center md:px-20 px-10">
        <div className="max-w-[1500px] w-full ">
          <div className=" text-center flex justify-center items-center flex-col w-full mb-16">
            <h2 className="font-semibold text-4xl md:text-6xl my-3">
              Costume Contest Details!
            </h2>
            <p className="max-w-2xl font-light text-3xl">
              Submit your IRL pet(s) Halloween costume(s) for a chance to win a
              USDC prize! Join the TG to submit your entry :)
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-10 items-stretch flex-wrap">
            {[
              {
                bgImageClass: "one-bg",
                title: "1st Place:",
                content: "$500 USDC",
              },
              {
                bgImageClass: "two-bg",
                title: "2nd Place:",
                content: "$250 USDC",
              },
              {
                bgImageClass: "three-bg",
                title: "3rd Place:",
                content: "$100 USDC",
              },
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className={` flex-1 flex justify-center flex-col rounded-lg shadow-lg p-6 pb-10 bg-left-top bg-no-repeat ${item.bgImageClass}`}
                >
                  <h5 className="font-semibold text-2xl md:text-3xl my-4">
                    {item.title}
                  </h5>
                  <p className=" font-light text-4xl md:text-6xl">
                    {item.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="flex text-white justify-center flex-col items-center gap-28 md:px-20 px-10 mt-20 pb-5 my-16">
        <div className=" w-full max-w-screen-xl flex flex-col gap-12">
          <div className=" max-w-screen-lg w-full">
            <h2 className="font-semibold text-4xl md:text-6xl my-3">
              Larva Meme COMMUNITY
            </h2>
            <p className=" text-2xl md:text-3xl">
              In the end, what really matters is the strength of the community.
              That’s why we focus on building a united, proactive group that
              grows together. By fostering long-term bonds, we elevate the
              project to a top-tier memecoin. Join our community on Telegram or
              Twitter, and let’s thrive as one.
            </p>
          </div>
          <div className=" w-full flex flex-col gap-10">
            <h2 className="font-semibold text-center text-4xl md:text-6xl my-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] text-green-700">
              Find us on
            </h2>
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 gap-y-8">
              {[
                {
                  id: 1,
                  link: "#",
                  label: "CoinGecko",
                  icon: <Coin className=" size-16" />,
                  classname: " bg-gray-500",
                },
                {
                  id: 2,
                  link: "#",
                  label: "CoinMarketCap",
                  icon: <Chart className=" size-16" />,
                  classname: " bg-green-500",
                },
                {
                  id: 3,
                  link: "#",
                  label: "DexScreener",
                  icon: <Layer className=" size-16" />,
                  classname: " bg-purple-500",
                },
                {
                  id: 4,
                  link: "#",
                  label: "DexTools",
                  icon: <ScreenMobile className=" size-16" />,
                  classname: " bg-yellow-500",
                },
                {
                  id: 5,
                  link: "#",
                  label: "X/Twitter",
                  icon: <Twitter className=" size-16" />,
                  classname: " bg-black",
                },

                {
                  id: 6,
                  link: "#",
                  label: "Instagram",
                  icon: <Instagram className="size-16" />,
                  classname: " bg-red-500",
                },
                {
                  id: 7,
                  link: "#",
                  label: "Telegram",
                  icon: <Telegram className="size-16" />,
                  classname: " bg-blue-400",
                },
                {
                  id: 8,
                  link: "#",
                  label: "SolScan",
                  icon: <Plug className="size-16" />,
                  classname: " bg-emerald-900",
                },
              ].map((item) => (
                <Link
                  to={item?.link}
                  key={item?.id}
                  className={`${item?.classname} flex flex-col gap-2 items-center justify-center p-4 w-full shadow-md rounded-md hover:scale-110 transition-all`}
                >
                  {item?.icon}
                  {item?.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
