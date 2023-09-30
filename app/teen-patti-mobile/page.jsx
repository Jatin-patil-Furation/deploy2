"use client";
import { useEffect, useState } from "react";

const GamePage = () => {
  const [isLandscape, setIsLandscape] = useState(true);

  const checkOrientation = () => {
    if (window.innerWidth <= window.innerHeight) {
      setIsLandscape(false);
    } else {
      setIsLandscape(true);
    }
  };

  useEffect(() => {
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    return () => {
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  return (
    <div className=" relative text-white font-roboto bg-[url('/assets/landingPage/sikkaplaybg.svg')] bg-cover bg-no-repeat w-screen h-screen ">
      {isLandscape && (
        <div className="  game-container w-screen h-screen">
          <div className="max-w-7xl mx-auto">
            {/* navbar */}
            <div className="navbar w-full h-[10vh] border-2 border-yellow-600 flex px-2 ">
              <div className="nav-left-items basis-[25%] flex  items-center justify-between">
                <div className="img-container">
                  <img
                    src={"/assets/Game-table/arrow-left.svg"}
                    alt="left-arrow"
                    className="w-[100%]"
                    width={50}
                    height={50}
                  />
                </div>
                <button className="relative custom-gradient px-3 py-1">
                  <img
                    src={"/assets/Game-table/red-chip.svg"}
                    alt="left-arrow"
                    className="absolute  h-full left-[-35%] top-0"
                    width={50}
                    height={50}
                  />
                  <p className="text-xs">Buy Coins</p>
                </button>
              </div>
              <div className="nav-right-items basis-[20%] flex justify-end gap-1">
                <div>
                  <img
                    src={"/assets/Game-table/message.svg"}
                    alt="message icon"
                    width={50}
                    height={50}
                    className="w-[100%] cursor-pointer"
                  />
                </div>
                <div>
                  <img
                    src={"/assets/Game-table/info-tag.svg"}
                    alt="Info-tag"
                    width={50}
                    height={50}
                    className="w-[100%] cursor-pointer "
                  />
                </div>
              </div>
            </div>
            {/* game table */}
            <div className="game w-full h-[80vh] border-2 border-red-600 ">
              <div className=" relative w-full h-full flex items-center justify-center">
                <img
                  src={"/assets/Game-table/table-background.svg"}
                  alt="table"
                  width={800}
                  height={500}
                  className="w-[80%] h-[80%] z-[50] "
                />
                <img
                  className="absolute left-[49%] custombp:top-5 z-[51]  transform -translate-x-1/2 -translate-y-1/2 "
                  src={"/assets/Game-table/Game-host.svg"}
                  alt="game-host"
                  width={80}
                  height={80}
                />
              </div>
            </div>
            {/* footer */}
            <div className="footer w-full h-[10vh] border-2 border-green-600">
              <div className="w-[70%] mx-auto">
                <button className="custom-gradient px-3 py-1 text-base">
                  Pack
                </button>
                <button className="custom-gradient px-3 py-1 text-base">
                  Side Show
                </button>
                <div
                  className={`relative bg-GreyDark opacity-80 border-GreyDark border-y-white border-y-[1px] transform  transition-transform duration-[3000] ease-in-out z-[1000] `}
                >
                  <img
                    src={"/assets/Game-table/red-chip.svg"}
                    alt="red-chip"
                    width={50}
                    height={50}
                    className="absolute left-[-1.5rem] top-[0rem] h-full "
                  />
                  <p className=" text-center text-lg">2000</p>
                </div>
                <div className="flex justify-between items-center ">
                  <button className="rounded-full border border-white flex justify-center items-center w-5 h-5 text-center">
                    -
                  </button>

                  <button className="custom-gradient px-3 py-1 text-base  btn-parent group flex flex-col">
                    <span className="btn-child group-hover:w-24 group-hover:h-24"></span>
                    <p className="basis-full">Chaal</p>
                    <p>12312</p>
                  </button>
                  <button className="bg-Secondary rounded-full border border-white  flex justify-center items-center w-5 h-5">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isLandscape && (
        <div className="rotate-message bg-red-500 text-white p-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Please rotate your device for a better gaming experience.
        </div>
      )}
    </div>
  );
};

export default GamePage;

// 320 x 568
// 360 x 800/780/880
// 375 x 812
// 391 x 851
// 412 x 915
// 414 x 896
// 428 x 926

// 768 x 1024
// 800 x 1280
// 820 x 1180
// 834 x 1194
