import React from "react";

const RestaurantOrders = () => {
  return (
    <div className="bg-(--color-background) rounded-lg p-6 h-full overflow-y-auto">
      <div className="bg-(--color-background) rounded-lg shadow-md p-6 border border-(--color-buttons)">
        {/* Header */}
        <h2 className="text-2xl font-bold text-(--color-text) mb-4">
          Orders
        </h2>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-20 h-20 rounded-full bg-(--color-secondary-hover) flex items-center justify-center mb-4">
            <span className="text-3xl">📦</span>
          </div>

          <p className="text-lg font-medium text-(--color-text)">
            Orders will be displayed here
          </p>

          <p className="text-sm text-(--color-secondary) mt-1">
            You’ll be able to manage and track all customer orders
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantOrders;
