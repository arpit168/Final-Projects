import React from "react";

const RestaurantHelpDesk = () => {
  return (
    <div className="bg-background text-text min-h-screen p-8 space-y-8">

      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary">
            Help Desk & Support
          </h1>
          <p className="text-sm text-secondary-hover">
            Manage tickets, customer queries and restaurant support
          </p>
        </div>

        <button className="bg-primary hover:bg-primary-hover text-background px-6 py-2 rounded-lg font-medium transition">
          + New Ticket
        </button>
      </div>

      {/* Support Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-secondary-hover rounded-2xl p-6 border border-secondary">
          <h3 className="text-sm text-secondary">Open Tickets</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-secondary-hover rounded-2xl p-6 border border-secondary">
          <h3 className="text-sm text-secondary">Resolved Today</h3>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>

        <div className="bg-secondary-hover rounded-2xl p-6 border border-secondary">
          <h3 className="text-sm text-secondary">Avg. Response</h3>
          <p className="text-3xl font-bold mt-2">18m</p>
        </div>

        <div className="bg-secondary-hover rounded-2xl p-6 border border-secondary">
          <h3 className="text-sm text-secondary">Satisfaction</h3>
          <p className="text-3xl font-bold mt-2">4.6/5</p>
        </div>

      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Ticket List */}
        <div className="lg:col-span-2 bg-background rounded-2xl border border-secondary shadow-sm">

          <div className="p-6 border-b border-secondary flex justify-between items-center">
            <h2 className="text-xl font-semibold text-secondary">
              Recent Tickets
            </h2>

            <input
              type="text"
              placeholder="Search tickets..."
              className="border border-secondary rounded-lg px-4 py-2 bg-background focus:outline-none"
            />
          </div>

          <div className="divide-y divide-secondary">

            {[
              { id: "#2451", user: "Rahul Sharma", issue: "Late food delivery", status: "Open" },
              { id: "#2450", user: "Priya Singh", issue: "Wrong item received", status: "In Progress" },
              { id: "#2449", user: "Amit Verma", issue: "Refund request", status: "Resolved" },
            ].map((ticket, index) => (
              <div key={index} className="p-6 flex justify-between items-center hover:bg-secondary-hover transition">

                <div>
                  <p className="font-semibold">{ticket.id} - {ticket.user}</p>
                  <p className="text-sm text-secondary-hover">{ticket.issue}</p>
                </div>

                <span className="px-4 py-1 rounded-full text-sm border border-secondary">
                  {ticket.status}
                </span>

              </div>
            ))}

          </div>
        </div>

        {/* FAQ & Contact */}
        <div className="space-y-6">

          {/* Quick Contact */}
          <div className="bg-background border border-secondary rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-secondary mb-4">
              Contact Support
            </h3>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-secondary rounded-lg px-4 py-2 bg-background focus:outline-none"
              />
              <textarea
                rows="3"
                placeholder="Describe your issue"
                className="w-full border border-secondary rounded-lg px-4 py-2 bg-background focus:outline-none"
              />
              <button className="w-full bg-buttons hover:bg-buttons-hover text-background py-2 rounded-lg font-medium transition">
                Submit Request
              </button>
            </form>
          </div>

          {/* FAQ */}
          <div className="bg-background border border-secondary rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-secondary mb-4">
              FAQs
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium">How to track orders?</p>
                <p className="text-secondary-hover">
                  Visit Orders section to view real-time tracking.
                </p>
              </div>

              <div>
                <p className="font-medium">How to update menu?</p>
                <p className="text-secondary-hover">
                  Go to Restaurant Dashboard → Menu → Edit Items.
                </p>
              </div>

              <div>
                <p className="font-medium">Refund processing time?</p>
                <p className="text-secondary-hover">
                  Refunds are processed within 3–5 business days.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default RestaurantHelpDesk;
