import React from "react";
import CountdownTimer2 from "./CountdownTimer";
import { FaClock, FaWhatsapp } from "react-icons/fa";
import { BiCalendar, BiLocationPlus } from "react-icons/bi";

const UpcomingAppointment = () => {

  const countdown = null;

  return (
    <div className="w-full bg-white my-5 py-1 shadow-md flex flex-col justify-around items-center px-5 rounded-md">
      <div className="w-full flex flex-row justify-between items-center py-2 mb-2">
        <h3 className="font-bold text-green-dark text-base">Upcoming Appointment</h3>
        <button className="text-red-800 text-sm font-bold">View All</button>
      </div>
      <div className="w-full bg-green-dark flex flex-row justify-around items-center rounded-md py-2.5 mb-2.5">
        <div className="bg-white rounded-full px-2 py-2 w-1/12 flex flex-col justify-center items-start">
          <img src="/images/Smart.svg" className="w-10 h-10" />
        </div>
        <div className="w-1/3 flex flex-col justify-evenly items-start">
          <p className="text-white text-base leading-3"><strong>Dr. Alison Ogaga</strong></p>
          <p className="text-white text-sm">General Practitioner</p>

          <div className="flex flex-col justify-around items-start mt-2">
            <label className="text-white text-sm">Session starts in </label>  
            <CountdownTimer2 targetDate={'2025-04-02T23:59:59'}  />    
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-evenly items-start">
          <div className="rounded-md bg-[#EBF5F4] w-11/12 px-2 py-1 my-1.5 flex flex-row flex-wrap justify-start items-center">
            <p className="flex flex-row justify-start items-center mx-2 my-1">
              <BiCalendar size={10} />
              <label className="text-sm ml-1">October 28th, 2023</label>
            </p>
            <p className="flex flex-row justify-start items-center mx-2 my-1">
              <FaClock size={10} />
              <label className="text-sm ml-1">11:30 - 12:00</label>
            </p>
            <p className="flex flex-row justify-start items-center mx-2">
              <BiLocationPlus size={10} />
              <label className="text-sm ml-1">UK, Ikor, RW, USA</label>
            </p>
          </div>
          <label className="w-full h-0.5 bg-white my-2"></label>
          <div className="flex flex-row justify-start items-center">
            <button className="bg-white text-sm px-3.5 py-1.5 mr-1 rounded-full font-bold">Reschedule</button>
            <button className="bg-[#FC6960] flex flex-row justify-center items-center text-white text-sm px-3.5 py-1.5 mx-1 rounded-full font-bold">
              <FaWhatsapp size={12} />
              <label className="ml-1">Confirm Appointment</label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointment;
