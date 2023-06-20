import React from "react";
import { Link } from "react-router-dom";

const HomePageFirst = () => {
  return (
    <div className="w-full h-full sm:w-full  flex justify-center   ">
      <div className=" h-4/6 w-8/12 centered-items ">
        <div className="h-auto  ">
          <ul>
            <li className="text-3xl font-bold p-4 ">
              Are you interested in sharing something related to albums or
              artists?
            </li>
            <li className="text-xl w-full mt-5  centered-items">
              Share everyting about albums or artist
            </li>
            <li className="centered-items mt-5">
              Are you ready to share something? To sign up or access your
              account, all you need to do is enter your email address.
            </li>
          </ul>
          <div className="centered-items w-full mt-[2%]  space-x-1">
            <div className="w-4/12  ">
              <input
                placeholder="E-mail address"
                className="p-3 placeholder-white w-full bg-black bg-opacity-40 border-gray-500 border rounded-l"
              />
            </div>
            
            <div className=" w-2/12 p-3 bg-[#e80c14] rounded-r  centered-items hover:cursor-pointer hover:bg-[#d80c14]">
              <span className="font-semibold text-md">Start {">"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageFirst;
