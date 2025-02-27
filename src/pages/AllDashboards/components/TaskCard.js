import React from 'react';

const ClockIcon = () => (
    <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
    </svg>
);

const CalendarIcon = () => (
    <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
        <path
            fill="currentColor"
            d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
        />
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
        <path
            fill="currentColor"
            d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.333a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm5.338-9.87a1.17 1.17 0 1 0 0 2.34 1.17 1.17 0 0 0 0-2.34z"
        />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
        <path
            fill="currentColor"
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
        />
    </svg>
);

const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
        <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        />
    </svg>
);

const TaskDashboard = () => {
    const socialStats = [
        {
            icon: <FacebookIcon />,
            count: "00001",
            bgClass: "bg-[#4267B2]"
        },
        {
            icon: <InstagramIcon />,
            count: "00001",
            bgClass: "bg-gradient-to-tr from-yellow-300 via-red-500 via-purple-500 to-blue-500"
        },
        {
            icon: <LinkedInIcon />,
            count: "00001",
            bgClass: "bg-[#0077B5]"
        },
        {
            icon: <TwitterIcon />,
            count: "00001",
            bgClass: "bg-black"
        }
    ];

    return (
        <div className="w-full px-2 py-2 bg-none">
            {/* Header */}
            <div className="flex items-center justify-between gap-3 mb-2">
                <div className="w-full flex flex-row items-center gap-1 bg-white rounded-md px-1 py-1 border border-black shadow-md">
                    <ClockIcon className="" />
                    <span className="text-[10px] text-gray-800  whitespace-nowrap">11:30-12:00 (GMT -3 Brazil)</span>
                </div>
                <div className="w-full flex flex-row items-center gap-2 bg-white rounded-md px-2 py-1 border border-black shadow-md">
                    <CalendarIcon />
                    <span className="text-[10px] text-gray-600 whitespace-nowrap">19.12.2020 - 25.12.2020</span>
                </div>
            </div>

            {/* Social Media Stats */}
            <div className="flex justify-between mb-2 mt-2">
                {socialStats.map((social, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full ${social.bgClass} flex items-center justify-center shadow-lg`}>
                            {social.icon}
                        </div>
                        <span className="text-xs font-medium">{social.count}</span>
                    </div>
                ))}
            </div>

            {/* Tasks Section */}
            <div className="rounded-xl bg-white border-transparent p-3 mt-3 ">
                <h2 className="text-lg font-semibold mb-2">Tasks</h2>
                <div className="space-y-4">
                    <div className="bg-orange-50 rounded-lg p-4 shadow-sm border-l-4 border-l-orange-400">
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-orange-400 text-white flex items-center justify-center text-sm font-bold">
                                !
                            </div>
                            <div>
                                <h3 className="text-orange-700 font-medium mb-1">Need Attention</h3>
                                <p className="text-sm text-gray-600">Adipiscing elit, sed do eiusmod</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 shadow-sm border-l-4 border-l-green-400">
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-400 text-white flex items-center justify-center text-sm">
                                ✓
                            </div>
                            <div>
                                <h3 className="text-green-700 font-medium mb-1">Success</h3>
                                <p className="text-sm text-gray-600">consectetur adipiscing elit sed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDashboard;