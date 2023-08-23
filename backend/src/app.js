import cors from "cors";
import express from "express";
import { parseAuthHeader } from "./middlewares.js";
import { router } from "./routes.js";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(parseAuthHeader);

app.use(router);
