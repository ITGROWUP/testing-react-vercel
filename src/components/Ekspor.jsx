import React from "react";
import Flag from "../assets/group_bendera.png";

const Ekspor = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center px-5 mt-10 md:px-10 lg:px-20 h-auto lg:h-[80vh] text-center lg:text-left">
      <img
        data-aos="zoom-out"
        data-aos-duration="1000"
        className="w-[70%] md:w-[50%] lg:w-[30%] mb-6 lg:mb-0"
        src={Flag}
        alt="Bendera"
      />
      <div data-aos="fade-down" data-aos-duration="1000">
        <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl leading-snug">
          telah <span className="text-blue-700">eksport</span> ke{" "}
          <br className="hidden lg:block" />
          <span className="text-blue-700">berbagai negara</span>
        </h1>
      </div>
    </div>
  );
};

export default Ekspor;
