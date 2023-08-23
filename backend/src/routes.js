import express from "express";
import * as testController from "./controllers/test.js";

export const router = express.Router();

// TEST
router.get("/test", testController.test);
