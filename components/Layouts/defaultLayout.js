// DefaultLayout.js
import React from 'react';
// import Appbar from '../../pages/dashboard/Appbar';
import Sidebar from '../../pages/dashboard/sidebar';



const DefaultLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* <Appbar /> */}
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
