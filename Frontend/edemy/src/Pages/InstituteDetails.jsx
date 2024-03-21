import React from 'react';

const InstituteDetails = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Institute Details</h1>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full text-sm text-left text-black">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-3">College ID</th>
              <th className="px-4 py-3">University</th>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3">ABC University</td>
              <td className="px-4 py-3">Computer Science</td>
              <td className="px-4 py-3">COLUMBIA</td>
              <td className="px-4 py-3">123 Main St</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstituteDetails;
