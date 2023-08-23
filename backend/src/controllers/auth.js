const users = [
	{
		id: "1",
		name: "Osman Nuri Yıldız",
		role: "admin",
		email: "osman@example.com",
		password: "123123",
	},
	{
		id: "2",
		name: "Baturalp Güvenç",
		role: "educator",
		email: "baturalp@example.com",
		password: "123123",
	},
	{
		id: "3",
		name: "Ali Gedikli",
		role: "student",
		email: "ali@example.com",
		password: "123123",
	},
	{
		id: "4",
		name: "Tayfur Duran",
		role: "donator",
		email: "tayfur@example.com",
		password: "123123",
	},
];

export const login = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({
			ok: false,
			message: "Lütfen tüm alanları doldurun.",
		});
	}

	const user = users.find((u) => u.email === email);
	if (!user) {
		return res.status(401).json({
			ok: false,
			message: "Bu e-posta adresiyle kayıtlı bir kullanıcı bulunmamaktadır.",
		});
	}

	if (password !== user.password) {
		return res.status(401).json({
			ok: false,
			message: "Şifre yanlış.",
		});
	}

	const token = createTokenForUser(user);

	return res.json({
		ok: true,
		data: token,
	});
};
