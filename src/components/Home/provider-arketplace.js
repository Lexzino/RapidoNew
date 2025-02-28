import React, { useState, useEffect } from "react";
import { useLanguage } from "../../LanguageContext"; // Import the context
import { translations } from "../../translations"; // Import translations
import ImageOne from "../../assets/images/market-1.png";
import ImageTwo from "../../assets/images/market-2.png";
import ImageThree from "../../assets/images/market-3.svg";

export default function ProvideMarketplace() {
  const { selectedLanguage, changeLanguage } = useLanguage(); // Use context for language
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [langUpdated, setLangUpdated] = useState(false); // State to trigger re-render on language change

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
    <div className="w-full mx-auto ">
      <div className="relative flex flex-col lg:flex-row justify-center items-center gap-4 bg-[#1A4402] p-6 lg:p-8">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1
            style={{ fontFamily: "DM Sans" }}
            className="text-[#EAF9D6] text-[22px] lg:text-[26px] font-medium leading-[35px] lg:leading-[40px]">
            {t.areYouProvider}
          </h1>
          <p
            style={{ fontFamily: "DM Sans" }}
            className="text-[#B2FF87] text-[16px] lg:text-[18px] font-normal leading-[28px] lg:leading-[30px] mt-3">
            {t.listYourPractice}
          </p>

          <button
            style={{ fontWeight: 500 }}
            className="text-[#1A4402] bg-[#EAF9D6] mt-4 rounded-[8px] text-[16px] flex items-center gap-2 px-4 py-3 font-medium">
            {t.enlistPracticeOrStore}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 2.00134C12.8322 1.99991 12.6541 1.99997 12.463 2.00002L11.3572 2.00004C10.2734 2.00003 9.39926 2.00002 8.69138 2.05786C7.96253 2.11741 7.32234 2.24322 6.73005 2.54501C5.78924 3.02438 5.02434 3.78928 4.54497 4.73009C4.24318 5.32238 4.11737 5.96257 4.05782 6.69142C3.99998 7.3993 3.99999 8.27345 4 9.35723V14.6428C3.99999 15.7266 3.99998 16.6008 4.05782 17.3087C4.11737 18.0375 4.24318 18.6777 4.54497 19.27C5.02434 20.2108 5.78924 20.9757 6.73005 21.4551C7.32234 21.7569 7.96253 21.8827 8.69138 21.9422C9.39923 22.0001 10.2733 22.0001 11.3571 22H12.6428C13.7266 22.0001 14.6008 22.0001 15.3086 21.9422C16.0375 21.8827 16.6777 21.7569 17.27 21.4551C18.2108 20.9757 18.9757 20.2108 19.455 19.27C19.7568 18.6777 19.8826 18.0375 19.9422 17.3087C20 16.6008 20 15.7266 20 14.6428L20 9.53706C20.0001 9.34596 20.0001 9.16781 19.9987 9L17.1615 9C16.6343 9.00002 16.1795 9.00003 15.805 8.96943C15.4096 8.93713 15.0164 8.86581 14.638 8.67302C14.0735 8.3854 13.6146 7.92646 13.327 7.36197C13.1342 6.98359 13.0629 6.59037 13.0306 6.19503C13 5.82046 13 5.36569 13 4.83854L13 2.00134ZM9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13L15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11L9 11ZM8 16C8 15.4477 8.44772 15 9 15H12C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17H9C8.44772 17 8 16.5523 8 16Z"
                fill="#1A4402"
              />
              <path
                d="M19.7175 7C19.6004 6.66675 19.4483 6.34638 19.2632 6.0444C18.953 5.53819 18.5277 5.11309 17.9132 4.49897L17.5011 4.08685C16.8869 3.47238 16.4619 3.04705 15.9556 2.73684C15.6536 2.55178 15.3333 2.39959 15 2.28254V4.8C15 5.37655 15.0008 5.74883 15.0239 6.03216C15.0461 6.30383 15.0838 6.40455 15.109 6.45399C15.2049 6.64215 15.3578 6.79513 15.546 6.89101C15.5955 6.9162 15.6962 6.95388 15.9678 6.97607C16.2512 6.99922 16.6234 7 17.2 7H19.7175Z"
                fill="#1A4402"
              />
            </svg>
          </button>
        </div>

        {/* Images Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <img className="w-[180px] h-[140px] object-contain" src={ImageOne} alt="Image One" />
          <img className="w-[180px] h-[140px] object-contain" src={ImageTwo} alt="Image Two" />
        </div>

        {/* Decorative Image */}
        <img className="absolute bottom-[-10px] right-[-5px]" src={ImageThree} alt="Decoration" />
      </div>
    </div>
  );
}