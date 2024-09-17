import { ICONS } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PortfolioProp } from "./data";

type QuickView = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  item: PortfolioProp;
};

const PorfolioView = ({ setShow, item }: QuickView) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="800"
      className="fixed w-full h-screen top-0 left-0 bg-[#000000b0] z-50 flex justify-center items-center"
    >
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1200"
        className="relative w-[95%] md:w-[60%] overflow-y-scroll h-[85vh] md:h-[75vh] bg-white rounded-lg p-6 shadow-md md:flex-row flex-col flex"
      >
        <div className="mb-8 md:mb-0">
          <ICONS.close
            size={30}
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setShow(false)}
          />
        </div>
        <div className="md:w-1/2 w-full p-4 shadow-lg">
          <Image
            src={item.image}
            alt={item.name}
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="md:w-1/2 w-full p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-4">{item.name}</h3>
            <p className="text-gray-600 text-base leading-6 mb-6 font-ebgaramond">
              {item.desc}
            </p>
          </div>

          <div className="flex gap-4 text-base md:text-lg">
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00a9b8] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#0095a3] transition"
            >
              View Live
            </Link>
            <Link
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#00a9b8] text-[#00a9b8] font-semibold px-6 py-2 rounded-md hover:bg-[#00a9b8] hover:text-white transition"
            >
              View on Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorfolioView;
