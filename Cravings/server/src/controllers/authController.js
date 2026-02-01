import User from "../models/userModel.js";
import bcrypt, { hash } from "bcrypt";
import { genToken } from "../utils/authToken.js";
import OTP from "../models/optModel.js";
import { sendOTPEmail } from "../utils/emailService.js";

export const UserRegister = async (req, res, next) => {
  try {
    // accept all from frontend
    const { fullName, email, mobileNumber, password, role } = req.body;

    if (!fullName || !email || !mobileNumber || !password || !role) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    console.log({ fullName, email, mobileNumber, password, role });

    // check for duplicate user before registration

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already registered");
      error.statusCode = 409;
      return next(error);
    }

    console.log("Sending Data to db");

    // encrypt the password

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Photo

    const photoURL = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;
    const photo = {
      url: photoURL,
    };

    // save data to database

    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashPassword,
      role,
    });

    // Send response to frontend
    console.log(newUser);

    res.status(201).json({ message: "Registration Successful" });

    // End
  } catch (error) {
    console.log(error);

    next(error);
  }
};

// Login
export const UserLogin = async (req, res, next) => {
  try {
    // Fetch data from frontend
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 401;
      return next(error);
      console.log(existingUser);
    }

    // verify the password

    const isVerified = await bcrypt.compare(password, existingUser.password);
    if (!isVerified) {
      const error = new Error("Password didn't match");
      error.statusCode = 401;
      return next(error);
      console.log(isVerified);
    }
    // Token Generation will be done here
    genToken(existingUser, res);

    // send message to frontend
    res.status(200).json({ message: "Login Successful", data: existingUser });
  } catch (error) {
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
    res.clearCookie("parleG");
    res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    next(error);
  }
};

export const UserGenOTP = async (req, res, next) => {
  try {
    // Fetch Data from frontend
    const { email } = req.body;

    //verify that all data exist
    if (!email) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    //Check if user is registred or not
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not regisgtered");
      error.statusCode = 401;
      return next(error);
    }

    const otp = Math.floor(Math.random() * 1000000).toString();
    console.log(typeof otp);

    // encrypt the otp
    const salt = await bcrypt.genSalt(10);
    const hashOTP = await bcrypt.hash(otp, salt);

    console.log(hashOTP);

    await OTP.create({
      email,
      otp: hashOTP,
      createdAt: new Date(),
    });

    await sendOTPEmail(email, otp);
    res.status(200).json({ message: "OTP send on registered email" });
  } catch (error) {
    next(error);
  }
};


export const UserVerifyOtp = async (req,res,next)=>{
  
}
