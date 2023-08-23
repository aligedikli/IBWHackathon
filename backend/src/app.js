import cors from "cors";
import express from "express";
import { router } from "./routes.js";

export const app = express();

app.use(cors());
app.use(express.json());
// app.use(parseJwt);

app.use(router);
