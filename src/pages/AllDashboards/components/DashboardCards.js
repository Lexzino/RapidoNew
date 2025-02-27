import React from 'react';
import { Users, Stethoscope, CalendarCheck, ChartBar } from 'lucide-react';

const ProgressBar = ({ color, progress }) => {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
      <div className={`h-full ${color}`} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

const DashboardCards = () => {
  const cards = [
    { icon: Users, title: 'New Patients', value: 125, color: 'bg-purple-500', progress: 70 },
    { icon: Stethoscope, title: 'OPD Patients', value: 218, color: 'bg-pink-400', progress: 50 },
    { icon: CalendarCheck, title: "Today's Operations", value: 25, color: 'bg-green-500', progress: 40 },
    { icon: ChartBar, title: 'Visitors', value: 2479, color: 'bg-yellow-400', progress: 60 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-2 md:p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs md:text-sm text-gray-500">{card.title}</p>
              <h3 className="text-base md:text-2xl font-bold">{card.value}</h3>
            </div>
            <card.icon className="text-gray-500" size={24} />
          </div>
          {/* Progress Bar */}
          <ProgressBar color={card.color} progress={card.progress} />
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;