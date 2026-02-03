import React, { useEffect, useState } from "react";
import AddMenuItemModal from "./modals/AddMenuItemModal";
import api from "../../config/Api";
import toast from "react-hot-toast";

const RestaurantMenu = () => {
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMenuItem = async () => {
    try {
      setLoading(true);
      const res = await api.get("/restaurant/menuItems");
      setMenuItems(res.data.data || []);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to fetch menu items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isAddItemModalOpen) fetchMenuItem();
  }, [isAddItemModalOpen]);

  return (
    <>
      {/* Page Wrapper */}
      <div className="bg-gray-50 min-h-full p-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Menu Management
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Manage your restaurant dishes, pricing & availability
            </p>
          </div>

          <button
            onClick={() => setIsAddItemModalOpen(true)}
            className="px-5 py-2.5 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-950 transition"
          >
            + Add Menu Item
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          {/* Loading */}
          {loading && (
            <div className="text-center py-20 text-gray-500">
              Loading menu items...
            </div>
          )}

          {/* Empty State */}
          {!loading && menuItems.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="text-6xl mb-4">🍽️</div>
              <h2 className="text-xl font-semibold text-gray-800">
                No Menu Items Added
              </h2>
              <p className="text-gray-600 mt-2 max-w-md">
                Start building your restaurant menu by adding delicious dishes
                with images, pricing and details.
              </p>
              <button
                onClick={() => setIsAddItemModalOpen(true)}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Add Your First Item
              </button>
            </div>
          )}

          {/* Menu Grid */}
          {!loading && menuItems.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {menuItems.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition bg-white"
                >
                  {/* Image */}
                  <div className="h-48 bg-gray-100">
                    <img
                      src={item?.itemImages?.[0] || "/food-placeholder.png"}
                      alt={item.itemName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Body */}
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.itemName}
                      </h3>
                      <span className="text-green-600 font-bold">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.type && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700">
                          {item.type}
                        </span>
                      )}
                      {item.cuisine && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700">
                          {item.cuisine}
                        </span>
                      )}
                      {item.servingSize && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-purple-100 text-purple-700">
                          {item.servingSize}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                      <span className="text-sm text-gray-500">
                        ⏱ {item.preparationTime} min
                      </span>

                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          item.availability === "available"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.availability === "available"
                          ? "Available"
                          : "Unavailable"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isAddItemModalOpen && (
        <AddMenuItemModal onClose={() => setIsAddItemModalOpen(false)} />
      )}
    </>
  );
};

export default RestaurantMenu;
