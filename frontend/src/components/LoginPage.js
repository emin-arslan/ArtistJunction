import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full h-5/6  flex justify-center  ">
      <div className="w-3/12 h-4/6  p-14  mt-[4%] bg-black bg-opacity-70 drop-shadow-2xl space-y-[5%]">
        <div className="w-9/12  flex   opacity-90">
          <span className="text-white  text-2xl font-semibold ">
            Join to Family!
          </span>
        </div>
        <div className="space-y-[5%]">
          <div className="w-full  ">
            <span className="text-xs">E-posta or number</span>
            <input className="w-full p-3 bg-[#383434] rounded focus:outline-none focus:border-b focus:border-b-orange-400 border-b border-b-[#383434] "></input>
          </div>
          <div className="w-full  ">
            <span className="text-xs">Enter the password</span>
            <input  type="password" className="w-full p-3  bg-[#383434] rounded focus:outline-none focus:border-b focus:border-b-orange-400 border-b border-b-[#383434]"></input>
          </div>
          <div className="w-full bg-[#e80c14] p-3  rounded centered-items">
            <span>Sign In</span>
          </div>
          <div>
            <span className="text-sm"><input type="checkbox" className=""></input> Remember Me</span>
          </div>
        </div>
        <div>
            <span className="text-sm text-gray-400">Do you already have an account? <span className="text-white hover:underline hover:cursor-pointer">Login!</span></span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
