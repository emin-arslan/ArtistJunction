import React from "react";
import userLogo from "../../assets/userLogo.png";
const OtherUsersPosts = (props) => {
  return (
    <div className="w-full h-auto flex border-b border-gray-600">
      <div className="pl-5 pt-5   ">
        <div className="w-full  centered-items">
          <img src={userLogo} height={20} width={20} alt="userLogo"></img>
        </div>
      </div>
      <div className="w-11/12">
        <div className="pl-3 pt-3  flex justify-start">@EminArslan98</div>
        <div className="pl-3">
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wa</span>
        </div>
        <div className="pl-3 mt-5">
            <ul className="flex w-full space-x-10">
                <li>
                    Artist:
                </li>
                <li>
                    Date:
                </li>
                <li>
                    Type:
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default OtherUsersPosts;
