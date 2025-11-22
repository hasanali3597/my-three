import React from "react";
import Navebar from "../Components/Navebar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="card w-full max-w-4xl shadow-xl bg-base-100 grid lg:grid-cols-2">
        {/* Left Side Image */}
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-200 to-indigo-300">
          <img
            src="https://i.ibb.co.com/VpVsy9xQ/Whats-App-Image-2025-09-14-at-14-00-57-808958cb.jpg"
            alt="Contact illustration"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side Form */}
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold mb-4 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615A2.25 2.25 0 013.75 6.993V6.75"
              />
            </svg>
            Contact Us
          </h2>
          <p className="mb-6 text-gray-600">
            কোনো প্রশ্ন বা মতামত থাকলে নিচের ফর্মটি পূরণ করুন।
          </p>

          <form className="space-y-4">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c0 1.657-1.343 3-3 3S6 12.657 6 11s1.343-3 3-3 3 1.343 3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3z"
                />
              </svg>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m0 0l4-4m-4 4l4 4"
                />
              </svg>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500 mt-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
