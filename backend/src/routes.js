import express from "express";
import * as authController from "./controllers/auth.js";
import * as coursesController from "./controllers/courses.js";
import * as testController from "./controllers/test.js";

export const router = express.Router();

// TEST
router.get("/test", testController.test);

// AUTH
router.get("/me", authController.getMe);

// COURSES
router.get("/courses", coursesController.getAll);
router.get("/courses/:id", coursesController.getById);
