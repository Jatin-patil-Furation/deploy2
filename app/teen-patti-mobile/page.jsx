"use client";
import Cardanimate from "@/components/Animation/Cardanimate";
import Image from "next/image";
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
    <div className=" relative text-white font-roboto bg-[url('/assets/landingPage/sikkaplaybg.svg')] bg-cover bg-no-repeat w-[100%]  ">
      {isLandscape && (
        <div className="  game-container w-[100%] h-screen overflow-clip">
          <div className="max-w-7xl mx-auto">
            {/* navbar */}
            <div className="navbar w-full  h-[12vh] border-2 border-yellow-600 flex px-2 justify-between m-0">
              <div className="nav-left-items basis-[25%] flex  items-center gap-5">
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
                  <p className="text-xs lg:text-base">Buy Coins</p>
                </button>
              </div>
              <div className="nav-right-items basis-[20%] flex items-center  justify-end gap-2">
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
            <div className="game w-full h-[70vh] border-2 border-red-600 ">
              <div className=" relative w-full h-full flex items-center justify-center">
                <img
                  src={"/assets/Game-table/table-background.svg"}
                  alt="table"
                  width={800}
                  height={500}
                  className="w-[80%] h-[80%] z-[50] "
                />
                <img
                  className="absolute left-[49%] top-3  w-[13%] ml:left-[49.5%] lg:w-[20%] lg:top-4 z-[51]  transform -translate-x-1/2 -translate-y-1/2 "
                  src={"/assets/Game-table/Game-host.svg"}
                  alt="game-host"
                  width={80}
                  height={80}
                />
                {/* left-top */}
                <div className="absolute h-[30%] w-[20%] ml:w-[17%] xs:left-[15%] xs:top-[-2%] ml:left-[18%]  lg:top-[-3%] lg:left-[13%] border border-red-800   z-[51]">
                  {/* image */}
                  <div className="relative inset-0 h-full  ">
                    <div className="w-[40%]  ml-auto flex flex-col justify-center items-center">
                      <p className="text-xxs mls:text-xs text-center lg:text-base">
                        Player name
                      </p>
                      <div
                        style={{
                          backgroundImage: `url("/assets/drawer/user-avatar.svg")`,
                        }}
                        className="w-10 h-10 xs:w-10 xs:h-10 sm:w-12 sm:h-12 ml:w-14 ml:h-14 lg:w-24 lg:h-24 customsms:w-12 customsms:h-12    rounded-full  bg-center bg-no-repeat bg-cover relative overflow-hidden   ring-1 ring-white "
                      >
                        <div className="absolute w-full h-[30%] bg-GreyLight opacity-80   left-1/2 bottom-0 transform -translate-x-1/2  text-center text-xxs ml:text-xs   ">
                          packed
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-0 bottom-0 w-[30%] ">
                      <div className="relative bg-GreyDark opacity-80 border-GreyDark border-y-white border-y-[1px] ">
                        <Image
                          src="/assets/Game-table/red-chip.svg"
                          alt="red-chip"
                          width={50}
                          height={50}
                          className="absolute -left-5 lg:-left-8 h-full top-0"
                        />
                        <p className="text-xxs text-center py-[.05rem] lg:text-xl">
                          5000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* right-top */}
                <div className="absolute h-[30%] w-[20%]  ml:w-[17%] xs:right-[15%] xs:top-[-2%] ml:right-[18%]  lg:top-[-3%] lg:right-[13%] border border-red-800   z-[51]">
                  {/* image */}
                  <div className="relative inset-0 h-full  ">
                    <div className="w-[40%]  mr-auto flex flex-col justify-center items-center">
                      <p className="text-xxs mls:text-xs text-center lg:text-base">
                        Player name
                      </p>
                      <div
                        style={{
                          backgroundImage: `url("/assets/drawer/user-avatar.svg")`,
                        }}
                        className="w-10 h-10 xs:w-10 xs:h-10 sm:w-12 sm:h-12 ml:w-14 ml:h-14 lg:w-24 lg:h-24 customsms:w-12 customsms:h-12    rounded-full  bg-center bg-no-repeat bg-cover relative overflow-hidden   ring-1 ring-white "
                      >
                        <div className="absolute w-full h-[30%] bg-GreyLight opacity-80   left-1/2 bottom-0 transform -translate-x-1/2  text-center text-xxs ml:text-xs   ">
                          packed
                        </div>
                      </div>
                    </div>
                    <div className="absolute right-0 bottom-0 w-[30%] ">
                      <div className="relative bg-GreyDark opacity-80 border-GreyDark border-y-white border-y-[1px] ">
                        <Image
                          src="/assets/Game-table/red-chip.svg"
                          alt="red-chip"
                          width={50}
                          height={50}
                          className="absolute -left-5 lg:-left-8 h-full top-0"
                        />
                        <p className="text-xxs text-center py-[.05rem] lg:text-xl">
                          5000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* left-middle */}
                <div className="absolute h-[34%]  lg:h-[30%] w-[20%]  ml:w-[17%]  xs:left-[8%] xs:top-[30%] ml:left-[12%] lg:left-[2%] lg:top-[30%] border border-red-800   z-[51]">
                  {/* image */}
                  <div className="relative inset-0 h-full space-y-3">
                    <div className="w-[40%]  mx-auto flex flex-col justify-center items-center ">
                      <p className="text-xxs mls:text-xs text-center lg:text-base">
                        Player name
                      </p>
                      <div
                        style={{
                          backgroundImage: `url("/assets/drawer/user-avatar.svg")`,
                        }}
                        className="w-10 h-10 xs:w-10 xs:h-10 sm:w-12 sm:h-12 ml:w-14 ml:h-14 lg:w-24 lg:h-24 customsms:w-12 customsms:h-12    rounded-full  bg-center bg-no-repeat bg-cover relative overflow-hidden   ring-1 ring-white "
                      >
                        <div className="absolute w-full h-[30%] bg-GreyLight opacity-80   left-1/2 bottom-0 transform -translate-x-1/2  text-center text-xxs ml:text-xs   ">
                          packed
                        </div>
                      </div>
                    </div>
                    <div className=" left-1/2 bottom-0  w-[40%] mx-auto">
                      <div className="relative bg-GreyDark opacity-80 border-GreyDark border-y-white border-y-[1px] ">
                        <Image
                          src="/assets/Game-table/red-chip.svg"
                          alt="red-chip"
                          width={50}
                          height={50}
                          className="absolute -left-5 lg:-left-8 h-full top-0"
                        />
                        <p className="text-xxs text-center py-[.05rem] xs:px-2 lg:text-xl">
                          5000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* right-middle */}
                <div className="absolute h-[34%] lg:h-[30%] w-[20%]  ml:w-[17%] xs:right-[8%] xs:top-[30%] ml:right-[12%] lg:right-[2%] lg:top-[30%]  border border-red-800   z-[51]">
                  {/* image */}
                  <div className="relative inset-0 h-full  space-y-3">
                    <div className="w-[40%]  mx-auto flex flex-col justify-center items-center ">
                      <p className="text-xxs mls:text-xs text-center lg:text-base">
                        Player name
                      </p>
                      <div
                        style={{
                          backgroundImage: `url("/assets/drawer/user-avatar.svg")`,
                        }}
                        className="w-10 h-10 xs:w-10 xs:h-10 sm:w-12 sm:h-12 ml:w-14 ml:h-14 lg:w-24 lg:h-24 customsms:w-12 customsms:h-12    rounded-full  bg-center bg-no-repeat bg-cover relative overflow-hidden   ring-1 ring-white "
                      >
                        <div className="absolute w-full h-[30%] bg-GreyLight opacity-80   left-1/2 bottom-0 transform -translate-x-1/2  text-center text-xxs ml:text-xs   ">
                          packed
                        </div>
                      </div>
                    </div>
                    <div className=" right-1/2 bottom-0 w-[40%] mx-auto ">
                      <div className="relative bg-GreyDark opacity-80 border-GreyDark border-y-white border-y-[1px] ">
                        <Image
                          src="/assets/Game-table/red-chip.svg"
                          alt="red-chip"
                          width={50}
                          height={50}
                          className="absolute -left-5 lg:-left-8 h-full top-0"
                        />
                        <p className="text-xxs text-center py-[.05rem] xs:px-2 lg:text-xl">
                          5000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* left-bottom */}
                <div className="absolute h-[30%] w-[20%] xs:left-[13%]  ml:w-[17%] xs:bottom-[-2%] ml:left-[16%]  lg:bottom-[1%] lg:left-[12%] border border-red-800   z-[51]">
                  {/* image */}
                  <div className="relative inset-0 h-full  ">
                    <div className="w-[40%]  ml-auto flex flex-col justify-center items-center">
                      <p className="text-xxs mls:text-xs text-center lg:text-base">
                        Player name
                      </p>
                      <div
                        style={{
                          backgroundImage: `url("/assets/drawer/user-avatar.svg")`,
                        }}
                        className="w-10 h-10 xs:w-10 xs:h-10 sm:w-12 sm:h-12 ml:w-14 ml:h-14 lg:w-24 lg:h-24 customsms:w-12 customsms:h-12    rounded-full  bg-center bg-no-repeat bg-cover relative overflow-hidden   ring-1 ring-white "
                      >
                        <div className="absolute w-full h-[30%] bg-GreyLight opacity-80   left-1/2 bottom-0 transform -translate-x-1/2  text-center text-xxs ml:text-xs   ">
                          packed
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-0 bottom-0 w-[30%] ">
                      <div className="relative bg-GreyDark opacity-80 border-GreyDark border-y-white border-y-[1px] ">
                        <Image
                          src="/assets/Game-table/red-chip.svg"
                          alt="red-chip"
                          width={50}
                          height={50}
                          className="absolute -left-5 lg:-left-8 h-full top-0"
                        />
                        <p className="text-xxs text-center py-[.05rem] lg:text-xl">
                          5000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* right-bottom */}
                <div className="absolute h-[30%] w-[20%] xs:right-[15%]  ml:w-[17%] xs:bottom-[-2%] ml:right-[18%]  lg:bottom-[1%] lg:right-[13%] border border-red-800   z-[51]">
                  {/* image */}
                  <div className="relative inset-0 h-full  ">
                    <div className="w-[40%]  mr-auto flex flex-col justify-center items-center">
                      <p className="text-xxs mls:text-xs text-center lg:text-base">
                        Player name
                      </p>
                      <div
                        style={{
                          backgroundImage: `url("/assets/drawer/user-avatar.svg")`,
                        }}
                        className="w-10 h-10 xs:w-10 xs:h-10 sm:w-12 sm:h-12 ml:w-14 ml:h-14 lg:w-24 lg:h-24 customsms:w-12 customsms:h-12    rounded-full  bg-center bg-no-repeat bg-cover relative overflow-hidden   ring-1 ring-white "
                      >
                        <div className="absolute w-full h-[30%] bg-GreyLight opacity-80   left-1/2 bottom-0 transform -translate-x-1/2  text-center text-xxs ml:text-xs   ">
                          packed
                        </div>
                      </div>
                    </div>
                    <div className="absolute right-0 bottom-0 w-[30%] ">
                      <div className="relative bg-GreyDark opacity-80 border-GreyDark border-y-white border-y-[1px] ">
                        <Image
                          src="/assets/Game-table/red-chip.svg"
                          alt="red-chip"
                          width={50}
                          height={50}
                          className="absolute -left-5 lg:-left-8 h-full top-0"
                        />
                        <p className="text-xxs text-center py-[.05rem] lg:text-xl">
                          5000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* player */}
                <div className="absolute h-[35%] w-[20%]  ml:w-[17%] z-[51] left-[40%] bottom-0 border border-red-800 flex justify-center items-center">
                  <div
                    style={{
                      backgroundImage: `url("/assets/drawer/user-avatar.svg")`,
                    }}
                    className="w-14 h-14 xs:w-14 xs:h-14 sm:w-16 sm:h-16 ml:w-20 ml:h-20 lg:w-32 lg:h-32  customsms:w-12 customsms:h-12    rounded-full  bg-center bg-no-repeat bg-cover relative overflow-hidden   ring-1 ring-white "
                  >
                    <div className="absolute w-full h-[100%] bg-GreyLight opacity-80   left-1/2 bottom-0 transform -translate-x-1/2  text-center text-xxs flex justify-center items-center   ">
                      <p className="text-xs xs:text-sm sm:text-base">Packed</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Cardanimate /> */}
            </div>
            {/* footer */}
            <div className="footer h-[10vh] lg:h-[8vh] my-3 border-2 border-green-600 flex w-[80%] mx-auto justify-between ">
              <button className="custom-gradient px-1  text-xs xs:text-sm xs:px-3 lg:text-xl lg:px-4">
                Pack
              </button>
              <button className="custom-gradient px-1  text-xs xs:text-sm xs:px-3 lg:text-xl lg:px-4">
                Side Show
              </button>
              <div
                className={`relative bg-GreyDark opacity-80 border-GreyDark border-y-white border-y-[1px] transform flex justify-center items-center transition-transform duration-[3000] ease-in-out z-[1000] `}
              >
                <img
                  src={"/assets/Game-table/red-chip.svg"}
                  alt="red-chip"
                  width={50}
                  height={50}
                  className="absolute left-[-1.5rem] top-[0rem] h-full "
                />
                <p className=" text-center text-xs px-8  xs:text-sm lg:text-base">
                  2000
                </p>
              </div>
              <div className="flex justify-between items-center gap-2 ">
                <button className="rounded-full border border-white flex justify-center items-center  text-center w-5 h-5 lg:w-8 lg:h-8">
                  &minus;
                </button>

                <button className="custom-gradient px-1 py-1 text-base  btn-parent group flex flex-col ">
                  <span className="btn-child group-hover:w-24 group-hover:h-24"></span>
                  <p className="basis-full text-xs xs:text-xs xs:px-3 lg:text-xl lg:px-4">
                    Chaal
                  </p>
                  <p className="text-xs xs:text-xs xs:px-3 lg:text-xl lg:px-4">
                    12312
                  </p>
                </button>
                <button className="bg-Secondary rounded-full border border-white  flex justify-center items-center w-5 h-5 lg:w-8 lg:h-8">
                  +
                </button>
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

//         xs: "560px",
//         sm: "640px",
//         md: "768px",
//         mds: "780px",
//         ml: "810px",
//         mls: "844px",
//         mlg: "896px",
//         mlx: "926px",
//         lg: "1024px",
//         sml: "1100px",
//         xl: "1280px",
//         mxl: "1400px",
