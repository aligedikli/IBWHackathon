import { inMemoryData } from "../inMemoryData.js";

export const getMe = async (req, res) => {
	const user = inMemoryData.users.find(
		(u) => u.walletAddress === req.walletAddress
	);
	if (!user) {
		return res.status(401).json({
			ok: false,
			message: "Bu cüzdan adresiyle kayıtlı bir kullanıcı bulunmamaktadır.",
		});
	}

	return res.json({
		ok: true,
		data: user,
	});
};
