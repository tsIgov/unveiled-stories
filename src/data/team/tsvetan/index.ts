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
		en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		bg: ""
	},
	photos: {
		portrait: Portrait,
		landscape: Landscape
	}
};

export default data;
