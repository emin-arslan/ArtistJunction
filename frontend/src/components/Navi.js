import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navi = () => {
  const location = useLocation();
  return (
    
    <div className="flex p-5 bg-gradient-to-b from-black  ">
     <div className="w-2/12 p-1 centered-items sm:w-5/12  ">
         <Link to={"/"}>  <span className="text-4xl text-[#e80c14] font-semibold">Albumify</span></Link>
     </div>
     
     <div  className="w-9/12 sm:w-6/12   h-auto justify-end flex space-x-[2%]   ">
      <Link to={"/signup"}><span className="p-2 w-20 h-10 centered-items text-gray-200 font-bold text-sm bg-[#e80c14] rounded-md hover:cursor-pointer hover:bg-[#d80c15]">Sign Up</span>
      </Link>   </div>
    </div>
  );
};

export default Navi;
