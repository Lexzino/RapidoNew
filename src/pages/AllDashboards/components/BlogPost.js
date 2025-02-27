import React from 'react';


const BlogAndAnnouncements = () => {
  const announcements = [
    {
      id: 1,
      text: "Meeting has been reschedule for 28 may....",
      image: "/images/announcement(1).png"
    },
    {
      id: 2,
      text: "We request our doctor to use our website....",
      image: "/images/announcement(2).png"
    },
    {
      id: 3,
      text: "Dr Faisal has completed 400 surgery. Congrat....",
      image: "/images/announcement(3).png"
    }
  ];

  return (
    <div className="space-y-3">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
        <div className="p-6">
        <span className="w-3 h-3 inline-flex border rounded-full bg-green-300"></span>
        <span className="inline-flex items-center text-sm font-xl text-green-800">
            BLOG POST
          </span>
          <h2 className="text-base font-semibold mt-4 text-green-800">
            Equitable medical education with efforts toward real change
          </h2>
        </div>
        <img
          src="/images/Blogpost.png"
          alt="Medical supplies"
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-green-800 mb-4">Announcements</h2>
        <div className="space-y-2">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="flex items-center gap-3 border rounded-full p-2 bg-white shadow-md">
              <img
                src={announcement.image}
                alt=""
                className="w-5 h-5 rounded-full"
              />
              <p className="text-black text-xs">{announcement.text}</p>
            </div>
          ))}
        </div>
        <button className="mt-4 text-green-700 hover:text-green-800 text-base flex justify-end">
          See more
        </button>
      </div>
    </div>
  );
};


export default BlogAndAnnouncements;