import React from "react";

const RestaurantEarnings = () => {
  return (
    <div className="bg-(--color-background) rounded-lg p-6 h-full overflow-y-auto">
      <div className="bg-(--color-background) rounded-lg shadow-md p-6 border border-(--color-buttons)">
        <h2 className="text-2xl font-bold text-(--color-text) mb-4">
          Earnings & Transactions
        </h2>

        <div className="text-center text-(--color-secondary) py-12">
          <p className="text-lg">
            Earnings and transaction history will be displayed here
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantEarnings;
