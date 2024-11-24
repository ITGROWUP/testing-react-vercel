import React from "react";
import Flag from "../assets/group_bendera.png";

const Ekspor = () => {
  return (
    <div className="flex justify-evenly items-center px-20 h-[80vh]">
      <img className="w-[30%]" src={Flag} alt="" />
      <div className="">
        <h1 className="font-extrabold text-5xl">
          telah <span className="text-blue-700">eksport</span> ke <br />{" "}
          <span className="text-blue-700">berbagai negara</span>
        </h1>
      </div>
    </div>
  );
};

export default Ekspor;
