const courses = [
	{
		id: "1",
		name: "Test Course 1",
		price: 200,
		imageUrl:
			"https://www.analizgazetesi.com.tr/modules/blog/dataimages/IMG_267A4E-CFBA2B-18873B-9A774B-C6812A-DF69B3.jpg",
		educator: { name: "Ali Gedikli" },
	},
	{
		id: "2",
		name: "Test Course 2",
		price: 100,
		imageUrl: "https://www.labmedya.com/uploads/haberler-3/kedi.jpg",
		educator: { name: "Ali Gedikli" },
	},
	{
		id: "3",
		name: "Test Course 3",
		price: 350,
		imageUrl:
			"https://cdn03.ciceksepeti.com/cicek/kcm51890754-4/XL/red-anchor-tutulu-kedi-elbisesi-kiyafeti-tutu-kcm51890754-4-0869257e6d49418d90657852cc5fad22.jpg",
		educator: { name: "Baturalp Güvenç" },
	},
];

export const getAll = async (req, res) => {
	return res.json({
		ok: true,
		data: courses,
	});
};

export const getById = async (req, res) => {
	const { id } = req.params;
	if (!id) {
		return res.status(400).json({
			ok: false,
			message: "URL'in bazı bölümleri eksik.",
		});
	}

	const course = courses.find((c) => c.id === id);
	if (!course) {
		return res.status(404).json({
			ok: false,
			message: "Bu kurs mevcut değil.",
		});
	}

	return res.json({
		ok: true,
		data: course,
	});
};
