import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
      type:String,
      enum:["admin","Manager","partner","customer"],
      required:true,
      default:"customer",
    },
     dob: {
      type: String,
      required: true,
    },
     gender: {
      type: String,
      enum:["male","female","others"],
      required: true,
    },
     city: {
      type: String,
      required: true,
    },
     pin: {
      type: String,
      required: true,
    },
     photo: {
     url:{
      type:String,
      default:"",
     },
     publicID:{
      type:String,
      default:""
     },
    },
    restaurantName:{
      
    }
  },

  { timeStamps: true },
);

const User = mongoose.model("User", userSchema);
export default User;
