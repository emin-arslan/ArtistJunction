import React from "react";

const Navi = () => {
  return (
    <div className="flex p-5 ">
     <div className="w-2/12 p-1 centered-items sm:w-5/12  ">
           <span className="text-4xl text-red-500 ">Albumify</span>
     </div>
     <div className="w-9/12 sm:w-6/12   h-auto justify-end flex space-x-[2%]   ">
          <span className="p-2 centered-items text-gray-200 font-bold text-sm bg-[#e80c14] rounded-md hover:cursor-pointer hover:bg-[#d80c15]">Sign In</span>
     </div>
    </div>
  );
};

export default Navi;
