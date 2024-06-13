// pages/dashboard.tsx
import React from 'react';

export default function Home(){
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
        </div>
        <nav className="mt-6">
          <a href="#" className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg">
            Home
          </a>
          <a href="#" className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg hover:bg-gray-200">
            Profile
          </a>
          <a href="#" className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg hover:bg-gray-200">
            Resources
          </a>
          <a href="#" className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg hover:bg-gray-200">
            Announcements
          </a>
          <a href="#" className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg hover:bg-gray-200">
            Settings
          </a>
          <a href="./Login" className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg hover:bg-gray-200">
            Log Out
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-blue-600">DASHBOARD</h1>
        <div className="mt-6">
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-gray-500 truncate text-lg">CPEN 202</div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">DIGITAL SYSTEMS DESIGN</div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-gray-500 truncate text-lg">CPEN 2O8</div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">SOFTWARE ENGINEERING</div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-gray-500 truncate text-lg">CPEN 212</div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">DATA COMMUNICATION</div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-gray-500 truncate text-lg">CPEN 204</div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">DATA STRUCTURES AND ALGORITHMS</div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-gray-500 truncate text-lg">CPEN 206</div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">LINEAR CIRCUITS</div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-gray-500 truncate text-lg">SENG 202</div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">DIFFERENTIAL EQUATIONS</div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-gray-500 truncate text-lg">CBAS 210</div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">ACADEMIC WRITING 2</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
};

