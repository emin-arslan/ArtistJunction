import React from "react";
import OtherUsersPosts from "./OtherUsersPosts";

const SharePosts = () => {
  return (
    <div className="w-5/12 h-screen border-l border-r border-gray-700   space-y-10">
      <div className="w-full p-5">
        <span className="text-2xl font-semibold text-gray-300">
          Share Something
        </span>
        <div className="w-full flex">
          <input
            placeholder="Share about albums or artist"
            className="p-3 placeholder-white w-9/12 bg-black bg-opacity-40 border-gray-500 border rounded-l"
          />
          <div className="w-3/12 rounded-r centered-items bg-[#e80c14] hover:bg-[#d80c14] h-cursor-p">
            <span className="text-xl">Share</span>
          </div>
        </div>
      </div>

      <OtherUsersPosts />
      <OtherUsersPosts />

    </div>
  );
};

export default SharePosts;
