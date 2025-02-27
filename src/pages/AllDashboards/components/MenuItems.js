import React from "react"
import { FaBuilding, FaCalendar, FaEnvelope, FaHome, FaNewspaper, FaNotesMedical, FaShoppingBag, FaUser, FaUserAlt, FaUserGraduate, FaUserInjured } from "react-icons/fa"
import { BiSolidDashboard, BiHelpCircle } from 'react-icons/bi';
import { DollarSign, Building2, FileClock, Ticket, Video, FileBox } from 'lucide-react'

export const menu = [
    {
      name: 'Dashboard',
      icon: <FaHome />,
      submenu: [
        {
          name: 'Super Admin',
          icon: '',
          link: ''
        },
        {
          name: 'Doctors',
          icon: <FaUser />,
          link: ''
        },
        {
          name: "Pharmacy's",
          icon: <FaUserGraduate />,
          link: ''
        },
        {
          name: 'Patients',
          icon: <FaUserInjured />,
          link: ''
        },
        {
          name: 'Therapists',
          icon: <FaCalendar />,
          link: '' 
        }
      ]
    },
    {
        name: 'Hospitals',
        icon: <FaBuilding />,
        link: ''
    },
    {
        name: 'Deals',
        icon: <FaShoppingBag />,
        link: ''
    },
    {
        name: 'Contacts',
        icon: <FaUserAlt />,
        link: ''
    },
    {
        name: 'Reports',
        icon: <FaNotesMedical />,
        link: ''
    },
    {
        name: 'Calendar',
        icon: <FaCalendar />,
        link: ''
    },
    {
        name: 'Message',
        icon: <FaEnvelope />,
        link: ''
    },
    {
        name: 'Documents',
        icon: <FaNewspaper />,
        link: ''
    },
    {
        name: 'Payment',
        icon: <DollarSign />,
        link: ''
  },
  {
        name: 'Organization',
        icon: <Building2 />,
        link: ''
    },{
        name: 'Notice',
        icon: <FileClock />,
        link: ''
    },
    {
        name: 'Tickets',
        icon: <Ticket />,
        link: ''
    },
    {
        name: 'Meeting',
        icon: <Video />,
        link: ''
    },
    {
        name: 'Project',
        icon: <FileBox />,
        link: ''
    }
    
];

export const menu2 = [
  {
    name: 'Articles',
    icon: <BiSolidDashboard color="#1A4402" />,
    link: ''
  }, 
  {
    name: 'Profile',
    icon: <FaUser color="#1A4402" />,
    link: ''
  },
  {
    name: 'Help & Support',
    icon: <BiHelpCircle color="#1A4402" />,
    link: ''
  },
  {
    name: 'Settings',
    icon: <BiHelpCircle color="#1A4402" />,
    link: ''
  },
  {
    name: 'Material Elements',
    icon: <BiHelpCircle color="#1A4402" />,
    link: ''
  }
]
