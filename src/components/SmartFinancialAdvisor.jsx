export default function SmartFinancialAdvisor() {
  return (
    <section className="bg-linear-to-r from-purple-600 to-purple-500 text-white rounded-2xl p-8 mt-10 shadow-lg">
      <h3 className="text-xl font-semibold mb-6">Smart Financial Advisor</h3>
      <p className="text-sm text-purple-100 mb-6">
        AI-powered insights for better spending
      </p>

      <div className="space-y-4">
        <div className="bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20">
          <p className="text-sm font-medium text-white">
            🚗 Transport Spending Alert
          </p>
          <p className="text-xs text-purple-100 mt-1">
            You spent 25% more on transport this week…
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20">
          <p className="text-sm font-medium text-white">
            🥗 Food Budget Optimization
          </p>
          <p className="text-xs text-purple-100 mt-1">
            Your dining expenses are below budget this month…
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20">
          <p className="text-sm font-medium text-white">
            🔔 Subscription Review Reminder
          </p>
          <p className="text-xs text-purple-100 mt-1">
            You have 3 recurring subscriptions totaling $47.97/month…
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <button className="w-full md:w-1/2 bg-white text-purple-600 py-3 rounded-lg font-medium hover:opacity-90 transition">
          View Full Report
        </button>
        <button className="w-full md:w-1/2 border border-white py-3 rounded-lg font-medium hover:bg-white/10 transition">
          Set Budget Goals
        </button>
      </div>
    </section>
  );
}
