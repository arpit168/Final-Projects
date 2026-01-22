import React from "react";
import { RxCross2 } from "react-icons/rx";

const EditProfileModal = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-100">
        <div className="bg-white w-5xl max-h-[85vh] overflow-y-auto p-10 ">
          <button
            className="text-2xl float-end sticky top-0 border bg-white hover:text-white hover:bg-red-500 rounded-2xl duration-200 hover:rotate-180"
            onClick={onClose}
          >
            <RxCross2 />
          </button>
          <div>EditProfileModal</div>
        </div>
      </div>
    </>
  );
};

export default EditProfileModal;
