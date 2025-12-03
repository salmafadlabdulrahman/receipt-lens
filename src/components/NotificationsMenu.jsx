import React from "react";
import { Link } from "react-router-dom";

const NotificationsMenu = () => {
  return (
    <section className="absolute bg-white right-3 top-27 rounded-md ml-[1em] h-[400px] overflow-y-auto">
      <section className="max-w-md mx-auto p-4 space-y-3">
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🎊</span>
            <div className="flex-1">
              <p className="text-gray-800 font-semibold">
                Welcome to our website!
              </p>
              <p className="text-gray-600 text-sm mt-1">
                We're excited to have you here
              </p>
              <Link to={"/receipts"} className="mt-3 text-blue-deep text-sm font-medium hover:underline">
                Get Started →
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-3xl">📄</span>
            <div className="flex-1">
              <p className="text-gray-800 font-semibold">
                You've just uploaded a new receipt!
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Processing will take a few moments
              </p>
              <Link to={"/receipts"} className="mt-3 text-purple-mid text-sm font-medium hover:underline">
                View Receipt →
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🔒</span>
            <div className="flex-1">
              <p className="text-gray-800 font-semibold">
                You changed your password!
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Your account security has been updated
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🔒</span>
            <div className="flex-1">
              <p className="text-gray-800 font-semibold">
                You changed your password!
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Your account security has been updated
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default NotificationsMenu;
