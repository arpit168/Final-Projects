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
  const [menuItems, setMenuItems] = useState();

  const fetchMenuItem = async () => {
    try {
      const res = await api.get("/restaurant/menuItems");
      toast.success(res.data.message);
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
      <div className="bg-(--color-background) rounded-lg p-6 h-full overflow-y-auto">
        <div className="bg-(--color-background) rounded-lg shadow-md p-6 border border-(--color-buttons)">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-(--color-text)">
              Menu Management
            </h2>

            <button
              className="px-4 py-2 bg-(--color-secondary) text-(--color-text) rounded-lg hover:bg-(--color-secondary-hover) transition font-semibold"
              onClick={() => setIsAddItemModalOpen(true)}
            >
              Add Item
            </button>
          </div>

          <div className="border border-(--color-buttons) mt-3" />

          {/* Table */}
          <table className="w-full mt-3">
            <thead>
              <tr className="grid grid-cols-8 text-lg bg-(--color-secondary) text-(--color-text)">
                <th className="font-semibold">S.no</th>
                <th className="font-semibold col-span-2">Item Name</th>
                <th className="font-semibold">Price</th>
                <th className="font-semibold">Type</th>
                <th className="font-semibold">Cuisine</th>
                <th className="font-semibold">Availability</th>
                <th className="font-semibold">Action</th>
              </tr>
            </thead>

            <tbody>
              {menuItems &&
                menuItems.map((items, idx) => (
                  <tr
                    key={idx}
                    className="grid grid-cols-8 text-center py-2 border-b border-(--color-buttons) text-(--color-text)"
                  >
                    <td>{idx + 1}</td>
                    <td className="col-span-2">{items.itemName}</td>
                    <td>{items.price}</td>
                    <td>{items.type.toUpperCase()}</td>
                    <td>{items.cuisine}</td>

                    <td className="flex justify-center items-center text-2xl">
                      {items.availability === "available" ? (
                        <FaToggleOn
                          className="text-(--color-primary)"
                          title="Available"
                        />
                      ) : items.availability === "unavailable" ? (
                        <FaToggleOff
                          className="text-(--color-secondary)"
                          title="Unavailable"
                        />
                      ) : (
                        <ImBlocked
                          className="text-(--color-text)"
                          title="Removed from Menu"
                        />
                      )}
                    </td>

                    <td className="flex gap-4 justify-center">
                      <button
                        className="p-2 rounded-lg bg-(--color-background) border border-(--color-buttons) shadow hover:bg-(--color-secondary-hover) transition"
                        onClick={() => {
                          setSelectedItem(items);
                          setIsViewItemModalOpen(true);
                        }}
                      >
                        <FaEye className="text-(--color-text)" />
                      </button>

                      <button
                        className="p-2 rounded-lg bg-(--color-background) border border-(--color-buttons) shadow hover:bg-(--color-primary-hover) transition"
                        onClick={() => {
                          setSelectedItem(items);
                          setIsEditItemModalOpen(true);
                        }}
                      >
                        <FaEdit className="text-(--color-text)" />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
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
