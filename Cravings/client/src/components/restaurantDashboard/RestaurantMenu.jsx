import React, { useState } from "react";
import api from "../../config/Api";
import toast from "react-hot-toast";

const RestaurantMenu = () => {
  const [formData, setFormData] = useState({
    dishName: "",
    cuisine: "",
    servingSize: "",
    type: "veg",
    description: "",
    price: "",
    availability: "available",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await api.post("/menu", data);
      toast.success("Dish added successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add dish");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Add Restaurant Menu Item
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-200  p-6 rounded-xl shadow-md  "
      >

        <div className="flex gap-5 items-center border p-2  ">
          <div className="w-25 h-25 border " onChange={()=>handleChange}>

          </div>
            {/* Image */}
        <div>
          <label className="font-semibold">Dish Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="w-full"
          />
        </div>
        
        </div>
       <div className="grid grid-cols-2 space-x-5">
        {/* Dish Name */}
         <div>
          <label className="font-semibold">Dish Name</label>
          <input
            type="text"
            name="dishName"
            value={formData.dishName}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />
        </div>

        {/* Cuisine */}
        <div>
          <label className="font-semibold">Cuisine</label>
          <input
            type="text"
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />
        </div>

        {/* Serving Size */}
        <div>
          <label className="font-semibold">Serving Size</label>
          <input
            type="text"
            name="servingSize"
            value={formData.servingSize}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />
        </div>

        {/* Type */}

        <div>
          <label className="font-semibold">Food Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
            <option value="vegan">Vegan</option>
            <option value="egg">Egg</option>
            <option value="jain">Jain</option>
            <option value="gluten-free">Gluten Free</option>
            <option value="contains-nuts">Contains Nuts</option>
            <option value="dairy">Dairy</option>
          </select>
        </div>
       </div>

        
        {/* Description */}
        <div>
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={3}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 space-x-5">
          {/* Price */}
        <div>
          <label className="font-semibold">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />
        </div>

        {/* Availability */}
        <div>
          <label className="font-semibold">Availability</label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="w-full  border p-3 rounded-lg"
          >
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
            <option value="removed">Removed</option>
          </select>
        </div>
        </div>

      

        {/* Submit */}
      <div className="space-x-5 mt-5">
          <button
          type="reset"
          className="w-25 bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition"
        >
          cancel
        </button>
        <button
          type="submit"
          className="w-75 bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition"
        >
          Add Dish
        </button>
      </div>
      </form>
    </div>
  );
};

export default RestaurantMenu;
