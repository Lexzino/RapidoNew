import React from 'react';

export const CalendarView = () => {
    const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const currentDate = "10, January 2025";

    return (
        <div className="bg-white rounded-xl p-4">
            <div className="text-center mb-4">
                <h2 className="font-semibold">TODAY IS</h2>
                <p className="text-lg font-bold">{currentDate}</p>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                {days.map(day => (
                    <div key={day}>{day}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
                {[...Array(7)].map((_, index) => (
                    <div
                        key={index}
                        className={`p-2 ${index === 3 ? 'bg-green-100 text-green-800 rounded-lg' : ''}`}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>

            <div className="mt-4 flex items-center space-x-2">
                <div className="bg-green-100 rounded-full p-2">
                    <span className="text-green-800 text-sm">M</span>
                </div>
                <div className="flex-1">
                    <p className="text-sm font-medium">Next Week</p>
                    <p className="text-xs text-gray-500">Upcoming Schedules-2</p>
                </div>
                <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-lg">Open</span>
            </div>
        </div>
    );
};