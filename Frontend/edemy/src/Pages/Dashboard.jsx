import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      {/* Navigation Links */}
      <div className="flex space-x-4 mb-8">
        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">User Login</a>
        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">User Register</a>
        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Add Institute</a>
        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Institutes</a>
        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Add Courses</a>
        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Courses</a>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Institutes</h2>
          <ul>
            <li><a href="#">Edit Institute</a></li>
            <li><a href="#">Delete Institute</a></li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Courses</h2>
          <ul>
            <li><a href="#">Edit Courses</a></li>
            <li><a href="#">Delete Course</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
