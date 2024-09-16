import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#051A22] w-full h-fit py-8 font-ebgaramond text-center text-white">
      <h3 className="text-xl">
        Copyright &copy; {new Date().getFullYear()} | All rights reserved
      </h3>
      <h3 className="text-base">
        Designed by <span className=" text-[#189FB0]">Maya Tunde olawale</span>
      </h3>
    </div>
  );
};

export default Footer;
