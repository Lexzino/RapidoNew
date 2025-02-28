import React, { useState, useEffect } from "react";
import Individual from "../../../assets/images/Individual.svg";
import { useAuth } from "../../services/authService";
import { Dialog, DialogBody } from "@material-tailwind/react";
import Joiningdlg from "./Joining";
import { getIPAndCountry } from "../../services/getRegion";
import { message } from "antd";

export const DialogDefault = ({ open, setOpen, handleOpen }) => {
  const { userSignup } = useAuth();

  const [activeTab, setActiveTab] = useState("Individual");
  const [joiningbox, setjoiningbox] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [region, setRegion] = useState("");
  const [userData, setUserData] = useState({});

  const handleInitialValues = () => {
    setName("");
    setEmail("");
    setProfession("");
    setRegion("");
    setUserData({});
  };

  const handleChangeTab = (val) => {
    setActiveTab(val);
    handleInitialValues();
  };
  const handleClose = () => {
    setjoiningbox(false);
  };
  const handleBoth = () => {
    handleInitialValues();
    handleOpen();
  };
  const handleOpenjoin = async () => {
    await getIPAndCountry().then(({ ip, country }) => {
      console.log(country, "countrycountry");
      setRegion(country);
      let role = activeTab === "Individual" ? "individual" : "professional";
      let userDataObj;
      if (role === "individual") {
        userDataObj = { name, email, role, region: country };
      } else {
        userDataObj = { name, email, profession, role, region: country };
      }
      setUserData(userDataObj);
      subscribeUser();
    });
  };

  const subscribeUser = async () => {
    try {
      if (userData && Object.keys(userData).length > 0) {
        if (
          !userData.name ||
          !userData.email ||
          (activeTab === "Professional" && !profession)
        ) {
          activeTab === "Professional"
            ? message.error("user's name, email and profession cannot be empty")
            : message.error("user's name and email cannot be empty");
          return;
        }
        await userSignup(userData).then((res) => {
          if (!res?.response?.data?.error) {
            message.success("User successfully registered");
            setOpen(false);
            setjoiningbox(!joiningbox);
            handleInitialValues();
          } else {
            message.error(res?.response?.data?.error);
          }
        });
      }
    } catch (error) {
      console.error("Error subscribing user:", error);
    }
  };

  return (
    <>
      <div
        className={`absolute w-full left-0 h-screen top-0 z-[99999999] transition-all duration-300 ease-in-out transform ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex w-full h-full justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="bg-green-light w-full max-w-4xl relative p-6 sm:p-8 md:p-10 rounded-[25px] overflow-hidden h-[90vh] flex flex-col">
            <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-green-dark scrollbar-track-green-light">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                <div className="md:col-span-6 flex justify-center">
                  <img
                    src={Individual}
                    className="w-full max-w-[325px] h-auto object-contain"
                    alt="Individual"
                  />
                </div>
                <div className="md:col-span-6 flex flex-col justify-start">
                  <h1 className="f-f-b-t text-green-dark text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center md:text-left">
                    Get early access before <br />
                    the general public.
                  </h1>

                  <div className="w-full flex justify-center md:justify-start mt-6 sm:mt-8 md:mt-10">
                    <div className="w-[251px] h-[41px] border-[2px] border-green-dark rounded-md p-[6px] inline-flex space-x-4 items-center">
                      <button
                        className={`w-[104px] h-[30px] bg-${
                          activeTab === "Individual" ? "green-dark" : "transparent"
                        } rounded-[5px] f-f-r text-${
                          activeTab === "Individual" ? "white" : "green-dark"
                        } text-lg sm:text-xl md:text-2xl`}
                        onClick={() => handleChangeTab("Individual")}
                      >
                        Individual
                      </button>
                      <button
                        className={`w-[130px] h-[30px] bg-${
                          activeTab === "Professional" ? "green-dark" : "transparent"
                        } rounded-[5px] f-f-r text-${
                          activeTab === "Professional" ? "white" : "green-dark"
                        } text-lg sm:text-xl md:text-2xl`}
                        onClick={() => handleChangeTab("Professional")}
                      >
                        Professional
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 space-y-4">
                    <input
                      type="text"
                      className="w-full h-[45px] f-f-m text-base text-red-vlight border-[1.5px] border-green-dark rounded-[5px] outline-none pl-4"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="text"
                      className="w-full h-[45px] f-f-m text-base text-red-vlight border-[1.5px] border-green-dark rounded-[5px] outline-none pl-4"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {activeTab === "Professional" && (
                      <input
                        type="text"
                        className="w-full h-[45px] f-f-m text-base text-red-vlight border-[1.5px] border-green-dark rounded-[5px] outline-none pl-4"
                        placeholder="Area of profession"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                      />
                    )}
                    <button
                      onClick={handleOpenjoin}
                      className="w-full h-[50px] bg-green-dark rounded-[5px] f-f-m text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase hover:bg-green-700 transition-colors"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleBoth()}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10"
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
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
          </div>
        </div>
      </div>

      <Joiningdlg
        joiningbox={joiningbox}
        setjoiningbox={setjoiningbox}
        handleOpenjoin={handleClose}
      />
    </>
  );
};