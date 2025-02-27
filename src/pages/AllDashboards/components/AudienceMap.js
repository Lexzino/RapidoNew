import { MoreVertical } from 'lucide-react';

const AudienceMap = () => {
    const regions = [
        { name: 'Europe', users: 580 },
        { name: 'Asia', users: 103 },
        { name: 'Africa', users: 239 },
        { name: 'Australia', users: 78 },
        { name: 'America', users: 78 }
    ];

    return (
        <div className="bg-white rounded-lg p-6 shadow-sm w-full max-w-2xl">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">Audience Map Location</h2>
                    <p className="text-sm text-gray-500">Report Center</p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <MoreVertical size={20} className="text-gray-600" />
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 space-y-4">
                    {regions.map((region) => (
                        <div className="">
                        <div key={region.name} className="flex items-center justify-between">
                            <span className="text-gray-600">{region.name}</span>
                            <span className="text-sm text-gray-600 whitespace-nowrap">
                                    {region.users} Users
                                </span>
                            
                        </div>
                        <div className="flex items-center space-x-3">
                                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-blue-500 rounded-full"
                                        style={{
                                            width: `${(region.users / 580) * 100}%`
                                        }}
                                    />
                                </div>
                                </div>
                            </div>
                    ))}
                </div>

                <div className="w-full md:w-2/3">
                    <img
                        src="/images/MAP.svg"
                        alt="World Map"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>

            <div className="mt-4 flex justify-end">
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                    <span className="mr-2">SEE DETAILS</span>
                    <span className="text-lg">›</span>
                </button>
            </div>
        </div>
    );
};

export default AudienceMap;