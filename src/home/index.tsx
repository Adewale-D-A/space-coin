export default function Home() {
  return (
    <main className=" w-full flex flex-col gap-10">
      <section className=" w-full">
        <div className="w-full h-screen home-bg bg-cover bg-no-repeat bg-center bg-fixed flex items-center justify-center">
          <div className=" flex flex-col items-center gap-3 p-4 backgrop-bg-filter shadow-lg rounded-lg">
            <img
              src="/media/logo.png"
              alt="logo"
              title="logo"
              className=" w-56 h-auto"
            />
            <div className=" max-w-screen-xl w-full px-5 md:px-10 flex flex-col items-end justify-end text-center text-white">
              <h1 className=" text-5xl md:text-7xl font-bold  max-w-2xl text-shadow drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                Hi, I'm Space Coin
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
      <section className="flex text-white justify-center md:px-20 px-10 mt-20 pb-5">
        <div className=" max-w-[1500px] w-full">
          <h2 className="font-semibold text-4xl md:text-6xl my-3">
            Space Coin COMMUNITY
          </h2>
        </div>
      </section>
    </main>
  );
}
