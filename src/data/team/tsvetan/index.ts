import type { TeamMember } from "data/team";
import Portrait from "./portrait.jpg?enhanced";
import Landscape from "./landscape.jpg?enhanced";

const data : TeamMember = {
	name: {en: "Tsvetan", bg:"Цветан"},
	title: {
		en: "Photographer",
		bg: "Фотограф"
	},
	bio: {
		en: "I’m a boudoir photographer, software consultant, martial artists, philosopher, teacher and mentor. I harbour deep love for learning anything interesting and have spent decades honing my crafts. My goal is to help people grow and to make the world a more beautiful place. My sessions are about self-expression and the beauty of understanding oneself.",
		bg: ""
	},
	photos: {
		portrait: Portrait,
		landscape: Landscape
	}
};

export default data;
