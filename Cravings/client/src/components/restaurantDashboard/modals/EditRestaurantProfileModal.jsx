import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../config/Api";

const EditRestaurantProfileModal = ({ onClose }) => {
  const { user, setUser, setIsLogin } = useAuth();
  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    mobileNumber: user?.mobileNumber || "",
    gender: user?.gender || "",
    dob: user?.dob || "",
    address: user?.address || "",
    city: user?.city || "",
    pin: user?.pin || "",
    restaurantName: user?.restaurantName || "",
    cuisine: user?.cuisine || "",
    documents: {
      gst: user?.documents?.gst || "",
      fssai: user?.documents?.fssai || "",
      rc: user?.documents?.rc || "",
      dl: user?.documents?.dl || "",
      uidai: user?.documents?.uidai || "",
      pan: user?.documents?.pan || "",
    },
    paymentDetails: {
      upi: user?.paymentDetails?.upi || "",
      account_number: user?.paymentDetails?.account_number || "",
      ifs_Code: user?.paymentDetails?.ifs_Code || "",
    },
    geoLocation: {
      lat: user?.geoLocation?.lat || "",
      lon: user?.geoLocation?.lon || "",
    },
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  /* ---- logic unchanged ---- */

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100">
      <div className="bg-(--color-background) text-(--color-text) w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between px-6 py-4 border-b items-center sticky top-0 bg-(--color-background)">
          <h2 className="text-xl font-semibold">
            Edit Restaurant Profile
          </h2>
          <button
            onClick={onClose}
            className="text-(--color-text) hover:text-(--color-secondary) text-2xl transition"
          >
            ⊗
          </button>
        </div>

        {/* Message */}
        {message.text && (
          <div
            className={`mx-6 mt-4 p-4 rounded-md border ${
              message.type === "success"
                ? "bg-(--color-secondary)/20 text-(--color-secondary)"
                : "bg-(--color-primary)/20 text-(--color-primary)"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Sections */}
          {[
            "Personal Information",
            "Restaurant Information",
            "Address",
            "Business Documents",
            "Payment Details",
          ].map((title) => (
            <h3
              key={title}
              className="text-lg font-semibold mb-4 pb-2 border-b"
            >
              {title}
            </h3>
          ))}

          {/* Inputs keep same structure – only color tokens */}
          <input
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-(--color-primary)"
          />

          {/* Actions */}
          <div className="flex justify-end space-x-4 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-6 py-2 bg-(--color-buttons) text-(--color-text) rounded-md hover:opacity-90 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-(--color-primary) text-white rounded-md hover:bg-(--color-primary-hover) disabled:opacity-50 flex items-center gap-2"
            >
              {loading ? (
                <>
                  <span className="animate-spin">⟳</span> Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRestaurantProfileModal;
