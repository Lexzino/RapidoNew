import React from 'react';

function Announcement() {
  const announcements = [
    { 
      title: 'Meeting has been rescheduled', 
      author: 'System',
      date: '26 May'
    },
    { 
      title: 'We request our doctor to use our website', 
      author: 'Admin',
      date: '24 May'
    },
    { 
      title: 'Dr Faisal has completed 400 surgery', 
      author: 'HR Department',
      date: '22 May'
    }
  ];

  return (
      <div className="bg-white rounded-lg shadow-md p-3 md:p-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 md:mb-4 space-y-2 md:space-y-0">
              <h3 className="text-base md:text-lg font-semibold">Announcements</h3>
              <button className="text-green-600 hover:bg-green-50 px-2 py-1 rounded text-sm">
                  See more
              </button>
          </div>
          {announcements.map((announcement, index) => (
              <div
                  key={index}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center border-b py-2 md:py-3 last:border-b-0 space-y-1 md:space-y-0"
              >
                  <div>
                      <h4 className="text-sm md:text-base font-medium">{announcement.title}</h4>
                      <p className="text-xs md:text-sm text-gray-500">{announcement.author}</p>
                  </div>
                  <span className="text-xs md:text-sm text-gray-500">{announcement.date}</span>
              </div>
          ))}
      </div>
  );
}

export default Announcement;