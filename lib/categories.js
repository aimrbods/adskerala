export const CATEGORIES = {
	"games": {
		name: "Games",
		description:
			"Informasi seputar games, game terbaru, tips dan panduan bermain, rekomendasi game, aplikasi permainan, serta perkembangan dunia gaming dan hiburan digital."
	},

	"robopragma": {
		name: "Aplikasi Penghasil Cuan",
		description:
			"Informasi seputar aplikasi penghasil cuan, peluang penghasilan online, platform digital, aplikasi penghasil uang, serta berbagai peluang mendapatkan penghasilan melalui internet."
	},

	"aimrferdy": {
		name: "Teknologi",
		description:
			"Informasi seputar teknologi, perkembangan teknologi terbaru, inovasi digital, perangkat, software, aplikasi, kecerdasan buatan, dan berbagai solusi teknologi untuk kebutuhan sehari-hari."
	},

	"internet": {
		name: "Internet",
		description:
			"Informasi seputar internet, website, layanan online, keamanan digital, konektivitas, aplikasi internet, serta tips memanfaatkan internet secara efektif dan aman."
	},

	"aigacor": {
		name: "Tren Online",
		description:
			"Informasi seputar tren online, perkembangan digital, aplikasi populer, media sosial, fenomena internet, serta berbagai hal yang sedang berkembang di dunia online."
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
