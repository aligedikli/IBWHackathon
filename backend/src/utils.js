import jwt from "jsonwebtoken";
import { CONFIG } from "./config.js";

export const createTokenForUser = (user) => {
	const payload = {
		userId: user.id,
		userName: user.name,
		userRole: user.role,
		userEmail: user.email,
	};
	return jwt.sign(payload, CONFIG.JWT_SECRET, {
		expiresIn: "16h",
	});
};
