export const CATEGORIES = {

	"": {
		name: "AI Mr Ferdy",
		description:
			"AI Mr Ferdy adalah platform digital Indonesia yang membahas teknologi, kecerdasan buatan, AI Tools, aplikasi, internet, dan berbagai perkembangan digital modern."
	},

	"games": {
		name: "Games",
		description:
			"Informasi tentang games, permainan digital, aplikasi game, tips bermain, dan perkembangan terbaru di dunia gaming."
	},

	"robopragma": {
		name: "Aplikasi Penghasil Cuan",
		description:
			"Informasi tentang aplikasi penghasil cuan, peluang penghasilan online, dan berbagai platform digital untuk mendapatkan penghasilan."
	},

	"aimrferdy": {
		name: "Teknologi",
		description:
			"Informasi tentang teknologi digital, inovasi, aplikasi, perangkat, perkembangan teknologi, dan tren teknologi terbaru."
	},

	"internet": {
		name: "Internet",
		description:
			"Informasi tentang internet, layanan online, keamanan digital, aplikasi web, serta berbagai cara memanfaatkan internet."
	},

	"aigacor": {
		name: "Tren Online",
		description:
			"Informasi tentang tren online, aplikasi populer, media sosial, konten digital, dan perkembangan terbaru di dunia online."
	}
};

export function getCategory(kategori=""){
	const slug = String(kategori).toLowerCase().trim();

	return CATEGORIES[slug] || {
		name: kategori,
		description:
			"Informasi terbaru tentang teknologi digital, AI, internet, aplikasi, dan perkembangan online."
	};
}
