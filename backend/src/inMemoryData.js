export const inMemoryData = {
	users: [
		{
			id: "2ffac727-6950-4c12-b239-201558df5d26",
			name: "Osman Nuri Yıldız",
			role: "admin",
			walletAddress: "0xcA55a9af87fe30e0532D56DbA23D05153561369f",
		},
		{
			id: "c8a5ab8c-96ff-4a43-94e9-4963010d039a",
			name: "Baturalp Güvenç",
			role: "educator",
			walletAddress: "0xa9f114723cCd80e8759e08130D99097Ea0B4e3Ef",
		},
		{
			id: "ccb299a0-9c2a-4ce9-aa0d-0c49df53a7dc",
			name: "Ali Gedikli",
			role: "student",
			walletAddress: "0x36dbF91095e771E290c3d6BC2A3332b04257c6D7",
		},
		{
			id: "04c46bd7-acef-42eb-92af-3d1c464320db",
			name: "Tayfur Duran",
			role: "donator",
			walletAddress: "0x345287f00baB08de45e8f5a3d7A007eC37eF1581",
		},
	],
	courses: [
		{
			id: "dbd51a11-2310-46ca-80a8-6b53c2db1023",
			name: "Interactions Between Chemical Species",
			price: 180,
			imageUrl:
				"https://i.pinimg.com/originals/c4/27/c8/c427c8c37d005ea252f669525227a7ad.jpg",
			educator: { name: "Andrei Zolin" },
		},
		{
			id: "8b2a085b-6901-4a9d-8aac-be43b795e078",
			name: "Arabic Verb Phrase",
			price: 150,
			imageUrl: "https://lerablog.org/wp-content/uploads/2015/06/teacher.jpg",
			educator: { name: "Mohammed AlKaff AlHashmi" },
		},
		{
			id: "7ec1df8c-0a39-4b0e-a5ca-1250a6ba8890",
			name: "Self-Improvement",
			price: 140,
			imageUrl: "https://www.trainingzone.co.uk/sites/default/files/jirsak.jpg",
			educator: { name: "Mariia Sholokhova" },
		},
	],
	giveawayRequests: [
		{
			id: "706071b4-ee38-44a3-8887-7180ff35d2c1",
			studentUserId: "1",
			courseId: "1",
			status: "approved",
		},
		{
			id: "f90db7c1-d333-46cc-a8c3-010a46145dff",
			studentUserId: "1",
			courseId: "1",
			status: "rejected",
		},
		{
			id: "7cecd546-6d9b-4567-a2af-d003527bcb89",
			studentUserId: "1",
			courseId: "1",
			status: "pending",
		},
	],
};
