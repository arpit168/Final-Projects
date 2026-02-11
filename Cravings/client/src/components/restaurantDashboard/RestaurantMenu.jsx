import React, { useEffect, useState } from "react";
import AddMenuItemModal from "./modals/AddMenuItemModal";
import api from "../../config/Api";
import toast from "react-hot-toast";
import { FaEye, FaEdit } from "react-icons/fa";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { ImBlocked } from "react-icons/im";
import ViewItemModal from "./modals/ViewItemModal";
import EditItemModal from "./modals/EditItemModal";

const RestaurantMenu = () => {
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [isViewItemModalOpen, setIsViewItemModalOpen] = useState(false);
  const [isEditItemModalOpen, setIsEditItemModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [menuItems, setMenuItems] = useState([]);

  const fetchMenuItem = async () => {
    try {
      const res = await api.get("/restaurant/menuItems");
      setMenuItems(res.data.data);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to fetch menu");
    }
  };

  useEffect(() => {
    if (!isAddItemModalOpen && !isEditItemModalOpen) {
      fetchMenuItem();
    }
  }, [isAddItemModalOpen, isEditItemModalOpen]);

  return (
    <>
      <div className="bg-background min-h-screen p-4 md:p-6">
        <div className="bg-background border border-secondary rounded-xl p-4 md:p-6">

          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-text">
              Menu Management
            </h2>

            <button
              className="px-4 py-2 bg-secondary hover:bg-secondary-hover text-text rounded-lg font-semibold transition w-full sm:w-auto"
              onClick={() => setIsAddItemModalOpen(true)}
            >
              Add Item
            </button>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block mt-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary text-text text-left">
                  <th className="p-3">S.no</th>
                  <th className="p-3">Item Name</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Cuisine</th>
                  <th className="p-3 text-center">Availability</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {menuItems.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-secondary text-text"
                  >
                    <td className="p-3">{idx + 1}</td>
                    <td className="p-3 font-medium">{item.itemName}</td>
                    <td className="p-3">₹ {item.price}</td>
                    <td className="p-3 capitalize">{item.type}</td>
                    <td className="p-3">{item.cuisine}</td>

                    <td className="p-3 text-center text-xl">
                      {item.availability === "available" ? (
                        <FaToggleOn className="text-primary inline" />
                      ) : item.availability === "unavailable" ? (
                        <FaToggleOff className="text-secondary inline" />
                      ) : (
                        <ImBlocked className="text-text inline" />
                      )}
                    </td>

                    <td className="p-3">
                      <div className="flex justify-center gap-3">
                        <button
                          className="p-2 rounded-lg border border-secondary hover:bg-secondary-hover transition"
                          onClick={() => {
                            setSelectedItem(item);
                            setIsViewItemModalOpen(true);
                          }}
                        >
                          <FaEye className="text-text" />
                        </button>

                        <button
                          className="p-2 rounded-lg border border-secondary hover:bg-primary-hover transition"
                          onClick={() => {
                            setSelectedItem(item);
                            setIsEditItemModalOpen(true);
                          }}
                        >
                          <FaEdit className="text-text" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden mt-6 space-y-4">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-secondary rounded-xl p-4 bg-background space-y-2"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-text">
                    {item.itemName}
                  </h3>
                  <span className="text-primary font-bold">
                    ₹ {item.price}
                  </span>
                </div>

                <div className="text-sm text-text space-y-1">
                  <p><span className="font-medium">Type:</span> {item.type}</p>
                  <p><span className="font-medium">Cuisine:</span> {item.cuisine}</p>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <div className="text-xl">
                    {item.availability === "available" ? (
                      <FaToggleOn className="text-primary" />
                    ) : item.availability === "unavailable" ? (
                      <FaToggleOff className="text-secondary" />
                    ) : (
                      <ImBlocked className="text-text" />
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      className="p-2 rounded-lg border border-secondary hover:bg-secondary-hover transition"
                      onClick={() => {
                        setSelectedItem(item);
                        setIsViewItemModalOpen(true);
                      }}
                    >
                      <FaEye className="text-text" />
                    </button>

                    <button
                      className="p-2 rounded-lg border border-secondary hover:bg-primary-hover transition"
                      onClick={() => {
                        setSelectedItem(item);
                        setIsEditItemModalOpen(true);
                      }}
                    >
                      <FaEdit className="text-text" />
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
