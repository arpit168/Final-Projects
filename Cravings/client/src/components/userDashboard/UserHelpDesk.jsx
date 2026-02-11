import React, { useState } from "react";
import toast from "react-hot-toast";

const UserHelpDesk = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [tickets, setTickets] = useState([
    { id: "#SUP-1201", title: "Payment not reflected", status: "open" },
    { id: "#SUP-1188", title: "Order delivery delayed", status: "resolved" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subject.trim() || !message.trim()) {
      toast.error("Please fill in both Subject and Message");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const newTicket = {
        id: `#SUP-${Math.floor(Math.random() * 9999)}`,
        title: subject,
        status: "open",
      };
      setTickets([newTicket, ...tickets]);
      setSubject("");
      setMessage("");
      toast.success("Ticket submitted successfully!");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background p-6 space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-text">Help Desk</h1>
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

          <form onSubmit={handleSubmit} className="space-y-4">

            <InputField
              label="Subject"
              placeholder="Order issue, payment problem..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <TextareaField
              label="Message"
              placeholder="Describe your issue clearly..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-buttons px-6 py-2 rounded-lg hover:bg-primary-hover transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Ticket"}
            </button>

          </form>
        </div>

        {/* Support Info */}
        <div className="bg-background rounded-xl p-6 shadow-sm border border-secondary">
          <h2 className="text-xl font-semibold text-text mb-4">Support Info</h2>

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
      <div className="bg-background rounded-xl shadow-sm border border-secondary p-6">
        <h2 className="text-xl font-semibold text-text mb-4">My Tickets</h2>

        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="flex justify-between items-center border border-secondary rounded-lg p-4"
            >
              <div>
                <h4 className="font-medium text-text">{ticket.title}</h4>
                <p className="text-sm text-text/70">Ticket ID: {ticket.id}</p>
              </div>
              <span
                className={`px-3 py-1 text-sm rounded-full ${
                  ticket.status === "open"
                    ? "bg-secondary text-text"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* 🔹 Reusable Input Fields */
const InputField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm text-text/70 mb-1">{label}</label>
    <input
      {...props}
      className="w-full border border-secondary rounded-lg px-4 py-2 bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>
);

const TextareaField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm text-text/70 mb-1">{label}</label>
    <textarea
      {...props}
      className="w-full border border-secondary rounded-lg px-4 py-2 bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary resize-none"
    />
  </div>
);

export default UserHelpDesk;
