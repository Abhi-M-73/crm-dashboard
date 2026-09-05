import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import bgImage from "../../assets/auth/authBg.webp";

const Login = () => {
    const [formData, setFormData] = useState({
        email: 'abhi@gmail.com',
        password: '123'
    });
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) return;

        const user = {
            email: formData.email,
            username: "abhi",
            role: "user",
        };

        const token = "dummy-token";

        dispatch(
            login({
                user,
                token,
            })
        );

        navigate("/user/dashboard");
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
            <div className="w-full max-w-md p-6 sm:p-8 bg-[#fdfefd] md:border-none border border-text/20  rounded-2xl">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold text-text">
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-sm text-text/60">
                        Login to your account
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
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
                    <div>
                        <label className="mb-2 block text-sm font-medium text-text">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            className={inputStyle}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 active:scale-[0.98]"
                    >
                        Login
                    </button>

                </form>

                <p className="mt-6 text-center text-sm text-text/60">
                    Don't have an account?{" "}
                    <Link to="/register" className="cursor-pointer font-semibold text-primary hover:underline">
                        Register
                    </Link>
                </p>

            </div>
            <div className="w-full max-w-md p-6 sm:p-8 hidden md:block">
            </div>
        </div>
    );
};

export default Login;