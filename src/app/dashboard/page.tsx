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
          <a href="#" className="block px-4 py-2 mt-2 text-md font-semibold text-blue-800 bg-gray-200 rounded-lg">
            Courses
          </a>
          <a href="#" className="block px-4 py-2 mt-2 text-md font-semibold text-blue-800 rounded-lg hover:bg-gray-200">
            Shared Resources
          </a>
          <a href="#" className="block px-4 py-2 mt-2 text-md font-semibold text-blue-800 rounded-lg hover:bg-gray-200">
            Projects
          </a>
          <a href="#" className="block px-4 py-2 mt-2 text-md font-semibold text-blue-800 rounded-lg hover:bg-gray-200">
            Announcements
          </a>
          <a href="#" className="block px-4 py-2 mt-2 text-md font-semibold text-blue-800 rounded-lg hover:bg-gray-200">
            Settings
          </a>
          <a href="./Login" className="block px-4 py-2 mt-2 text-md font-semibold text-blue-800 rounded-lg hover:bg-gray-200">
            Log Out
          </a>
        </nav>
      </aside>
      <main className="bg-blue-400 flex-1 p-6">
        <h1 className="text-3xl font-semibold text-white">MY DASHBOARD</h1>
        <hr></hr>
        <div className="mt-6">
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-black truncate text-lg font-bold">CPEN 2O8</div>
              <div className="mt-1 text-3xl font-semibold text-blue-800">SOFTWARE ENGINEERING</div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-black truncate text-lg font-bold">CBAS 210</div>
              <div className="mt-1 text-3xl font-semibold text-blue-800">ACADEMIC WRITING II</div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-black truncate text-lg font-bold">CPEN 202</div>
              <div className="mt-1 text-3xl font-semibold text-blue-800">DIGITAL SYSTEMS DESIGN</div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-black truncate text-lg font-bold">CPEN 212</div>
              <div className="mt-1 text-3xl font-semibold text-blue-800">DATA COMMUNICATION</div>
            </div>
            
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-black truncate text-lg font-bold">CPEN 206</div>
              <div className="mt-1 text-3xl font-semibold text-blue-800">LINEAR CIRCUITS</div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-black truncate text-lg font-bold">SENG 202</div>
              <div className="mt-1 text-3xl font-semibold text-blue-800">DIFFERENTIAL EQUATIONS</div>
            </div>
            
          </div>
        </div>
      </main>
      <footer><hr></hr></footer>
    </div>
  )
};

