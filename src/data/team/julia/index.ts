import type { TeamMember } from "data/team";
import Portrait from "./portrait.jpg?enhanced";

const data : TeamMember = {
	name: {en: "Julia", bg:"Юлия"},
	title: {
		en: "Assistant / Artist",
		bg: "Асистент / Художник"
	},
	bio: {
		en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		bg: ""
	},
	photo: Portrait,
};

export default data;
