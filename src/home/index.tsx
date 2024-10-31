import { Link } from "react-router-dom";
import Telegram from "../assets/icons/telegram";
import Twitter from "../assets/icons/twitter";
import Coin from "../assets/icons/coin";
import Chart from "../assets/icons/chart";
import ScreenMobile from "../assets/icons/screen";
import Layer from "../assets/icons/layer";
import Plug from "../assets/icons/plug";
import CashCoin from "../assets/icons/cash-coin";

export default function Home() {
  return (
    <main className=" w-full flex flex-col gap-10">
      <section className=" w-full">
        <div
          id="home"
          className="w-full h-screen home-bg bg-cover bg-no-repeat bg-center bg-fixed flex items-center justify-center"
        >
          <div className=" flex flex-col items-center gap-3 p-4 backgrop-bg-filter shadow-lg rounded-lg">
            <img
              src="/logo.jpg"
              alt="logo"
              title="logo"
              className=" w-60 h-auto rounded-md"
            />
            <div className=" max-w-screen-xl w-full px-5 md:px-10 flex flex-col items-center text-center text-white">
              <h1 className=" text-5xl md:text-7xl font-bold  max-w-2xl text-shadow drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                Hi, I'm Parroty
              </h1>
              <p className=" text-2xl text-gray-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                Meet the ultimate trendsetter of the tropical world. This
                elegant parrot is here to show you that fashion isn’t just for
                humans! With colors so vivid you’d think she dove into a
                rainbow, this bird isn’t just a pretty face; she’s dripping with
                personality and sass.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="gradient-style-1 text-white py-20 mt-20  flex justify-center md:px-20 px-10">
        <div className="max-w-[1500px] w-full ">
          {" "}
          <div className=" flex items-center gap-6 flex-col md:flex-row justify-center">
            <img
              src="/media/parrot_meme/other_1.jpg"
              alt="logo"
              title="logo"
              className=" w-96 h-auto rounded-md"
            />
            <div className=" text-center flex justify-center items-center flex-col w-full mb-16">
              <h2 className="font-semibold text-4xl md:text-6xl my-3">
                Parroty
              </h2>
              <p className="max-w-2xl font-light text-3xl">
                She's the jungle’s very own party starter. Rocking oversized,
                neon shades with a flower accessory that screams “vacation mode
                on,” this bird is the definition of chill vibes. She's got that
                “I only fly first class” look, perched coolly like she's on her
                way to a beachside fiesta with endless piña coladas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex text-white justify-center flex-col items-center gap-28 md:px-20 px-10 mt-20 pb-5 my-16">
        <div className=" w-full max-w-screen-xl flex flex-col gap-12">
          <div className=" flex items-center gap-6 flex-col md:flex-row justify-center">
            <img
              src="/media/parrot_meme/other_2.jpg"
              alt="logo"
              title="logo"
              className=" w-60 h-auto rounded-md"
            />
            <div className=" max-w-screen-lg w-full">
              <h2 className="font-semibold text-4xl md:text-6xl my-3">
                Parroty COMMUNITY
              </h2>
              <p className=" text-2xl md:text-3xl">
                She's also the suave beachgoer, sporting sleek black shades that
                could make any Hollywood starlet jealous. This one knows how to
                turn heads and make feathers fluff! Her plumage is a full-color
                gradient of tropical vibes, from sizzling reds and oranges to
                cool blues and greens, making it the bird everyone wants a
                selfie with.
              </p>
            </div>
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
                  label: "Buy",
                  icon: <CashCoin className="size-16" />,
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
          <p className=" text-2xl md:text-3xl">
            If you’ve ever wondered what it would look like if parrots took over
            fashion week, here’s your answer. This parrot isn’t just a bird;
            she’s an icon, a legend, and the meme hero we didn’t know we needed.
          </p>
        </div>
      </section>
    </main>
  );
}
