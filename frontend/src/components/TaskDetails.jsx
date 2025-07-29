"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const TaskDetails = () => {
  const [status, setStatus] = useState("InProgress");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const statusOptions = ["All Task", "Ongoing", "Pending", "Collaborative Task", "Done"];

  return (
    <div className="min-h-screen bg-[#f9fafb] flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 to-teal-700 text-white py-9 shadow">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-xl font-bold">Tasko</h1>
          <nav className="flex gap-6 text-sm">
            <a href="#" className="hover:underline">Task List</a>
            <a href="#" className="hover:underline">Spin</a>
          </nav>
          <div className="text-sm font-medium">Thomas M.</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto -mt-17 px-4 py-10">
        <div className="bg-white shadow rounded-lg p-15 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            {/* Left Side - Subheading */}
            <h3 className="text-md font-bold">Task Details</h3>

            {/* Right Side - Points & Buttons */}
            <div className="flex gap-3">
              <span className="text-[#C716F3] font-semibold text-sm self-center">20 Points</span>
              <button className="bg-[#ffaa0031] text-[#ffaa00] border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 text-sm font-medium">Edit Task</button>
              <button className="bg-[#60E5AE] border border-gray-300 px-6 py-2 rounded hover:bg-gray-200 text-sm font-medium">Back</button>
            </div>
          </div>


          <h2 className="text-2xl font-semibold text-black mb-3">Art and Craft</h2>

          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            Select the role that you want to candidates for and upload your job description. Select the role that you want to candidates for and upload your job description. Select the role that you want to candidates for and upload your job description.
          </p>

          <div className="mb-6">
            <p className="font-medium text-gray-800 mb-1">End Date</p>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span>📅</span>
              <span>Friday, April 19 – 2024</span>
              <span className="text-yellow-600 font-medium">• {status}</span>
            </div>
          </div>

          {/* Change Status */}
          <div className="relative mb-10 max-w-xs">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full border border-gray-300 px-4 py-2 rounded shadow-sm text-left flex justify-between items-center"
            >
              {status === "Done" ? (
                <span className="text-green-600">✔ Done</span>
              ) : (
                status
              )}
              <ChevronDownIcon className="h-4 w-4 text-gray-600" />
            </button>
            {dropdownOpen && (
              <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded shadow z-10">
                {statusOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setStatus(option);
                      setDropdownOpen(false);
                    }}
                    className={`px-4 py-0.5 text-sm cursor-pointer hover:bg-gray-100 ${status === option ? "bg-gray-100 font-medium" : ""}`}
                  >
                    {option === "Done" ? <span className="text-green-600">✔ {option}</span> : option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-medium">Delete Task</button>
            <button className="bg-[#60E5AE] hover:bg-green-700 px-6 py-2 rounded font-medium">Submit</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TaskDetails;
