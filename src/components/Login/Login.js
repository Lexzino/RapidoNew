import React, { useState, useEffect } from "react";
import Loginmobile from "../../assets/images/Loginmobile.svg";
import Googlered from "../../assets/images/Googlered.svg";
import Appleblack from "../../assets/images/Appleblack.svg";
import Facebookblue from "../../assets/images/Facebookblue.svg";
import { useAuth } from "../services/authService";
import { message } from "antd";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("Super Admin");
  const [params] = useSearchParams();
  const user = params.get('user')
  useEffect (() => {
    if(user ===  "provider") {
      setActiveTab("Provider")
    }
  }, {})

  
  // Base URL for the backend
  const BASE_URL = "https://rapido-brb7.onrender.com/api/auth/superadmin-login";

  // Login handler
  const handleLogin = async () => {
// Validate input
if (!email || !password) {
  message.error("Please fill in all required fields");
  return;
}

// Prepare credentials
const credentials = {
  email,
  password,
  role: activeTab,
};

// API Call to backend
try {
  const response = await axios.post(BASE_URL, credentials);
  console.log(response);
  const token = response.data?.token;
  const userData = response.data.superAdmin
  console.log(userData);
  const userRole = userData.role; // Adjust based on actual API response
  if (response.status === 200) { // Typically login uses 200, not 201 (201 is for creation)
    message.success("Login successful");


    // Store user data in sessionStorage
    sessionStorage.setItem("user", JSON.stringify({
      ...userData,
      displayName: userRole === "SuperAdmin" 
        ? `${userData.firstName} ${userData.lastName}`
        : `${userData.title} ${userData.fullName}`
    }));

    
if (token) {
sessionStorage.setItem("token", token);
} else {
message.error("Token not received from server");
}


    // Navigate based on userType
    setTimeout(() => {
              console.log("User Role:", userRole); // Debugging
            
              if (userRole === "SuperAdmin") {
                navigate("/superadmin");
              } else if (userRole === "Provider") {
                navigate("/partners");
              } else {
                message.error("Unexpected role from server");
              }
            }, 100);
  } else {
    message.error(response.data.message || "Error during login");
  }
} catch (error) {
  console.error("Login failed:", error.message);
  message.error(
    error.response?.data?.message || "An unexpected error occurred"
  );
}
};

  return (
    <div className="flex flex-col lg:flex-row items-stretch w-full h-[80vh] bg-[#EAF9D6]">
      {/* Left Section */}
      <div className="flex-1 hidden lg:flex justify-center items-center bg-green-dark py-10">
        <img
          src={Loginmobile}
          className="w-[250px] h-auto"
          alt="Login Mobile"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start px-4 sm:px-6 lg:px-14">
        <div className="text-center lg:text-start w-full">
          <ul className="inline-flex items-center mt-3 space-x-4 flex-col lg:flex-row">
            <li className="text-green-dark lg:text-5xl lg:w-[170px] sm:text-5xl font-bold">Welcome Back</li>
            <li className="w-[260px] sm:w-[280px]  border-[2px] border-green-dark rounded-md p-[6px] inline-flex space-x-2 items-center flex-col lg:flex-row mt-4 lg:mt-0">
              <button
                className={`hover:bg-green-dark hover:text-white w-full lg:w-[140px] h-[25px] rounded-[5px] text-lg ${activeTab === "Super Admin" ? "bg-green-dark text-white" : "bg-transparent text-green-dark"}`}
                onClick={() => setActiveTab("Super Admin")}
              >
                Super Admin
              </button>
              <button
                className={`hover:bg-green-dark hover:text-white w-full lg:w-[100px] h-[25px] rounded-[5px] text-lg ${activeTab === "Provider" ? "bg-green-dark text-white" : "bg-transparent text-green-dark"}`}
                onClick={() => setActiveTab("Provider")}
              >
                Provider
              </button>
            </li>
          </ul>
        </div>

        <div className="mt-[40px] sm:mt-[65px] w-full sm:w-[450px]">
          <h1 className="text-xl text-green-dark">Email Address/Phone Number</h1>
          <input
            type="text"
            className="rounded-[5px] border-[1.5px] border-green-dark w-full sm:w-[450px] h-[50px] text-lg pl-[18px] mt-3"
            placeholder="Email Address/Phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-tiny text-red-vlight">Required</p>
        </div>

        <div className="mt-[40px] sm:mt-[53px] w-full sm:w-[450px]">
          <h1 className="text-xl text-green-dark">Password</h1>
          <input
            type="password"
            className="rounded-[5px] border-[1.5px] border-green-dark w-full sm:w-[450px] h-[50px] text-lg pl-[18px] mt-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ul className="inline-flex items-center w-full mt-2">
            <li>
              <p className="text-tiny text-red-vlight">Required</p>
            </li>
            <li className="ml-auto">
              <a href="#" className="text-lg text-green-dark">
                Forgot password?
              </a>
            </li>
          </ul>
        </div>

        <button
          className="w-[100px] h-10 rounded-[3px] bg-green-dark text-xl text-white mt-[23px]"
          onClick={handleLogin}
        >
          Login
        </button>

        <h2 className="connectset mt-[45px] text-tiny">Or connect with</h2>
        <div className="flex justify-center space-x-4 sm:space-x-[39px] items-center mt-5">
          <button className="w-[94px] h-[61px] rounded-[5px] bg-white-vdark shadow-md">
            <img src={Googlered} className="w-6 h-6 mx-auto" alt="Google" />
          </button>
          <button className="w-[94px] h-[61px] rounded-[5px] bg-white-vdark shadow-md">
            <img src={Appleblack} className="w-6 h-6 mx-auto" alt="Apple" />
          </button>
          <button className="w-[94px] h-[61px] rounded-[5px] bg-white-vdark shadow-md">
            <img src={Facebookblue} className="w-6 h-6 mx-auto" alt="Facebook" />
          </button>
        </div>
      </div>
    </div>
  );
}