import React from "react";

const HomePageLeft = () => {
  return (
    <div className="w-5/12 sm:w-full  ">
      <div className="w-full h-1/6 flex justify-center  items-center ">
        <span className="text-2xl w-10/12 sm:w-full sm:centered-items font-semibold sm:text-lg">
          Interested in sharing about albums or artists?
        </span>
      </div>
      <div className="h-2/6 centered-items ">
        <div className="w-10/12 h-auto space-y-2  ">
          <span className="sm:w-12/12 sm:centered-items text-xl  font-semibold text-red-500">
            Join us Now!
          </span>
          <div className="space-y-[5%] ">
            <div className="w-7/12 h-auto lg:w-10/12 xl:w-8/12 md:w-full sm:w-full sm:centered-items br">
              <input
                placeholder="E-mail"
                className="w-full sm:w-10/12 p-2 text-black rounded border-2 focus:outline-none focus:border-[#d80c14] "
              ></input>
            </div>
            <div className="w-7/12 h-auto md:w-full lg:w-10/12 xl:w-8/12   sm:w-full sm:centered-items rounded">
              <input
                placeholder="Password"
                type="password"
                className="w-full p-2  sm:w-10/12 text-black rounded border-2 focus:outline-none focus:border-[#d80c14]  "
              ></input>
            </div>
            <div className="sm:centered-items  sm:w-full">
              <div className="w-7/12 sm:w-10/12 md:w-full xl:w-8/12  lg:w-10/12  p-2 centered-items rounded bg-[#e80c14] hover:cursor-pointer hover:bg-[#d80c14] ">
                <span className="font-semibold">Sign Up</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageLeft;
