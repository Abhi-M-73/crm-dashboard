import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

import { login } from "../../redux/slices/authSlice";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "admin@gmail.com",
    password: "12345",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) return;

    // Temporary data for testing
    const user = {
      email: formData.email,
      username: "Admin",
      role: "admin",
    };

    const token = "admin-token";

    dispatch(
      login({
        user,
        token,
      })
    );

    navigate("/admin/dashboard", { replace: true });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4 text-text">

      <div className="w-full max-w-md">

        {/* Logo / Icon */}
        

        {/* Card */}
        <div className="rounded-2xl border border-text/10 bg-bg p-6 shadow-xl sm:p-8">
<div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <ShieldCheck size={34} />
          </div>
        </div>
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-text">
              Admin Login
            </h1>

            <p className="mt-2 text-sm text-text/60">
              Login to access the admin dashboard
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-text">
                Admin Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter admin email"
                className="
                  w-full rounded-xl
                  border border-text/10
                  bg-bg
                  px-4 py-3
                  text-sm text-text
                  outline-none
                  placeholder:text-text/40
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/20
                "
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-text">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter admin password"
                className="
                  w-full rounded-xl
                  border border-text/10
                  bg-bg
                  px-4 py-3
                  text-sm text-text
                  outline-none
                  placeholder:text-text/40
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/20
                "
              />
            </div>

            {/* Login */}
            <button
              type="submit"
              className="
                flex w-full items-center
                justify-center gap-2
                rounded-xl
                bg-primary
                px-4 py-3
                text-sm font-semibold
                text-white
                transition
                hover:bg-primary/90
                active:scale-[0.98]
              "
            >
              <ShieldCheck size={18} />
              Admin Login
            </button>

          </form>

          {/* Back to User Login */}
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-sm font-medium text-text/60 transition hover:text-primary"
            >
              ← Back to User Login
            </Link>
          </div>

        </div>

        {/* Footer */}
        <p className="mt-5 text-center text-xs text-text/40">
          Authorized administrators only
        </p>

      </div>
    </div>
  );
};

export default AdminLogin;