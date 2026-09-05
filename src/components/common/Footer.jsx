import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-text/10 bg-bg text-text">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">

        {/* Logo / Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-primary">
            Dashboard
          </p>

          <p className="mt-1 text-xs text-text/50">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 text-sm">
          <Link
            to="/"
            className="text-text/60 transition hover:text-primary"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="text-text/60 transition hover:text-primary"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="text-text/60 transition hover:text-primary"
          >
            Register
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;