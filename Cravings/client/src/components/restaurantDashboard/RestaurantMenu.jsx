import React, { useEffect, useState } from "react";
import AddMenuItemModal from "./modals/AddMenuItemModal";
import ViewItemModal from "./modals/ViewItemModal";
import EditItemModal from "./modals/EditItemModal";
import api from "../../config/Api";
import toast from "react-hot-toast";
import { FaEye, FaEdit } from "react-icons/fa";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { ImBlocked } from "react-icons/im";

const RestaurantMenu = () => {
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [isViewItemModalOpen, setIsViewItemModalOpen] = useState(false);
  const [isEditItemModalOpen, setIsEditItemModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMenuItem = async () => {
    try {
      setIsLoading(true);
      const res = await api.get("/restaurant/menuItems");
      setMenuItems(res?.data?.data || []);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to fetch menu");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isAddItemModalOpen && !isEditItemModalOpen) {
      fetchMenuItem();
    }
  }, [isAddItemModalOpen, isEditItemModalOpen]);

  return (
    <>
      <div className="min-h-screen bg-gray-900 p-6">
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-sm">

          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-100">Menu Management</h2>
              <p className="text-gray-300 text-sm mt-1">Manage your restaurant items easily</p>
            </div>

            <button
              onClick={() => setIsAddItemModalOpen(true)}
              className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl font-semibold transition shadow-md"
            >
              + Add Item
            </button>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white text-left">
                  <th className="p-4">S.no</th>
                  <th className="p-4">Item Name</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Cuisine</th>
                  <th className="p-4 text-center">Availability</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {menuItems.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-700 hover:bg-gray-700 transition"
                  >
                    <td className="p-4 text-gray-300">{idx + 1}</td>
                    <td className="p-4 font-semibold text-gray-100">{item.itemName}</td>
                    <td className="p-4 font-bold text-primary">₹ {item.price}</td>
                    <td className="p-4 capitalize text-gray-300">{item.type}</td>
                    <td className="p-4 text-gray-300">{item.cuisine}</td>

                    {/* Availability */}
                    <td className="p-4 text-center text-xl">
                      {item.availability === "available" ? (
                        <FaToggleOn className="text-green-500 inline" />
                      ) : item.availability === "unavailable" ? (
                        <FaToggleOff className="text-yellow-500 inline" />
                      ) : (
                        <ImBlocked className="text-red-500 inline" />
                      )}
                    </td>

                    {/* Actions */}
                    <td className="p-4">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => {
                            setSelectedItem(item);
                            setIsViewItemModalOpen(true);
                          }}
                          className="p-2 rounded-lg bg-secondary hover:bg-secondary-hover text-white transition"
                        >
                          <FaEye />
                        </button>

                        <button
                          onClick={() => {
                            setSelectedItem(item);
                            setIsEditItemModalOpen(true);
                          }}
                          className="p-2 rounded-lg bg-primary hover:bg-primary-hover text-white transition"
                        >
                          <FaEdit />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-100">{item.itemName}</h3>
                  <span className="font-bold text-primary">₹ {item.price}</span>
                </div>

                <div className="text-sm text-gray-300 mt-2 space-y-1">
                  <p><span className="font-medium">Type:</span> {item.type}</p>
                  <p><span className="font-medium">Cuisine:</span> {item.cuisine}</p>
                </div>

                <div className="flex justify-between items-center pt-3">
                  <div className="text-xl">
                    {item.availability === "available" ? (
                      <FaToggleOn className="text-green-500" />
                    ) : item.availability === "unavailable" ? (
                      <FaToggleOff className="text-yellow-500" />
                    ) : (
                      <ImBlocked className="text-red-500" />
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setSelectedItem(item);
                        setIsViewItemModalOpen(true);
                      }}
                      className="p-2 rounded-lg bg-secondary hover:bg-secondary-hover text-white transition"
                    >
                      <FaEye />
                    </button>

                    <button
                      onClick={() => {
                        setSelectedItem(item);
                        setIsEditItemModalOpen(true);
                      }}
                      className="p-2 rounded-lg bg-primary hover:bg-primary-hover text-white transition"
                    >
                      <FaEdit />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {isAddItemModalOpen && (
        <AddMenuItemModal onClose={() => setIsAddItemModalOpen(false)} />
      )}

      {isViewItemModalOpen && (
        <ViewItemModal
          onClose={() => setIsViewItemModalOpen(false)}
          selectedItem={selectedItem}
        />
      )}

      {isEditItemModalOpen && (
        <EditItemModal
          onClose={() => setIsEditItemModalOpen(false)}
          selectedItem={selectedItem}
        />
      )}
    </>
  );
};

export default RestaurantMenu;
