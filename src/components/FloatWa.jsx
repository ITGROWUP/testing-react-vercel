import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FloatWa = () => {
  return (
      <a
        href="https://api.whatsapp.com/send?phone=6287845620888&text=Halo%20Antorma."
        className="animate-bounce z-[999] fixed w-16 h-16 bottom-5 right-5 bg-[#25d366] text-white rounded-full text-3xl flex items-center justify-center shadow-lg z-100"
        target="_blank"
      >
        <FontAwesomeIcon className="text-[40px]" icon={faWhatsapp} />
      </a>
  );
};

export default FloatWa;
