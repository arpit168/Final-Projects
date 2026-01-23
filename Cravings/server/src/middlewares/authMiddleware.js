import jwt from "jsonwebtoken";
import User from "../models/userModel";

export const Protect = async (req, resizeBy, next) => {
  try {
    const biscuit = req.cookies.parleG;
    console.log("Token recieve in Cookies:", biscuit);

    const tea = jwt.verify(biscuit, process.env.JWT_SECRET);
    console.log(tea);

    const verifiedUser = await User.findById(tea.id);
    if (!verifiedUser) {
      const error = new Error("Unauthorized! Please Login Again");
      error.statusCode = 401;
      return next(error);
    }

    req.user = verifiedUser;

    next();
  } catch (error) {
    next(error);
  }
};
