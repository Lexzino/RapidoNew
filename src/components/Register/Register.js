import React, { useState } from "react";
import Loginmobile from "../../assets/images/Loginmobile.svg";
import Googlered from "../../assets/images/Googlered.svg";
import Appleblack from "../../assets/images/Appleblack.svg";
import Facebookblue from "../../assets/images/Facebookblue.svg";
import { useAuth } from "../services/authService";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    title: "Dr",
    email: "",
    password: "",
    confirmPassword: "",
    activeTab: "SuperAdmin",
    acceptTerms: false,
    specialty: "",
  });

  const {
    firstName,
    lastName,
    fullName,
    title,
    email,
    password,
    confirmPassword,
    activeTab,
    acceptTerms,
    specialty
  } = formData;

  const BASE_URL = "https://rapido-brb7.onrender.com/api/auth/superadmin-signup";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const setActiveTab = (tab) => {
    setFormData(prev => ({
      ...prev,
      activeTab: tab
    }));
  };

  const handleSignup = async () => {
    if (!email || !password || (!firstName && activeTab === "SuperAdmin") || (!lastName && activeTab === "SuperAdmin") || (activeTab === "Provider" && !fullName) || (activeTab === "Provider" && !specialty)) {
      message.error("Please fill in all required fields");
      return;
    }

    if (password !== confirmPassword) {
      message.error("Passwords do not match");
      return;
    }

    if (!acceptTerms) {
      message.error("You must accept the terms and conditions");
      return;
    }

    const displayName = activeTab === "Provider" ? `${title} ${fullName}` : `${firstName} ${lastName}`;

    const credentials = {
      firstName,
      lastName,
      fullName: activeTab === "Provider" ? fullName : `${firstName} ${lastName}`,
      title,
      email,
      password,
      role: activeTab,
      specialty: activeTab === "Provider" ? specialty : undefined,
      displayName: displayName // Adding displayName to the credentials
    };

    try {
      const response = await axios.post(BASE_URL, credentials);
      console.log("User Role:", response);
      if (response.status === 201) {
        message.success("Sign-up successful");
        

        setTimeout(() => {
          const userRole = credentials.role; // Adjust based on actual API response
          console.log("User Role:", response); // Debugging
        
          if (userRole === "SuperAdmin") {
            navigate("/login");
          } else if (userRole === "Provider") {
            navigate("/login?user=Provider");
          } else {
            message.error("Unexpected role from server");
          }
        }, 100);
        
        
      } else {
        message.error(response.data.message || "Error during sign-up");
      }
    } catch (error) {
      message.error(error.response?.data?.message || "An unexpected error occurred");
    }
  };

  // Rest of the component remains the

  return (
    <div className="flex flex-col lg:flex-row items-stretch w-full h-full lg:h-[80vh] bg-[#EAF9D6]">
      {/* Left Section - Hidden on small screens */}
      <div className="flex-1 hidden lg:flex justify-center items-center bg-green-dark py-10">
        <img src={Loginmobile} className="w-[250px] h-auto" alt="Signup Mobile" />
      </div>

      {/* Right Section */}
      <div className="flex flex-1 flex-col justify-center items-center lg:items-start px-6 sm:px-12">
        <div className="ext-center lg:text-start w-full">
          <ul className="inline-flex items-center mt-3 space-x-4 flex-col lg:flex-row">
            <li className="text-green-dark lg:text-5xl lg:w-[180px] sm:text-5xl font-bold">Create Account</li>
            {/* Stacked buttons on small screens */}
            <li className="w-[260px] border-[2px] border-green-dark rounded-md p-[6px] inline-flex space-x-2 items-center flex-col lg:flex-row mt-4 lg:mt-0">
              <button
                className={`hover:bg-green-dark hover:text-white w-full lg:w-[140px]  h-[25px] rounded-[5px] text-lg ${
                  activeTab === "Super Admin" ? "bg-green-dark text-white" : "bg-transparent text-green-dark"
                }`}
                onClick={() => setActiveTab("Super Admin")}
              >
                Super Admin
              </button>
              <button
                className={`hover:bg-green-dark hover:text-white w-full lg:w-[100px] h-[25px] rounded-[5px] text-lg ${
                  activeTab === "Provider" ? "bg-green-dark text-white" : "bg-transparent text-green-dark"
                }`}
                onClick={() => setActiveTab("Provider")}
              >
                Provider
              </button>
            </li>
          </ul>
        </div>

        {/* Sign-up Form */}
        <div className="mt-8 w-full max-w-md">
          {activeTab === "Super Admin" ? (
            <>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <h1 className="text-lg text-green-dark">First Name</h1>
                  <input
                    type="text"
                    className="rounded-[5px] border-[1px] border-green-dark w-full h-[45px] text-base pl-4 mt-2"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleChange}
                  />
                  <p className="text-tiny text-red-vlight">Required</p>
                </div>
                <div className="flex-1">
                  <h1 className="text-lg text-green-dark">Last Name</h1>
                  <input
                    type="text"
                    className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[45px] text-base pl-4 mt-2"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleChange}
                  />
                  <p className="text-tiny text-red-vlight">Required</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <h1 className="text-lg text-green-dark">Full Name</h1>
                  <input
                    type="text"
                    className="rounded-[5px] border-[1px] border-green-dark w-full h-[45px] text-base pl-4 mt-2"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={handleChange}
                  />
                  <p className="text-tiny text-red-vlight">Required</p>
                </div>
                <div className="flex-1">
                  <h1 className="text-lg text-green-dark">Title</h1>
                  <select
                    value={title}
                    onChange={handleChange}
                    className="rounded-[5px] border-[1px] border-green-dark w-full h-[45px] text-base pl-4 mt-2"
                  >
                    <option value="Dr">Dr</option>
                    <option value="Mr">Pharm</option>
                    <option value="Mrs">Thera</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <h1 className="text-lg text-green-dark">Practice Specialty or Pharmacy Store Name</h1>
                <input
                  type="text"
                  className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[45px] text-base pl-4 mt-2"
                  placeholder="Practice Specialty or Pharmacy Store Name"
                  value={specialty}
                  onChange={handleChange}
                />
                <p className="text-tiny text-red-vlight">Required</p>
              </div>
            </>
          )}

          <div className="mt-6">
            <h1 className="text-lg text-green-dark">Email Address/Phone Number</h1>
            <input
              type="text"
              className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[45px] text-base pl-4 mt-2"
              placeholder="Email Address/Phone Number"
              value={email}
              onChange={handleChange}
            />
            <p className="text-tiny text-red-vlight">Required</p>
          </div>

          <div className="mt-6 flex space-x-4">
            <div className="flex-1">
              <h1 className="text-lg text-green-dark">Password</h1>
              <input
                type="password"
                className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[45px] text-base pl-4 mt-2"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
              <p className="text-tiny text-red-vlight">Required</p>
            </div>
            <div className="flex-1">
              <h1 className="text-lg text-green-dark">Confirm Password</h1>
              <input
                type="password"
                className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[45px] text-base pl-4 mt-2"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleChange}
              />
              <p className="text-tiny text-red-vlight">Required</p>
            </div>
          </div>

          {/* Custom Terms and Conditions Checkbox */}
          <div className="mt-4 flex items-center">
            <div className="flex items-center h-5">
              <input
                id="helper-checkbox"
                aria-describedby="helper-checkbox-text"
                type="checkbox"
                checked={acceptTerms}
                onChange={handleChange}
                className="w-4 h-4 bg-white border border-green-dark rounded-[5px] subscribe-set"
              />
            </div>
            <div className="ml-2 text-sm sm:text-base f-f-r text-red-vdark">
              <label htmlFor="helper-checkbox">
                I accept all{" "}
                <a href="/terms-and-conditions" className="text-blue-500">
                  terms and conditions
                </a>
              </label>
            </div>
          </div>

          {/* Centered Button and Account Text */}
          <div className="flex flex-col items-center mt-6">
            <button
              className="w-[90px] h-9 rounded-[3px] bg-green-dark text-lg text-white mt-5"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}