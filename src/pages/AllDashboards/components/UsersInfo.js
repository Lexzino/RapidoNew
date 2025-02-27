import { MoreVertical, Check } from 'lucide-react';

const Users = () => {
    const users = [
        {
            id: 1,
            name: "Michael Tosin Adesanwo",
            role: "Admin",
            date: "2024/06/01",
            permissions: {
                manageUserAccounts: true,
                seeAnalytics: true,
                editCompanyInfo: true,
                exportData: true
            }
        },
        {
            id: 2,
            name: "Toluwani Ogundele",
            role: "User",
            date: "2024/06/01",
            permissions: {
                manageUserAccounts: true,
                seeAnalytics: false,
                editCompanyInfo: true,
                exportData: false
            }
        }
    ];

    return (
        <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800">Users</h2>
                    <p className="text-sm text-gray-500">Role Management</p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <MoreVertical size={20} className="text-gray-600" />
                </button>
            </div>

            <div className="space-y-4">
                {users.map((user) => (
                    <div key={user.id} className={`p-4 rounded-lg ${user.role === 'User' ? 'bg-green-100' : 'bg-green-50'}`}>
                        <div className="flex justify-between gap-4 items-start mb-2">
                            <h3 className="font-medium text-sm">{user.name}</h3>
                            <div className="flex items-center gap-4">
                                <span className={`px-3 py-1 rounded-full text-sm ${user.role === 'Admin' ? 'bg-green-100 text-green-800' : 'bg-blue-50 text-blue-800'
                                    }`}>
                                    {user.role}
                                </span>
                                <span className="text-gray-800 text-sm">{user.date}</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center gap-2">
                                <Check size={16} className={user.permissions.manageUserAccounts ? 'text-green-600' : 'text-gray-400'} />
                                <span className="text-sm text-gray-600">Manage User Accounts</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check size={16} className={user.permissions.editCompanyInfo ? 'text-green-600' : 'text-gray-400'} />
                                <span className="text-sm text-gray-600">Edit Company Info</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check size={16} className={user.permissions.seeAnalytics ? 'text-green-600' : 'text-gray-400'} />
                                <span className="text-sm text-gray-600">See Analytics</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check size={16} className={user.permissions.exportData ? 'text-green-600' : 'text-gray-400'} />
                                <span className="text-sm text-gray-600">Export Data</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="mt-4 flex items-center text-gray-700 hover:text-gray-900">
                <span className="mr-2 text-base">SEE ALL USERS</span>
                <span className="text-base">›</span>
            </button>
        </div>
    );
};


export default Users;