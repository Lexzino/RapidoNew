import React from 'react';

export const PatientInfo = () => (
  <div className="bg-[#506B2C] rounded-xl p-4 h-[150px] f-f-li">
    <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 md:space-x-12 py-3 mt-">
      <div className="w-1/3 flex items-center space-x-4">
        <img src="/images/RiyaDoe.png" alt="Patient" className="w-24 h-24 rounded-lg" />
        <div className="text-white">
          <h3 className="font-semibold">Riya Doe</h3>
          <p className="text-xs opacity-80">24 Yrs | F | Feb 2002</p>
          <button className="bg-[#1A4402] px-4 py-1 mt-5 rounded-full text-sm w-full md:w-auto">
            More Details
          </button>
        </div>
      </div>
      <div className="text-white space-y-2 flex-1">
        <div className="text-sm opacity-80 border-l-2 border-white px-4 h-12">
          <p>Reason: General Health Checkup</p>
          <p>Time: 12:00 pm</p>
          <p>Source: Tele-visit</p>
        </div>

      </div>
    </div>
  </div>
);
