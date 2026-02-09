import React from "react";

const UserTransaction = () => {
  return (
    <div className="min-h-screen bg-background p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text">
          Transactions
        </h1>
        <p className="text-text/60 mt-1">
          View your payment history and wallet activity
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <div className="bg-background p-6 rounded-xl shadow-sm border">
          <h3 className="text-sm text-text/60">Total Spent</h3>
          <p className="text-3xl font-semibold text-text mt-2">
            ₹24,560
          </p>
        </div>

        <div className="bg-background p-6 rounded-xl shadow-sm border">
          <h3 className="text-sm text-text/60">Total Received</h3>
          <p className="text-3xl font-semibold text-secondary mt-2">
            ₹3,200
          </p>
        </div>

        <div className="bg-background p-6 rounded-xl shadow-sm border">
          <h3 className="text-sm text-text/60">Pending Payments</h3>
          <p className="text-3xl font-semibold text-primary mt-2">
            ₹850
          </p>
        </div>

        <div className="bg-background p-6 rounded-xl shadow-sm border">
          <h3 className="text-sm text-text/60">Wallet Balance</h3>
          <p className="text-3xl font-semibold text-text mt-2">
            ₹1,200
          </p>
        </div>

      </div>

      {/* Transaction Table */}
      <div className="bg-background rounded-xl shadow-sm border overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-background text-text/70 text-sm border-b">
            <tr>
              <th className="px-6 py-4">Transaction ID</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody className="text-text">

            <tr className="border-t">
              <td className="px-6 py-4">TXN-90871</td>
              <td className="px-6 py-4">15 Jan 2026</td>
              <td className="px-6 py-4">Order #2451</td>
              <td className="px-6 py-4 text-red-500">- ₹1,250</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-sm bg-secondary/20 text-secondary">
                  Successful
                </span>
              </td>
            </tr>

            <tr className="border-t">
              <td className="px-6 py-4">TXN-90865</td>
              <td className="px-6 py-4">12 Jan 2026</td>
              <td className="px-6 py-4">Wallet Top-up</td>
              <td className="px-6 py-4 text-secondary">+ ₹1,500</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-sm bg-secondary/20 text-secondary">
                  Successful
                </span>
              </td>
            </tr>

            <tr className="border-t">
              <td className="px-6 py-4">TXN-90840</td>
              <td className="px-6 py-4">10 Jan 2026</td>
              <td className="px-6 py-4">Order #2398</td>
              <td className="px-6 py-4 text-primary">- ₹499</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary">
                  Pending
                </span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default UserTransaction;
