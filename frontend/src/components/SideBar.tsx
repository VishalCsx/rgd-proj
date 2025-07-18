import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const FullScreenSidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <header className="flex items-center justify-between bg-white shadow-md px-6 py-4">
        <div className="flex items-center space-x-3">
          <button onClick={() => setIsOpen(true)}>
            <FaBars className="text-2xl text-gray-800" />
          </button>
          <span className="text-xl font-bold text-gray-800">
            RGD Modern Academy
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
      >
        {/* Dim background */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Slide Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-blue-900 text-white p-6 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-6 border-b border-blue-700 pb-2">
          <h2 className="text-xl font-bold">RGD Modern Academy</h2>
          <button onClick={closeSidebar}>
            <FaTimes className="text-white text-2xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <Link
            to="/"
            className="block hover:text-blue-300"
            onClick={closeSidebar}
          >
            Dashboard
          </Link>
          <Link
            to="/students"
            className="block hover:text-blue-300"
            onClick={closeSidebar}
          >
            Students
          </Link>
          <Link
            to="/staff-management"
            className="block hover:text-blue-300"
            onClick={closeSidebar}
          >
            Staff
          </Link>
          <Link
            to="/expense-management"
            className="block hover:text-blue-300"
            onClick={closeSidebar}
          >
            Expenses
          </Link>
          <Link
            to="/result"
            className="block hover:text-blue-300"
            onClick={closeSidebar}
          >
            Result
          </Link>
          <Link
            to="/sign-out"
            className="block text-red-400 hover:text-red-300"
            onClick={closeSidebar}
          >
            Sign Out
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default FullScreenSidebarLayout;
