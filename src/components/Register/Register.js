import React, { useState } from "react";
import Loginmobile from "../../assets/images/Loginmobile.svg";
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
  
  const [isLoading, setIsLoading] = useState(false);

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
    if (isLoading) return;

    const isSuperAdminMissing = activeTab === "SuperAdmin" && (!firstName.trim() || !lastName.trim());
    const isProviderMissing = activeTab === "Provider" && (!fullName.trim() || !specialty.trim());
    const isCommonMissing = !email.trim() || !password.trim();

    if (isCommonMissing || isSuperAdminMissing || isProviderMissing) {
      message.error("Please fill in all required fields");
      console.log({
        isCommonMissing,
        isSuperAdminMissing,
        isProviderMissing,
        email: email.trim(),
        password: password.trim(),
        fullName: fullName.trim(),
        specialty: specialty.trim()
      });
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

    setIsLoading(true);

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
      displayName: displayName
    };

    try {
      const response = await axios.post(BASE_URL, credentials);
      if (response.status === 201) {
        message.success("Sign-up successful");
        
        setTimeout(() => {
          const userRole = credentials.role;
          if (userRole === "SuperAdmin") {
            navigate("/login");
          } else if (userRole === "Provider") {
            navigate("/login?user=Provider");
          } else {
            message.error("Unexpected role from server");
          }
        }, 10);
      } else {
        message.error(response.data.message || "Error during sign-up");
      }
    } catch (error) {
      message.error(error.response?.data?.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-stretch w-full min-h-screen bg-[#EAF9D6] px-4 sm:px-6 lg:px-0">
      {/* Left Section */}
      <div className="flex-1 hidden lg:flex justify-center items-center bg-green-dark py-10">
        <img 
          src={Loginmobile} 
          className="w-[250px] sm:w-[300px] h-auto" 
          alt="Signup Mobile" 
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start py-8 lg:py-0 lg:px-14 w-full max-w-[600px] mx-auto">
        <div className="text-center lg:text-start w-full">
          <ul className="inline-flex items-center mt-3 space-x-4 flex-col lg:flex-row">
            <li className="text-green-dark text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-0 lg:w-[180px]">
              Create Account
            </li>
            <li className="w-[260px] sm:w-[280px] border-[2px] border-green-dark rounded-md p-[6px] inline-flex space-x-2 items-center flex-col lg:flex-row">
              <button
                className={`hover:bg-green-dark hover:text-white w-full lg:w-[140px] h-[25px] rounded-[5px] text-base sm:text-lg ${activeTab === "SuperAdmin" ? "bg-green-dark text-white" : "bg-transparent text-green-dark"}`}
                onClick={() => setActiveTab("SuperAdmin")}
                disabled={isLoading}
              >
                Super Admin
              </button>
              <button
                className={`hover:bg-green-dark hover:text-white w-full lg:w-[100px] h-[25px] rounded-[5px] text-base sm:text-lg ${activeTab === "Provider" ? "bg-green-dark text-white" : "bg-transparent text-green-dark"}`}
                onClick={() => setActiveTab("Provider")}
                disabled={isLoading}
              >
                Providers
              </button>
            </li>
          </ul>
        </div>

        {/* Sign-up Form */}
        <div className="mt-8 w-full">
          {activeTab === "SuperAdmin" ? (
            <>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-1">
                  <h1 className="text-lg sm:text-xl text-green-dark">First Name</h1>
                  <input
                    type="text"
                    name="firstName"
                    className="rounded-[5px] border-[1px] border-green-dark w-full h-[45px] text-base sm:text-lg pl-4 mt-2"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <p className="text-tiny text-red-vlight">Required</p>
                </div>
                <div className="flex-1">
                  <h1 className="text-lg sm:text-xl text-green-dark">Last Name</h1>
                  <input
                    type="text"
                    name="lastName"
                    className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[45px] text-base sm:text-lg pl-4 mt-2"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <p className="text-tiny text-red-vlight">Required</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-1">
                  <h1 className="text-lg sm:text-xl text-green-dark">Full Name</h1>
                  <input
                    type="text"
                    name="fullName"
                    className="rounded-[5px] border-[1px] border-green-dark w-full h-[45px] text-base sm:text-lg pl-4 mt-2"
                    placeholder="Your Full Name"
                    value={fullName}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <p className="text-tiny text-red-vlight">Required</p>
                </div>
                <div className="flex-1">
                  <h1 className="text-lg sm:text-xl text-green-dark">Title</h1>
                  <select
                    name="title"
                    value={title}
                    onChange={handleChange}
                    className="rounded-[5px] border-[1px] border-green-dark w-full h-[45px] text-base sm:text-lg pl-4 mt-2"
                    disabled={isLoading}
                  >
                    <option value="Dr">Dr</option>
                    <option value="Pharm">Pharm</option>
                    <option value="Thera">Thera</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <h1 className="text-lg sm:text-xl text-green-dark">Practice Specialty or Pharmacy Store Name</h1>
                <input
                  type="text"
                  name="specialty"
                  className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[45px] text-base sm:text-lg pl-4 mt-2"
                  placeholder="Enter name here"
                  value={specialty}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                <p className="text-tiny text-red-vlight">Required</p>
              </div>
            </>
          )}

          <div className="mt-6">
            <h1 className="text-lg sm:text-xl text-green-dark">Email Address</h1>
            <input
              type="text"
              name="email"
              className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[45px] text-base sm:text-lg pl-4 mt-2"
              placeholder="Enter Your email Address"
              value={email}
              onChange={handleChange}
              disabled={isLoading}
            />
            <p className="text-tiny text-red-vlight">Required</p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <h1 className="text-lg sm:text-xl text-green-dark">Password</h1>
              <input
                type="password"
                name="password"
                className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[45px] text-base sm:text-lg pl-4 mt-2"
                placeholder="Your Password"
                value={password}
                onChange={handleChange}
                disabled={isLoading}
              />
              <p className="text-tiny text-red-vlight">Required</p>
            </div>
            <div className="flex-1">
              <h1 className="text-lg sm:text-xl text-green-dark">Confirm Password</h1>
              <input
                type="password"
                name="confirmPassword"
                className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[45px] text-base sm:text-lg pl-4 mt-2"
                placeholder="Confirm Your Password"
                value={confirmPassword}
                onChange={handleChange}
                disabled={isLoading}
              />
              <p className="text-tiny text-red-vlight">Required</p>
            </div>
          </div>

          <div className="mt-6 flex items-center">
            <div className="flex items-center h-5">
              <input
                id="helper-checkbox"
                name="acceptTerms"
                type="checkbox"
                checked={acceptTerms}
                onChange={handleChange}
                className="w-4 h-4 bg-white border border-green-dark rounded-[5px]"
                disabled={isLoading}
              />
            </div>
            <div className="ml-2 text-sm sm:text-base text-red-vdark">
              <label htmlFor="helper-checkbox">
                I accept all{" "}
                <a href="/terms-and-conditions" className="text-blue-500">
                  terms and conditions
                </a>
              </label>
            </div>
          </div>

          <div className="flex flex-col items-center mt-8 pb-8">
            <button
              className={`w-[100px] h-10 rounded-[3px] text-lg sm:text-xl text-white flex items-center justify-center ${isLoading ? 'bg-green-700 cursor-not-allowed' : 'bg-green-dark hover:bg-green-800'}`}
              onClick={handleSignup}
              disabled={isLoading}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Sign Up'
              )}
            </button>
            <p className="mt-4 text-sm sm:text-base text-green-dark">
              Already have an account? <a href="/login" className="text-blue-500">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}