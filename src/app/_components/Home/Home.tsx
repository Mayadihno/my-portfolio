"use client";
import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Portfolio from "../Porfolio/Portfolio";
import Contact from "../Contact/Contact";
import { Element } from "react-scroll";
import Footer from "../Footer/Footer";
import { ICONS } from "@/utils/icons";

const Home = () => {
  const [show, setShow] = useState(true);
  const [isChecked, setIsChecked] = useState(true);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const audioElement = new Audio("/portfolio.mp3");
      audioElement.loop = true;
      setAudio(audioElement);
    }
  }, []);

  const handleToggle = () => {
    const newStatus = isChecked;
    setIsChecked(newStatus);

    if (audio) {
      if (newStatus) {
        audio.play();
      } else {
        audio.pause();
      }
    }
    setShow(false);
  };

  useEffect(() => {
    return () => {
      if (audio) audio.pause();
    };
  }, [audio]);
  return (
    <div className=" max-w-full overflow-x-hidden">
      <div className="md:hidden block">
        {show && (
          <div
            data-aos="zoom-in"
            data-aos-duration="700"
            className="fixed w-full h-screen top-0 left-0 bg-[#000000b0] z-50 flex justify-center items-center"
          >
            <div className="relative p-6 md:hidden block w-[95%] mx-auto bg-[#189FB0] shadow-xl rounded-md">
              <div className="flex justify-center items-center flex-col">
                <div className=" bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
                  <ICONS.music size={40} color="#189FB0" />
                </div>
                <h3 className="text-white font-semibold text-3xl py-6">
                  Enable Music
                </h3>
                <p className="text-center text-white text-lg leading-8 pb-6">
                  Explore my portfolio with music to add depth to your visit.
                  You have the option to toggle it on or off anytime from the
                  navigation menu.
                </p>
                <div className="flex space-x-6">
                  <button
                    onClick={() => setShow(false)}
                    className="bg-[#116D7A]/70 px-5 py-3 text-white rounded-md text-center"
                  >
                    No, Thank You
                  </button>
                  <button
                    onClick={handleToggle}
                    className="bg-white px-8 py-3 text-[#189FB0s] rounded-md text-center"
                  >
                    Okay
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Element name="home">
        <Banner />
      </Element>
      <Element name="about me">
        <About />
      </Element>
      <Element name="work">
        <Resume />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

export default Home;
