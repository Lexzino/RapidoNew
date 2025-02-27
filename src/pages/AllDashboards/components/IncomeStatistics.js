import React from 'react';
import { MoreVertical} from 'lucide-react';
import { PieChart, Pie, Cell } from 'recharts';


const IncomeStatistics = () => {
  const data = [
    { name: 'Patient Services', value: 53, color: '#22C55E' },
    { name: 'Pharmacy Services', value: 31, color: '#F97316' },
    { name: 'Diagnostic Services', value: 16, color: '#86EFAC' }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-lg font-semibold text-gray-800">Income Statistics</h2>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <MoreVertical size={20} className="text-gray-600" />
        </button>
      </div>

      <div className="flex justify-center mb-5">
        <div className="w-48 h-48">
          <PieChart width={180} height={180}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.name} className="text-center">
            <p className="text-lg font-semibold mb-1" style={{ color: item.color }}>
              {item.value}%
            </p>
            <p className="text-xs text-gray-600">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default IncomeStatistics;