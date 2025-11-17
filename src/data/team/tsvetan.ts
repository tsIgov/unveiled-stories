import type { TeamMember } from ".";
import { photos } from "data/photos"

const data : TeamMember = {
	name: {en: "Tsvetan", bg:"Цветан"},
	title: {
		en: "Photographer",
		bg: "Фотограф"
	},
	bio: {
		en: "I’m a boudoir photographer, software consultant, martial artist, philosopher, teacher and mentor. I harbour a deep love for learning anything interesting and have spent decades honing my crafts. My goal is to help people grow and to make the world a more beautiful place. My sessions are about self-expression and the beauty of understanding oneself.",
		bg: "Аз съм будоарен фотограф, софтуерен консултант, учител и ментор. Занимавам се с философия и бойни изкусва и тая дълбока любов към изучаването на всичко ново и интересно. Прекарал съм десетилетия в усъвършенстване на занаятите си. Целта ми е да помагам на хората да се развиват и да правя света едно по-красиво място. Сесиите ми са посветени на себепознанието и личното изразяване."
	},
	photos: {
		landscape: photos["team/tsvetan-landscape.avif"],
		portrait: photos["team/tsvetan-portrait.avif"]
	}
};

export default data;
