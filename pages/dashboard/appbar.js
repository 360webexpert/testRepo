// components/Topbar.js
import React from 'react';

const Appbar = () => {
  return (
    <div className="bg-gray-900 text-white h-16 flex items-center justify-between px-4">
      <div className="flex items-center">
        <h1 className="text-lg font-bold">Your App Name</h1>
      </div>
      <div>
        {/* Add user profile dropdown or other controls */}
      </div>
    </div>
  );
};

export default Appbar;
