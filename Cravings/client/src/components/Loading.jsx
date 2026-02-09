import React from "react";
import loadingGif from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-background text-text">
      <img
        src={loadingGif}
        alt="loading"
        className="w-40 h-40"
      />
    </div>
  );
};

export default Loading;
