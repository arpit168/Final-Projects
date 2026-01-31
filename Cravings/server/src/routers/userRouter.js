import express from "express";
import {
  UserChangePhoto,
  UserUpdate,
  UserResetPassword,
} from "../controllers/userController.js";
import { Protect } from "../middlewares/authMiddleware.js";
import multer from "multer";

const router = express.Router();
const uploads = multer();

router.put("/update", Protect, UserUpdate);
router.patch("/changePhoto", Protect, uploads.single("image"), UserChangePhoto);
router.patch("/resetPassword", Protect, UserResetPassword);

export default router;
