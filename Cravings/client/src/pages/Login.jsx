import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ForgetPasswordModal from "../components/publicModals/ForgetPasswordModal";
import Loading from "../components/Loading";

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
      <div className="w-full h-full flex items-center justify-center bg-background">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-background py-6 px-4">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-text mb-2">
              Welcome Back
            </h1>
          </div>

          {/* Form Container */}
          <div className="bg-background rounded-xl shadow-2xl overflow-hidden border border-buttons">
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >
              {/* Inputs */}
              <div className="mb-5 space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-buttons rounded-lg bg-background text-text
                  focus:outline-none focus:border-primary transition
                  disabled:cursor-not-allowed disabled:opacity-60"
                />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Password"
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-buttons rounded-lg bg-background text-text
                  focus:outline-none focus:border-primary transition
                  disabled:cursor-not-allowed disabled:opacity-60"
                />

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-primary hover:text-secondary font-medium transition"
                    onClick={() => setIsForgetPasswordModelOpen(true)}
                  >
                    Forget Password?
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-8 border-t border-buttons">
                <button
                  type="reset"
                  disabled={isLoading}
                  className="flex-1 bg-secondary text-secondary-content font-bold py-4 rounded-lg hover:text-accent transition disabled:cursor-not-allowed"
                >
                  Clear 
                </button>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-primary hover:text-accent hover:bg-secondary text-buttons font-bold py-4 px-6 rounded-lg transition shadow-lg
                  disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading ? "loading.." : "Login"}
                </button>
              </div>
            </form>
          </div>

          {/* Footer */}
          <p className="text-center text-text/70 mt-8 text-sm">
            All fields marked are mandatory. We respect your privacy.
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
