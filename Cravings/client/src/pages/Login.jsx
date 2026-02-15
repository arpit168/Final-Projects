import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ForgetPasswordModal from "../components/publicModals/ForgetPasswordModal";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const Login = () => {
  const { setUser, setIsLogin, setRole } = useAuth();
  const navigate = useNavigate();

  const [isForgetPasswordModelOpen, setIsForgetPasswordModelOpen] =
    useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await api.post("/auth/login", formData);
      toast.success(res.data.message);

      setUser(res.data.data);
      setIsLogin(true);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
      handleClearForm();

      switch (res.data.data.role) {
        case "manager":
          setRole("manager");
          navigate("/restaurantDashboard");
          break;
        case "partner":
          setRole("partner");
          navigate("/riderDashboard");
          break;
        case "customer":
          setRole("customer");
          navigate("/userDashboard");
          break;
        case "admin":
          setRole("admin");
          navigate("/adminDashboard");
          break;
        default:
          break;
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#0f172a]">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">

        <div data-aos="flip-right" className="w-full  max-w-md backdrop-bur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-300 text-sm">
              Login to continue to Craving Food Zone
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} onReset={handleClearForm}>
            <div className="space-y-5">

              {/* Email */}
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent
                  placeholder-gray-400 transition"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent
                  placeholder-gray-400 transition"
                  placeholder="Enter your password"
                />
              </div>

              {/* Forget Password */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsForgetPasswordModelOpen(true)}
                  className="text-[#f97316] hover:text-[#fb923c] text-sm font-medium transition"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="reset"
                  disabled={isLoading}
                  className="flex-1 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-semibold transition"
                >
                  Clear
                </button>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg  disabled:opacity-60 hover:translate-x-0.5  hover:-translate-y-0.5 transistion duration-200"
                >
                  {isLoading ? "Loading..." : "Login"}
                </button>
              </div>
              <div className="text-center text-white">
                <h2>I have no account. <Link  className="text-blue-400 hover:text-blue-500" to={"/register"}>Register here!</Link></h2>
              </div>
            </div>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-400 text-xs mt-8">
            Your information is securely encrypted.
          </p>
        </div>
      </div>

      {isForgetPasswordModelOpen && (
        <ForgetPasswordModal
          onClose={() => setIsForgetPasswordModelOpen(false)}
        />
      )}
    </>
  );
};

export default Login;
