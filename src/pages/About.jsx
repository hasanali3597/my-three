import React from "react";

import Footer from "../Components/Footer";
const About = () => {
  return (
    <div className="bg-base-200 py-12">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="card bg-white shadow-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-6 h-6 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <h3 className="text-xl font-semibold">Frontend Developer</h3>
        </div>
        <p className="text-gray-600 mb-2">React, Tailwind CSS দিয়ে UI তৈরি।</p>
        <span className="text-sm text-gray-500">2022 - Present</span>
      </div>
      <div className="card bg-white shadow-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="text-xl font-semibold">UI/UX Designer</h3>
        </div>
        <p className="text-gray-600 mb-2">Figma দিয়ে প্রোটোটাইপ ডিজাইন।</p>
        <span className="text-sm text-gray-500">2021 - 2022</span>
      </div>
      <div className="card bg-white shadow-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-6 h-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <h3 className="text-xl font-semibold">Web Learner</h3>
        </div>
        <p className="text-gray-600 mb-2">JavaScript, React Router শিখে প্র্যাকটিস।</p>
        <span className="text-sm text-gray-500">2020 - 2021</span>
      </div>
      <div className="card bg-white shadow-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-6 h-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold">Backend Basics</h3>
        </div>
        <p className="text-gray-600 mb-2">Node.js ও Express দিয়ে API বানানো।</p>
        <span className="text-sm text-gray-500">2019 - 2020</span>
      </div>
      <div className="card bg-white shadow-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-6 h-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <h3 className="text-xl font-semibold">Freelance Projects</h3>
        </div>
        <p className="text-gray-600 mb-2">ছোটখাটো ওয়েবসাইট ও UI ডিজাইন প্রজেক্ট।</p>
        <span className="text-sm text-gray-500">2018 - 2019</span>
      </div>
      <div className="card bg-white shadow-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold">Database Handling</h3>
        </div>
        <p className="text-gray-600 mb-2">MongoDB দিয়ে ডেটা ম্যানেজমেন্ট।</p>
        <span className="text-sm text-gray-500">2018</span>
      </div>
      <div className="card bg-white shadow-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-6 h-6 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="text-xl font-semibold">Version Control</h3>
        </div>
        <p className="text-gray-600 mb-2">GitHub দিয়ে কোড ম্যানেজমেন্ট।</p>
        <span className="text-sm text-gray-500">2017</span>
      </div>
      <div className="card bg-white shadow-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-6 h-6 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <h3 className="text-xl font-semibold">Team Collaboration</h3>
        </div>
        <p className="text-gray-600 mb-2">Agile মেথডে টিমওয়ার্ক।</p>
        <span className="text-sm text-gray-500">2016</span>
      </div>
    </div>
  </div>
</div>
  );
};

export default About;
