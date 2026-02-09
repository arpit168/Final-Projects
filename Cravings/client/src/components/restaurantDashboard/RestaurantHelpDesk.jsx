import React from "react";

const RestaurantHelpDesk = () => {
  return (
    <div className="bg-(--color-background) rounded-lg p-6 h-full overflow-y-auto">
      <div className="bg-(--color-background) rounded-lg shadow-md p-6 border border-(--color-buttons)">
        <h2 className="text-2xl font-bold text-(--color-text) mb-4">
          Help Desk & Support
        </h2>

        <div className="text-center text-(--color-secondary) py-12">
          <p className="text-lg">
            Support tickets and help desk features will be displayed here
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHelpDesk;
