import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../config/Api";
import toast from "react-hot-toast";
import { RxCross2 } from "react-icons/rx";

const AddMenuItemModal = ({ onClose }) => {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    price: "",
    cuisine: "",
    type: "",
    preparationTime: "",
    servingSize: "",
    availability: true,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []).slice(0, 5);
    const previews = files.map((file) => URL.createObjectURL(file));
    setImages(files);
    setImagePreviews(previews);
  };

  useEffect(() => {
    return () => imagePreviews.forEach((url) => URL.revokeObjectURL(url));
  }, [imagePreviews]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form_data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form_data.append(key, key === "availability" ? (value ? "available" : "unavailable") : value);
      });
      images.forEach((img) => form_data.append("itemImages", img));

      const res = await api.post("/restaurant/addMenuItem", form_data);
      toast.success(res.data.message);
      setTimeout(handleClose, 1200);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add menu item");
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
    <div className="fixed inset-0 bg-[#0F172A] flex items-center justify-center z-50">
      <div className="bg-[#1E293B] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg text-white">

        {/* Header */}
        <div className="flex justify-between px-6 py-4 border-b border-[#334155] items-center sticky top-0 bg-[#1E293B]">
          <h2 className="text-xl font-semibold">Add Menu Item</h2>
          <button
            type="button"
            onClick={handleClose}
            className="border border-[#334155] rounded-bl-2xl rounded-tr-2xl text-3xl hover:bg-[#334155] hover:text-white transition"
          >
            <RxCross2 />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">

          {/* Image Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-[#334155]">
              Item Image
            </h3>

            <div className="flex items-end gap-4">
              <label
                htmlFor="image"
                className="px-6 py-2 bg-[#2563EB] text-white rounded-md cursor-pointer hover:bg-[#1D4ED8]"
              >
                Add Image
              </label>
              <div className="text-sm">
                <p>(Upto 5 Images Allowed)</p>
                <p>(Max Size: 1MB each)</p>
              </div>
              <input
                type="file"
                id="image"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageChange}
              />
            </div>

            {imagePreviews.length > 0 && (
              <div className="mt-3 grid grid-cols-5 gap-2">
                {imagePreviews.map((src, idx) => (
                  <div key={idx} className="border border-[#334155] rounded-md h-24 overflow-hidden">
                    <img src={src} alt="preview" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Basic Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-[#334155]">
              Basic Information
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleInputChange}
                placeholder="Item Name"
                className="w-full border border-[#334155] rounded-md p-2 bg-[#0F172A] text-white"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                placeholder="Item Description"
                className="w-full border border-[#334155] rounded-md p-2 bg-[#0F172A] text-white"
              />
            </div>
          </div>

          {/* Pricing */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-[#334155]">
              Pricing & Category
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Price"
                className="border border-[#334155] rounded-md p-2 bg-[#0F172A] text-white"
              />
              <input
                type="text"
                name="servingSize"
                value={formData.servingSize}
                onChange={handleInputChange}
                placeholder="Serving Size"
                className="border border-[#334155] rounded-md p-2 bg-[#0F172A] text-white"
              />
              <input
                type="text"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleInputChange}
                placeholder="Cuisine"
                className="border border-[#334155] rounded-md p-2 bg-[#0F172A] text-white"
              />
            </div>
          </div>

          {/* Attributes */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-[#334155]">
              Item Attributes
            </h3>
            <div className="grid md:grid-cols-3 gap-4 items-center">
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="border border-[#334155] rounded-md p-2 bg-[#0F172A] text-white"
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
                className="border border-[#334155] rounded-md p-2 bg-[#0F172A] text-white"
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
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t border-[#334155]">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2 bg-[#334155] text-white rounded-md hover:bg-[#475569]"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-[#2563EB] text-white rounded-md hover:bg-[#1D4ED8]"
            >
              {loading ? "Adding..." : "Add Menu Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenuItemModal;
