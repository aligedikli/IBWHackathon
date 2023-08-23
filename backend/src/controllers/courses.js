import { inMemoryData } from "../inMemoryData.js";

export const getAll = async (req, res) => {
	return res.json({
		ok: true,
		data: inMemoryData.courses,
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

	const course = inMemoryData.courses.find((c) => c.id === id);
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
