import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-purple-300 to-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to E-Certify</h1>
      <div className="space-y-4">
        <button className="bg-purple-700 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-800">
          Verify Marksheet
        </button>
        <button className="bg-white text-purple-700 px-6 py-3 rounded-lg text-lg hover:bg-purple-100">
          Create Verification Key
        </button>
      </div>
    </div>
  );
};

export default HomePage;
