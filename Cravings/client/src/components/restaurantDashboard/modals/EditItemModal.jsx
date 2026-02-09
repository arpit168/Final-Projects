import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../config/Api";
import toast from "react-hot-toast";

const EditItemModal = ({ onClose, selectedItem }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    itemName: selectedItem?.itemName || "",
    description: selectedItem?.description || "",
    price: selectedItem?.price || "",
    cuisine: selectedItem?.cuisine || "",
    type: selectedItem?.type || "",
    preparationTime: selectedItem?.preparationTime || "",
    servingSize: selectedItem?.servingSize || "",
    availability: selectedItem?.availability || "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((img) => URL.createObjectURL(img));
    setImagePreviews(previews.slice(0, 5));
    setImages(files.slice(0, 5));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form_data = new FormData();
      Object.entries(formData).forEach(([key, value]) =>
        form_data.append(key, value)
      );

      images.forEach((img) => form_data.append("itemImages", img));

      const res = await api.put(
        `/restaurant/updateMenuItem/${selectedItem._id}`,
        form_data
      );

      toast.success(res.data.message);
      setTimeout(handleClose, 1500);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to update menu item");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({
      itemName: "",
      description: "",
      price: "",
      cuisine: "",
      type: "",
      preparationTime: "",
      servingSize: "",
      availability: "",
    });
    setImagePreviews([]);
    setImages([]);
    setErrors({});
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100">
      <div className="bg-(--color-background) text-(--color-text) w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between px-6 py-4 border-b items-center sticky top-0 bg-(--color-background)">
          <h2 className="text-xl font-semibold">Edit Menu Item</h2>
          <button
            onClick={handleClose}
            className="text-(--color-text) hover:text-(--color-secondary) text-2xl transition"
          >
            ⊗
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Image Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b">
              Update Item Image
            </h3>

            <div className="flex items-end gap-4">
              <label
                htmlFor="image"
                className="px-6 py-2 bg-(--color-secondary) text-white rounded-md hover:bg-(--color-secondary-hover) cursor-pointer transition"
              >
                Add Image
              </label>

              <input
                type="file"
                id="image"
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
                multiple
              />
            </div>

            {imagePreviews.length > 0 && (
              <div className="mt-3 grid grid-cols-5 gap-1">
                {imagePreviews.map((img, i) => (
                  <div key={i} className="border rounded-md overflow-hidden">
                    <img src={img} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Inputs */}
          {[
            ["Item Name", "itemName"],
            ["Description", "description", "textarea"],
          ].map(([label, name, type]) => (
            <div key={name}>
              <label className="block text-sm font-medium mb-1">{label}</label>
              {type === "textarea" ? (
                <textarea
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-(--color-primary)"
                />
              ) : (
                <input
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handleInputChange}
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-(--color-primary)"
                />
              )}
            </div>
          ))}

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2 bg-(--color-buttons) text-(--color-text) rounded-md hover:opacity-90"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-(--color-primary) text-white rounded-md hover:bg-(--color-primary-hover) disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Menu Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItemModal;
