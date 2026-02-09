import React, { useState } from "react";

const UserHelpDesk = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-background p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text">
          Help Desk
        </h1>
        <p className="text-text/70 mt-1">
          Need help? Create a ticket and we’ll get back to you
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Create Ticket */}
        <div className="lg:col-span-2 bg-background rounded-xl p-6 shadow-sm border border-secondary">
          <h2 className="text-xl font-semibold text-text mb-4">
            Create Support Ticket
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-text/70 mb-1">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Order issue, payment problem..."
                className="w-full border border-secondary rounded-lg px-4 py-2 bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-text/70 mb-1">
                Message
              </label>
              <textarea
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your issue clearly..."
                className="w-full border border-secondary rounded-lg px-4 py-2 bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-buttons px-6 py-2 rounded-lg hover:bg-primary-hover transition"
            >
              Submit Ticket
            </button>
          </form>
        </div>

        {/* Support Info */}
        <div className="bg-background rounded-xl p-6 shadow-sm border border-secondary">
          <h2 className="text-xl font-semibold text-text mb-4">
            Support Info
          </h2>

          <ul className="space-y-3 text-text/70">
            <li>📧 support@example.com</li>
            <li>📞 +91 98765 43210</li>
            <li>⏱ Response time: 24–48 hours</li>
          </ul>

          <div className="mt-6 p-4 rounded-lg bg-secondary text-sm text-text">
            Tip: Please include your Order ID for faster resolution.
          </div>
        </div>

      </div>

      {/* My Tickets */}
      <div className="mt-10 bg-background rounded-xl shadow-sm border border-secondary p-6">
        <h2 className="text-xl font-semibold text-text mb-4">
          My Tickets
        </h2>

        <div className="space-y-4">

          <div className="flex justify-between items-center border border-secondary rounded-lg p-4">
            <div>
              <h4 className="font-medium text-text">
                Payment not reflected
              </h4>
              <p className="text-sm text-text/70">
                Ticket ID: #SUP-1201
              </p>
            </div>
            <span className="px-3 py-1 text-sm rounded-full bg-secondary text-text">
              Open
            </span>
          </div>

          <div className="flex justify-between items-center border border-secondary rounded-lg p-4">
            <div>
              <h4 className="font-medium text-text">
                Order delivery delayed
              </h4>
              <p className="text-sm text-text/70">
                Ticket ID: #SUP-1188
              </p>
            </div>
            <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
              Resolved
            </span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default UserHelpDesk;
