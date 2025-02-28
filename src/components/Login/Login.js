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
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const user = params.get('user');

  useEffect(() => {
    if (user === "provider") {
      setActiveTab("Provider");
    }
  }, []);

  const BASE_URL = "https://rapido-brb7.onrender.com/api/auth/superadmin-login";

  const handleLogin = async () => {
    if (!email || !password) {
      message.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true); // Start loading
    const credentials = {
      email,
      password,
      role: activeTab,
    };

    try {
      const response = await axios.post(BASE_URL, credentials);
      const token = response.data?.token;
      const userData = response.data.superAdmin;
      const userRole = userData.role;

      if (response.status === 200) {
        message.success("Login successful");

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

        setTimeout(() => {
          if (userRole === "SuperAdmin") {
            navigate("/superadmin");
          } else if (userRole === "Provider") {
            navigate("/partners");
          } else {
            message.error("Unexpected role from server");
          }
        }, 10);
      } else {
        message.error(response.data.message || "Error during login");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      message.error(
        error.response?.data?.message || "An unexpected error occurred"
      );
    } finally {
      setIsLoading(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-stretch w-full min-h-screen bg-[#EAF9D6] px-4 sm:px-6 lg:px-0">
      {/* Left Section */}
      <div className="flex-1 hidden lg:flex justify-center items-center bg-green-dark py-10">
        <img
          src={Loginmobile}
          className="w-[250px] sm:w-[300px] h-auto"
          alt="Login Mobile"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start py-8 lg:py-0 lg:px-14 w-full max-w-[600px] mx-auto">
        <div className="text-center lg:text-start w-full">
          <ul className="inline-flex items-center mt-3 space-x-4 flex-col lg:flex-row">
            <li className="text-green-dark text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-0 lg:w-[170px]">
              Welcome Back
            </li>
            <li className="w-[260px] sm:w-[280px] border-[2px] border-green-dark rounded-md p-[6px] inline-flex space-x-2 items-center flex-col lg:flex-row">
              <button
                className={`hover:bg-green-dark hover:text-white w-full lg:w-[140px] h-[25px] rounded-[5px] text-base sm:text-lg ${activeTab === "Super Admin" ? "bg-green-dark text-white" : "bg-transparent text-green-dark"}`}
                onClick={() => setActiveTab("Super Admin")}
              >
                Super Admin
              </button>
              <button
                className={`hover:bg-green-dark hover:text-white w-full lg:w-[100px] h-[25px] rounded-[5px] text-base sm:text-lg ${activeTab === "Provider" ? "bg-green-dark text-white" : "bg-transparent text-green-dark"}`}
                onClick={() => setActiveTab("Provider")}
              >
                Provider
              </button>
            </li>
          </ul>
        </div>

        <div className="mt-8 sm:mt-12 w-full">
          <h1 className="text-lg sm:text-xl text-green-dark">Email Address/Phone Number</h1>
          <input
            type="text"
            className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[50px] text-base sm:text-lg pl-[18px] mt-3"
            placeholder="Email Address/Phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-tiny text-red-vlight">Required</p>
        </div>

        <div className="mt-8 sm:mt-10 w-full">
          <h1 className="text-lg sm:text-xl text-green-dark">Password</h1>
          <input
            type="password"
            className="rounded-[5px] border-[1.5px] border-green-dark w-full h-[50px] text-base sm:text-lg pl-[18px] mt-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ul className="inline-flex items-center w-full mt-2">
            <li>
              <p className="text-tiny text-red-vlight">Required</p>
            </li>
            <li className="ml-auto">
              <a href="#" className="text-base sm:text-lg text-green-dark">
                Forgot password?
              </a>
            </li>
          </ul>
        </div>

        <button
          className="w-[100px] h-10 rounded-[3px] bg-green-dark text-lg sm:text-xl text-white mt-6 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            "Login"
          )}
        </button>

        <h2 className="connectset mt-10 sm:mt-12 text-tiny">Or connect with</h2>
        <div className="flex justify-center space-x-4 sm:space-x-8 items-center mt-5 pb-8">
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