"use client";
import React, { useState } from "react";
import { portfolio } from "./data";
import Image from "next/image";
import PorfolioView from "./PorfolioView";

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const closePortfolioView = () => {
    setSelectedItem(null);
  };

  return (
    <div className="w-[85%] mx-auto">
      <div className="pt-14">
        <h3
          data-aos="fade-up"
          className="text-[#969899] text-center text-6xl font-bold pb-5 font-prociono"
        >
          Portfolio
        </h3>
      </div>
      <div
        className="flex md:justify-center flex-wrap gap-10 py-6"
        data-aos="fade-up"
      >
        {portfolio.map((item) => (
          <div
            className="shadow-xl rounded-[10px] relative group cursor-pointer"
            key={item.id}
            onClick={() => handleItemClick(item)}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={350}
              height={350}
              className="rounded-[10px]"
            />
            <div className="absolute rounded-[10px] duration-300 flex justify-center items-center top-0 h-full bg-[#000000c8] w-full opacity-0 group-hover:opacity-100">
              <h3 className="text-white text-3xl font-semibold">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <PorfolioView setShow={closePortfolioView} item={selectedItem} />
      )}
    </div>
  );
};

export default Portfolio;
