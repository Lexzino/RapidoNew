import React, { useState } from "react";
import Login from "../Login/Login"; // Import the Login component
import Signup from "../Register/Register"; // Import the Signup component

const AccountCreate = () => {
  const [drop, setDrop] = useState(false); // Toggle dropdown visibility
  const [popupOpen, setPopupOpen] = useState(false); // Control popup visibility
  const [activePopup, setActivePopup] = useState("login"); // Track whether it's login or signup

  const toggleDropdown = () => setDrop((prevDrop) => !prevDrop); // Toggle dropdown
  const handleOpenPopup = (type) => {
    setActivePopup(type);
    setPopupOpen(true); // Open the popup
  };
  const handleClosePopup = () => setPopupOpen(false); // Close the popup

  return (
    <li className="text-left w-full lg:w-auto relative">
      <div
        onClick={toggleDropdown}
        className="flex justify-start items-center gap-1 cursor-pointer lg:px-0 px-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14 21L12 23L10 21H4.99509C3.89323 21 3 20.1074 3 19.0049V4.99509C3 3.89323 3.89262 3 4.99509 3H19.0049C20.1068 3 21 3.89262 21 4.99509V19.0049C21 20.1068 20.1074 21 19.0049 21H14ZM19 19V5H5V19H10.8284L12 20.1716L13.1716 19H19ZM7.97216 18.1808C7.35347 17.9129 6.76719 17.5843 6.22083 17.2024C7.46773 15.2753 9.63602 14 12.1022 14C14.5015 14 16.6189 15.2071 17.8801 17.0472C17.3438 17.4436 16.7664 17.7877 16.1555 18.0718C15.2472 16.8166 13.77 16 12.1022 16C10.3865 16 8.87271 16.8641 7.97216 18.1808ZM12 13C10.067 13 8.5 11.433 8.5 9.5C8.5 7.567 10.067 6 12 6C13.933 6 15.5 7.567 15.5 9.5C15.5 11.433 13.933 13 12 13ZM12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11Z"
            fill="white"
          />
        </svg>
      </div>

      {drop && (
        <div
          id="dropdownNavbar"
          className="z-10 lg:absolute lg:right-0 lg:top-[35px] shadow min-w-[180px] lg:w-[250px] bg-green-light py-[49px] px-[28px] flex flex-col sm:w-[80%] sm:py-[20px] sm:px-[10px]"
        >
          {/* Login Button */}
          <button
            onClick={() => handleOpenPopup("login")}
            className="bg-green-dark w-full rounded-full h-[50px] text-[20px] text-white-light f-f-b mb-[10px] sm:mb-[5px]"
          >
            Log-in
          </button>
          {/* Signup Button */}
          <h2
            onClick={() => handleOpenPopup("signup")}
            className="text-green-dark f-f-b text-sm text-center pt-[10px] cursor-pointer"
          >
            Signup
          </h2>
        </div>
      )}

      {/* Popup */}
      {popupOpen && (
        <div
          className={`fixed inset-0 z-[99999999] bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${popupOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <div
            className="relative bg-white-light w-[90%] max-w-[1000px] min-h-[80vh] max-h-[90vh] sm:w-[95%] flex flex-col rounded-lg overflow-hidden transition-transform transform duration-300 ease-in-out"
            style={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              transform: popupOpen ? "scale(1)" : "scale(0.8)", // Slide-in effect
            }}
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 z-10"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.6 22.5L15 17.1L20.4 22.5L22.5 20.4L17.1 15L22.5 9.6L20.4 7.5L15 12.9L9.6 7.5L7.5 9.6L12.9 15L7.5 20.4L9.6 22.5ZM15 30C12.925 30 10.975 29.606 9.15 28.818C7.325 28.031 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.969 22.675 1.182 20.85C0.394 19.025 0 17.075 0 15C0 12.925 0.394 10.975 1.182 9.15C1.969 7.325 3.0375 5.7375 4.3875 4.3875C5.7375 3.0375 7.325 1.9685 9.15 1.1805C10.975 0.3935 12.925 0 15 0C17.075 0 19.025 0.3935 20.85 1.1805C22.675 1.9685 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.031 7.325 28.818 9.15C29.606 10.975 30 12.925 30 15C30 17.075 29.606 19.025 28.818 20.85C28.031 22.675 26.9625 24.2625 25.6125 25.6125C24.2625 26.9625 22.675 28.031 20.85 28.818C19.025 29.606 17.075 30 15 30ZM15 27C18.35 27 21.1875 25.8375 23.5125 23.5125C25.8375 21.1875 27 18.35 27 15C27 11.65 25.8375 8.8125 23.5125 6.4875C21.1875 4.1625 18.35 3 15 3C11.65 3 8.8125 4.1625 6.4875 6.4875C4.1625 8.8125 3 11.65 3 15C3 18.35 4.1625 21.1875 6.4875 23.5125C8.8125 25.8375 11.65 27 15 27Z"
                  fill="#1A4402"
                />
              </svg>
            </button>

            {/* Scrollable Content Area */}
            <div className="flex-grow overflow-y-auto">
              {activePopup === "login" ? (
                <Login className="w-full min-h-full" />
              ) : (
                <Signup className="w-full min-h-full" />
              )}
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default AccountCreate;