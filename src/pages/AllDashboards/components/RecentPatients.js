import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

const RecentPatients = () => {
    const patients = [
        {
            id: 1,
            name: "Ola Akintola",
            visitId: "UI/201",
            date: "12-01-2025",
            gender: "Male",
            case: "Diabetes",
            status: "Out - Patient",
            image: "/images/Ola.png"
        },
        {
            id: 2,
            name: "Janet Paul",
            visitId: "UI/221",
            date: "14-01-2025",
            gender: "Male",
            case: "Diabetes",
            status: "Out - Patient",
            image: "/images/Janet.png"
        },
        {
            id: 3,
            name: "Areogun Joe",
            visitId: "UI/232",
            date: "16-01-2025",
            gender: "Male",
            case: "Diabetes",
            status: "Out - Patient",
            image: "/images/Areogun.png"
        },
        {
            id: 4,
            name: "Ola Akintola",
            visitId: "UI/243",
            date: "17-01-2025",
            gender: "Male",
            case: "Diabetes",
            status: "Out - Patient",
            image: "/images/Ola.png"
        },
        {
            id: 5,
            name: "Ola Akintola",
            visitId: "UI/254",
            date: "18-01-2025",
            gender: "Male",
            case: "Diabetes",
            status: "Out - Patient",
            image: "/images/Ola.png"
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 max-w-6xl mx-auto">
            <h2 className="text-green-800 text-xl font-medium mb-4">Recent Patients</h2>

            {/* Scroll container with shadows */}
            <div className="relative">
                {/* <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20 hidden md:block">
          <ChevronLeft className="w-6 h-6 text-green-600 opacity-50" />
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-20 hidden md:block">
          <ChevronRight className="w-6 h-6 text-green-600 opacity-50" />
        </div>  */}

                {/* Table with horizontal scroll */}
                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-transparent">
                    <table className="w-full min-w-[768px] border-separate border-spacing-y-2">
                        <thead>
                            <tr className="text-left">
                                <th className="pb-3 text-gray-500 font-normal whitespace-nowrap px-2">Patient Name</th>
                                <th className="pb-3 text-gray-500 font-normal whitespace-nowrap px-2">Visit ID</th>
                                <th className="pb-3 text-gray-500 font-normal whitespace-nowrap px-2">Date</th>
                                <th className="pb-3 text-gray-500 font-normal whitespace-nowrap px-2">Gender</th>
                                <th className="pb-3 text-gray-500 font-normal whitespace-nowrap px-2">Case</th>
                                <th className="pb-3 text-gray-500 font-normal whitespace-nowrap px-2">Status</th>
                            </tr>
                        </thead>
                        <tbody className=" ">
                            {patients.map((patient) => (
                                <tr
                                    key={patient.id}
                                    className="rounded-lg text-green-700 bg-green-50 space-y-4 hover:bg-green-100 transition-colors mb-2"
                                >
                                    <td className="py-3 px-2 flex items-center space-x-2 whitespace-nowrap ">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                                            <div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden">
                                                <img
                                                    src={patient.image}
                                                    alt={patient.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            {/* <span className="text-green-700 text-sm">
                                            {patient.name.split(' ').map(n => n[0]).join('')}
                                            </span> */}
                                        </div>
                                        <span className="text-green-700">{patient.name}</span>
                                    </td>
                                    <td className="py-3 px-2  whitespace-nowrap">{patient.visitId}</td>
                                    <td className="py-3 px-2  whitespace-nowrap">{patient.date}</td>
                                    <td className="py-3 px-2  whitespace-nowrap">{patient.gender}</td>
                                    <td className="py-3 px-2  whitespace-nowrap">{patient.case}</td>
                                    <td className="py-3 px-2  whitespace-nowrap">{patient.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile scroll hint */}
            <div className="text-sm text-gray-400 text-center mt-2 md:hidden">
                Swipe left or right to view more
            </div>
        </div>
    );
};

export default RecentPatients;