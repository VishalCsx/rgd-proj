import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { PiExamFill, PiSignOutBold, PiStudentFill } from "react-icons/pi";
import { GrUserManager } from "react-icons/gr";
import { GiExpense } from "react-icons/gi";

const FullScreenSidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="min-h-screen flex flex-col rounded-2xl bg-gray-100 rounded-2xl">
      {/* Navbar */}
      <header className="flex items-center justify-between bg-white shadow-md px-6 py-4">
        <div className="flex items-center  space-x-3">
          <button onClick={() => setIsOpen(true)}>
            <FaBars className="text-2xl text-gray-800" />
          </button>
          <span className="text-xl font-bold text-blue-600">
            <span className="bg-gradient-to-tl from-blue-500 to-blue-800 text-2xl text-white px-4 py-1 font- font-extrabold italic rounded-br-2xl mx-2">
              R
            </span>
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
        className={`fixed inset-0 z-40 text-black transition-opacity  duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
      >
        {/* Dim background */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Slide Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full font-medium font-sans w-56 bg-white text-black p-6 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sidebar Header */}
        <div className="flex border-b-4 justify-between items-center mb-12 border-blue-50 pb-2">
          <div className=" flex justify-center align-center text-blue-600">
            <span className="bg-gradient-to-tl from-blue-500 to-blue-800 text-2xl text-white px-4 py-1 font- font-extrabold italic rounded-br-2xl mx-2 justify-center pt-4 ">
              R
            </span>
            RGD Modern Academy
          </div>
          <button onClick={closeSidebar}>
            <FaTimes className="text-white text-2xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4 ">
          <Link
            to="/"
            className=" hover:text-gray-300 flex py-2"
            onClick={closeSidebar}
          >
            <span className="text-blue-500 text-2xl px-2 ">
              <RiDashboardHorizontalFill />
            </span>
            Dashboard
          </Link>
          <Link
            to="/students"
            className="hover:text-gray-300 flex py-2"
            onClick={closeSidebar}
          >
            <span className="text-blue-500 text-2xl px-2 ">
              <PiStudentFill />
            </span>
            Students
          </Link>
          <Link
            to="/staff-management"
            className="hover:text-gray-300 flex py-2"
            onClick={closeSidebar}
          >
            <span className="text-blue-500 text-2xl px-2 ">
              <GrUserManager />
            </span>
            Staff
          </Link>
          <Link
            to="/expense-management"
            className="hover:text-gray-300 flex py-2"
            onClick={closeSidebar}
          >
            <span className="text-blue-500 text-2xl px-2 ">
              <GiExpense />
            </span>
            Expenses
          </Link>
          <Link
            to="/result"
            className="hover:text-gray-300 flex py-2"
            onClick={closeSidebar}
          >
            <span className="text-blue-500 text-2xl px-2 ">
              <PiExamFill />
            </span>
            Result
          </Link>
          <Link
            to="/sign-out"
            className="flex hover:text-red-300 py-2"
            onClick={closeSidebar}
          >
            <span className="text-red-500 text-2xl px-2 ">
              <PiSignOutBold />
            </span>
            Sign Out
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default FullScreenSidebarLayout;
