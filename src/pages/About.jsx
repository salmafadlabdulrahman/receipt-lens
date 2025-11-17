import React from "react";

export default function About() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <section
        className="text-center py-28 bg-gradient-to-b from-purple-50 to-white"
        id="about"
      >
        <div className="w-16 h-16 mx-auto mb-6 bg-purple-200 rounded-xl flex items-center justify-center">
          <span className="text-purple-600 text-2xl">🧾</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">About Spend Right</h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Spend Right helps individuals and businesses save time and money by
          turning receipts into smart financial insights. Our AI-powered
          platform simplifies expense management, making it effortless to track,
          analyze, and optimize your spending.
        </p>
      </section>

      <section className="py-20 text-center" id="features">
        <h2 className="text-3xl font-bold mb-3">Core Features</h2>
        <p className="text-gray-600 mb-14">
          Powerful tools designed to transform how you manage expenses
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
          {[
            {
              title: "AI Receipt Scanning",
              desc: "Instantly capture and digitize receipts with advanced OCR technology.\nNo more manual data entry.",
            },
            {
              title: "Smart Financial Advisor",
              desc: "Get personalized insights powered by AI to optimize your spending habits.",
            },
            {
              title: "Expense Analytics",
              desc: "Visualize spending patterns with interactive dashboards and reports.",
            },
            {
              title: "Secure Cloud Storage",
              desc: "Your data is encrypted and safely stored, accessible anytime, anywhere.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-purple-50 text-left rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 bg-purple-200 text-purple-600 rounded-lg mb-4 flex items-center justify-center text-lg">
                🧩
              </div>
              <h4 className="font-semibold text-lg mb-2">{f.title}</h4>
              <p className="text-sm text-gray-600 whitespace-pre-line">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          <div>
            <p className="text-xs font-semibold text-purple-500 mb-2">
              Our Vision
            </p>
            <h3 className="text-3xl font-bold mb-6">
              Building the Future of Financial Management
            </h3>
            <p className="text-gray-600 mb-6">
              We envision a world where managing expenses is effortless,
              intelligent, and empowering. By combining cutting-edge AI
              technology with intuitive design, we’re helping people achieve
              better financial decisions.
            </p>

            <div className="flex gap-10 text-sm text-gray-700">
              <div>
                <div className="text-purple-600 text-lg mb-1">⚙️</div>
                <p className="font-medium">AI-Powered Insights</p>
                <p className="text-gray-500 text-xs">
                  Smart recommendations tailored to you
                </p>
              </div>

              <div>
                <div className="text-purple-600 text-lg mb-1">🔄</div>
                <p className="font-medium">Real-Time Sync</p>
                <p className="text-gray-500 text-xs">
                  Access your data anywhere
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg bg-black h-72 flex items-center justify-center">
            <span className="text-white opacity-80">Analytics Dashboard</span>
          </div>
        </div>
      </section>

      <section className="text-center py-20 bg-gradient-to-r from-purple-600 to-purple-500 text-white">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Transform Your Expense Management?
        </h3>
        <p className="mb-8">
          Join thousands of users who are already saving time and money.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
            Start Free Trial
          </button>
          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
