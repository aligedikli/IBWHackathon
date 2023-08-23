const users = [
	{
		id: "1",
		name: "Osman Nuri Yıldız",
		role: "admin",
		walletAddress: "0xcA55a9af87fe30e0532D56DbA23D05153561369f",
	},
	{
		id: "2",
		name: "Baturalp Güvenç",
		role: "educator",
		walletAddress: "0xa9f114723cCd80e8759e08130D99097Ea0B4e3Ef",
	},
	{
		id: "3",
		name: "Ali Gedikli",
		role: "student",
		walletAddress: "0x36dbF91095e771E290c3d6BC2A3332b04257c6D7",
	},
	{
		id: "4",
		name: "Tayfur Duran",
		role: "donator",
		walletAddress: "0x345287f00baB08de45e8f5a3d7A007eC37eF1581",
	},
];

export const getMe = async (req, res) => {
	const walletAddress = req.headers["authentication"]?.split(" ")[1];
	if (!walletAddress) {
		return res.status(401).json({
			ok: false,
			message: "Cüzdan adresi sağlanmadı.",
		});
	}

	const user = users.find((u) => u.walletAddress === walletAddress);
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
