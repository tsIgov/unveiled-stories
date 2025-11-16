import type { TeamMember } from "data/team";
import { photos } from "data/photos"

const data : TeamMember = {
	name: {en: "Julia", bg:"Юлия"},
	title: {
		en: "Artist / Assistant",
		bg: "Художник / Асистент"
	},
	bio: {
		en: "I'm a traditional artist who loves painting the human body in all its shapes and sizes especially in a fantasy, classical and historical context. My goal is to capture a moment and turn it into an eternity that lives its own life.",
		bg: "Аз съм художник, който обича да рисува човешкото тяло във всичките му форми и често работя във фентъзи, класически и исторически контекст. Моята цел е да уловя миг и да го превърна в една вечност, която живее свой живот."
	},
	photos: {
		landscape: photos["photoshoots/electric-romeo/backgrounds/landscape.avif"],
		portrait: photos["photoshoots/electric-romeo/backgrounds/portrait.avif"]
	},
};

export default data;
