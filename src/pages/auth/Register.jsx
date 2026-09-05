import { Link } from "react-router-dom";
import bgImage from "../../assets/auth/authBg.webp";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setFormData({
        ...formData,
        [name]: value?.toUpperCase(),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputStyle = `w-full rounded-full border border-text/30 bg-bg px-4 py-3
                text-sm text-text outline-none placeholder:text-text/40 focus:border-primary 
                focus:ring-2 focus:ring-primary/20`;

  return (
    <div
      className="min-h-screen bg-bg text-text flex items-center justify-center py-5 px-4 md:px-0 md:gap-28"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md p-6 sm:p-8 bg-[#fdfefd] md:border-none border border-text/20 rounded-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-text">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-text/60">
            Create your account to get started
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-text">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
              className={inputStyle}
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-text">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className={inputStyle}
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
              placeholder="Create a password"
              className={inputStyle}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-text">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              className={inputStyle}
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="
              mt-2 w-full rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-text/60">
          Already have an account?{" "}
          <Link to="/login" className="cursor-pointer font-semibold text-primary hover:underline">
            Login
          </Link>
        </p>

      </div>
      <div className="w-full max-w-md p-6 sm:p-8 hidden md:block">
      </div>
    </div>
  );
};

export default Register;