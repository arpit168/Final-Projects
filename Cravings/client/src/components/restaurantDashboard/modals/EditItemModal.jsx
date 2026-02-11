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
    availability: selectedItem?.availability || true,
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
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5);
    const previews = files.map((img) => URL.createObjectURL(img));
    setImages(files);
    setImagePreviews(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const form_data = new FormData();
      Object.entries(formData).forEach(([key, value]) => form_data.append(key, value));
      images.forEach((img) => form_data.append("itemImages", img));

      const res = await api.put(`/restaurant/updateMenuItem/${selectedItem._id}`, form_data);
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
      availability: true,
    });
    setImages([]);
    setImagePreviews([]);
    setErrors({});
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-[#1E293B] text-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">

        {/* Header */}
        <div className="flex justify-between px-6 py-4 border-b border-[#334155] sticky top-0 bg-[#1E293B]">
          <h2 className="text-xl font-semibold">Edit Menu Item</h2>
          <button
            onClick={handleClose}
            className="text-white hover:text-[#2563EB] text-2xl transition"
          >
            ⊗
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">

          {/* Image Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-[#334155]">
              Update Item Image
            </h3>

            <div className="flex items-end gap-4">
              <label
                htmlFor="image"
                className="px-6 py-2 bg-[#2563EB] text-white rounded-md hover:bg-[#1D4ED8] cursor-pointer transition"
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
                  <div key={i} className="border border-[#334155] rounded-md overflow-hidden h-24">
                    <img src={img} className="w-full h-full object-cover" alt="preview" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Item Name</label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleInputChange}
                className="w-full border border-[#334155] rounded-md p-2 bg-[#0F172A] text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                className="w-full border border-[#334155] rounded-md p-2 bg-[#0F172A] text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
          </div>

          {/* Attributes */}
          <div className="grid md:grid-cols-3 gap-4 items-center">
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="border border-[#334155] rounded-md p-2 bg-[#0F172A] text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            >
              <option value="">Select Type</option>
              <option value="veg">Vegetarian</option>
              <option value="non-veg">Non-Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="egg">Egg</option>
              <option value="jain">Jain</option>
            </select>

            <input
              type="number"
              name="preparationTime"
              value={formData.preparationTime}
              onChange={handleInputChange}
              placeholder="Prep Time (min)"
              className="border border-[#334155] rounded-md p-2 bg-[#0F172A] text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />

            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                name="availability"
                checked={formData.availability}
                onChange={handleInputChange}
              />
              Available
            </label>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t border-[#334155]">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2 bg-[#334155] text-white rounded-md hover:bg-[#475569]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-[#2563EB] text-white rounded-md hover:bg-[#1D4ED8] disabled:opacity-50"
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
