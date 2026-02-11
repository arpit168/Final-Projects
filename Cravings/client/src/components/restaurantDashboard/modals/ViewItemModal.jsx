import React from "react";

const ViewItemModal = ({ onClose, selectedItem }) => {
  if (!selectedItem) return null;

  const images = selectedItem.images || [];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-[#1E293B] text-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg border border-[#334155]">

        {/* Header */}
        <div className="flex justify-between px-6 py-4 border-b border-[#334155] items-center sticky top-0 bg-[#1E293B]">
          <h2 className="text-2xl font-semibold">
            {selectedItem.itemName}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-blue-500 text-2xl transition"
          >
            ⊗
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">

          {/* Image Gallery */}
          {images.length > 0 && (
            <div className="space-y-3">
              <label className="block text-sm font-semibold mb-2">
                Images
              </label>

              <div className="flex gap-4 flex-wrap">
                {images.slice(0, 5).map((image, index) => (
                  <div
                    key={index}
                    className="w-32 h-32 rounded-lg overflow-hidden bg-[#334155] border border-[#475569] flex items-center justify-center"
                  >
                    <img
                      src={image.url}
                      alt={`${selectedItem.itemName} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Item Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Item Name</label>
              <p className="font-medium">{selectedItem.itemName}</p>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Price</label>
              <p className="text-lg font-bold text-blue-500">
                ₹{parseFloat(selectedItem.price).toFixed(2)}
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Cuisine</label>
              <p className="capitalize">{selectedItem.cuisine}</p>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Type</label>
              <p
                className={`font-medium capitalize ${
                  selectedItem.type === "veg" ? "text-green-400" : "text-red-400"
                }`}
              >
                {selectedItem.type}
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Serving Size</label>
              <p>{selectedItem.servingSize} Persons</p>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Preparation Time</label>
              <p>{selectedItem.preparationTime} mins</p>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Availability</label>
              <p
                className={`font-medium capitalize ${
                  selectedItem.availability === "available" ? "text-green-400" : "text-red-400"
                }`}
              >
                {selectedItem.availability}
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-2">Description</label>
            <p className="bg-[#334155] p-3 rounded leading-relaxed">
              {selectedItem.description}
            </p>
          </div>

          {/* Metadata */}
          <div className="text-xs text-gray-400 space-y-1 pt-4 border-t border-[#334155]">
            <p>Created: {new Date(selectedItem.createdAt).toLocaleDateString()}</p>
            <p>Last Updated: {new Date(selectedItem.updatedAt).toLocaleDateString()}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewItemModal;
