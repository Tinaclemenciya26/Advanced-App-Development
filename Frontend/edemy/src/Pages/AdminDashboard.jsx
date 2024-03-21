import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const AdminDashboard = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Header section */}
        <header className="bg-white shadow-lg">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            {/* Logo */}
            <div className="text-xl font-bold">Admin Dashboard</div>
            {/* Search Bar */}
            <form className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-200 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-black"
              />
              <button
                type="submit"
                className="bg-black text-white ml-2 px-4 py-2 rounded-lg hover:bg-grey-200 focus:outline-none focus:ring focus:border-blue-300"
              >
                Search
              </button>
            </form>
            {/* Action Buttons */}
            <div className="space-x- -1">
              <button
                className="bg-black text-white px-7 py-2 rounded-lg hover:bg-grey-600 focus:outline-none focus:ring focus:border-grey-200"
                style={{ marginTop: "-10px" }}
              >
                Add Students
              </button>
              <button className="bg-gray-500 text-white px-7 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring focus:border-gray-300">
                Filter
              </button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="container mx-auto px-4 py-6">
          {/* Table section */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <table className="w-full text-sm text-left text-black">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3">STUDENT ID</th>
                  <th className="px-4 py-3">NAME</th>
                  <th className="px-4 py-3">DOB</th>
                  <th className="px-4 py-3">ADDRESS</th>
                  <th className="px-4 py-3">INSTITUTE</th>
                  <th className="px-4 py-3">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">
                    <Link to="/college-details">Tina Arulselva</Link>
                  </td>
                  <td className="px-4 py-3">26-07-2003</td>
                  <td className="px-4 py-3">123 coimbatore</td>
                  <td className="px-4 py-3">
                    <Link to="/ins">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                        View Details
                      </button>
                    </Link>
                  </td>
                  <td className="px-4 py-3 space-x-0">
                    <button className="bg-white text-black px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300">
                      Delete
                    </button>
                    <button className="bg-white text-black px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                      Edit
                    </button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
