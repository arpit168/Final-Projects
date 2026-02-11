import React from "react";

const RestaurantHelpDesk = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8 space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Help Desk & Support
          </h1>
          <p className="text-white/80 mt-1">
            Manage tickets, customer queries and restaurant support
          </p>
        </div>

        <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-xl font-semibold transition shadow-md">
          + New Ticket
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
          <h3 className="text-sm text-primary font-medium">Open Tickets</h3>
          <p className="text-3xl font-bold text-white mt-2">12</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
          <h3 className="text-sm text-secondary font-medium">Resolved Today</h3>
          <p className="text-3xl font-bold text-white mt-2">8</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
          <h3 className="text-sm text-yellow-400 font-medium">Avg. Response</h3>
          <p className="text-3xl font-bold text-white mt-2">18m</p>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
          <h3 className="text-sm text-red-500 font-medium">Satisfaction</h3>
          <p className="text-3xl font-bold text-white mt-2">4.6/5</p>
        </div>

      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Ticket List */}
        <div className="lg:col-span-2 bg-gray-800 rounded-2xl border border-gray-700 shadow-sm">

          <div className="p-6 border-b border-gray-700 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <h2 className="text-xl font-semibold text-white">
              Recent Tickets
            </h2>

            <input
              type="text"
              placeholder="Search tickets..."
              className="w-full md:w-64 border border-gray-600 rounded-lg px-4 py-2 bg-gray-900 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="divide-y divide-gray-700">

            {[
              { id: "#2451", user: "Rahul Sharma", issue: "Late food delivery", status: "Open" },
              { id: "#2450", user: "Priya Singh", issue: "Wrong item received", status: "In Progress" },
              { id: "#2449", user: "Amit Verma", issue: "Refund request", status: "Resolved" },
            ].map((ticket, index) => (
              <div
                key={index}
                className="p-6 flex justify-between items-center hover:bg-gray-700 transition"
              >
                <div>
                  <p className="font-semibold text-white">
                    {ticket.id} - {ticket.user}
                  </p>
                  <p className="text-white/80">
                    {ticket.issue}
                  </p>
                </div>

                <span
                  className={`px-4 py-1 rounded-full text-sm font-medium ${
                    ticket.status === "Open"
                      ? "bg-red-700 text-white"
                      : ticket.status === "In Progress"
                      ? "bg-yellow-700 text-white"
                      : "bg-green-700 text-white"
                  }`}
                >
                  {ticket.status}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">

          {/* Contact Support */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Support
            </h3>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-gray-900 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                rows="3"
                placeholder="Describe your issue"
                className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-gray-900 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="w-full bg-secondary hover:bg-secondary-hover text-white py-2.5 rounded-xl font-semibold transition shadow-md">
                Submit Request
              </button>
            </form>
          </div>

          {/* FAQ */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-white mb-4">
              FAQs
            </h3>

            <div className="space-y-4 text-white/80">
              <div>
                <p className="font-medium text-white">How to track orders?</p>
                <p>Visit Orders section to view real-time tracking.</p>
              </div>

              <div>
                <p className="font-medium text-white">How to update menu?</p>
                <p>Go to Dashboard → Menu → Edit Items.</p>
              </div>

              <div>
                <p className="font-medium text-white">Refund processing time?</p>
                <p>Refunds are processed within 3–5 business days.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default RestaurantHelpDesk;
