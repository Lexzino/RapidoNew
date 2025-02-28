import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; // Import the context
import { translations } from "../../translations"; // Import translations
import Google from "../../assets/images/Google play2.svg";
import Apple from "../../assets/images/Appss.svg";
import Heroimg1 from "../../assets/images/landing-hero.png";
import Heroimg2 from "../../assets/images/landing-hero.png";
import Heroimg3 from "../../assets/images/landing-hero.png";
import { DialogDefault } from "./Dilogbox/individul";
import DownloadButton from "./download-btn";
import WatchVideo from "./watch-video";

export default function Hero() {
  const { selectedLanguage, changeLanguage } = useLanguage(); // Use context for language
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [langUpdated, setLangUpdated] = useState(false); // State to trigger re-render on language change

  // Array of images for the carousel
  const images = [Heroimg1, Heroimg2, Heroimg3];

  // Change to selected slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Handle the auto-sliding of the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const handleOpen = () => setOpen(!open);

  const t = translations[selectedLanguage]; // Get the translation for the selected language

  // Use effect to force re-render when language changes
  useEffect(() => {
    setLangUpdated(false); // Reset state before language change
    const timeout = setTimeout(() => {
      setLangUpdated(true); // Update state after a brief delay
    }, 10); // Delay to allow the context to update
    return () => clearTimeout(timeout); // Cleanup timeout
  }, [selectedLanguage]); // Dependency on language change

  return (
    <div className="w-11/12 mx-auto 2xl:max-w-[1161px]"> 
      <div className="grid grid-cols-1 lg:grid-cols-12 py-20 pt-10 gap-10 lg:gap-5 xl:gap-0">
        <div className="col-span-1 lg:col-span-7 mt-14">
          <h1 className="f-f-m text-[45px] xl:text-[65px] text-green mt-2 uppercase">
            {t.heading}
          </h1>
          <div className="w-full lg:max-w-[475px]">
            <div className="f-f-m text-[35px] xl:text-[40px] text-white leading-[46px]">
              {t.subheading}
            </div>
          </div>

          <div className="w-full lg:max-w-[560px] mt-5 xl:mt-[40px]">
            <h5 className="mt-6 f-f-r text-[20px] xl:text-[30px] font-normal leading-[140%] text-white">
              {t.description}
            </h5>
          </div>

          <div className="flex justify-start flex-wrap items-center gap-3 mt-6 xl:mt-[60px]">
            <DownloadButton
              imageSrc={Google}
              primaryText="GET IT ON"
              secondaryText="Google Play"
            />
            <DownloadButton
              imageSrc={Apple}
              primaryText="Download on the"
              secondaryText="App Store"
            />
            <WatchVideo />
          </div>

          <div className="flex items-center mt-6 xl:mt-[24px] flex-col lg:flex-row gap-4">
            <button
              onClick={() => handleOpen()}
              className="bg-[#58FD0A] text-black py-2 px-8 rounded-lg text-[16px] font-normal hover:bg-[#45c204] transition-all w-full lg:w-auto"
            >
              {t.subscribeNav}
            </button>
            <span className="text-white text-[18px] font-normal mt-4 lg:mt-0">
              {t.becomeMember}
            </span>
          </div>
        </div>

        {/* Custom Carousel Section */}
        <div className="col-span-1 lg:col-span-5 relative">
          <div className="carousel-container overflow-hidden">
            <div
              className="carousel-slides flex transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className="carousel-slide w-full flex-shrink-0 relative"
                >
                  <img
                    src={img}
                    alt={`Slide ${index}`}
                     loading="lazy"
                    className="w-full h-auto transition-opacity duration-1000 ease-in-out opacity-0 animate-fadeIn"
                    style={{
                      opacity: currentIndex === index ? 1 : 0,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Dot Indicators */}
            <div className="dot-indicators flex justify-center absolute bottom-[-30px] left-0 right-0 py-4">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`dot mx-2 cursor-pointer transition-all duration-300 ease-in-out ${
                    index === currentIndex
                      ? "w-[20px] h-[8px] bg-[#28A745] rounded-[4px]"
                      : "w-[8px] h-[8px] bg-[#FFFFFF36] rounded-full"
                  }`}
                  onClick={() => goToSlide(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DialogDefault open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </div>
  );
}