import type { TeamMember } from "data/team";
import Portrait from "./portrait.jpg?enhanced";
import Landscape from "./landscape.jpg?enhanced";

const data : TeamMember = {
	name: {en: "Julia", bg:"Юлия"},
	title: {
		en: "Artist / Assistant",
		bg: "Художник / Асистент"
	},
	bio: {
		en: "I'm a traditional artist who loves painting the human body in all its shapes and sizes especially in a fantasy, classical and historical context, my goal is to capture a moment and turn it into an eternity that lives its own life.",
		bg: ""
	},
	photos: {
		portrait: Portrait,
		landscape: Landscape
	},
};

export default data;
