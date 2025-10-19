import { type Chapter } from "data/experinece";
import backgroundPortrait from "./background-portrait.jpg?enhanced";
import backgroundLandscape from "./background-landscape.jpg?enhanced";

const data : Chapter = {
	title: {
		en: "Chapter 3: The Shoot",
		bg: "Стъпка 3: Сесията"
	},
	text: {
		en: "This is the day your story unfolds. In a calm, supportive space, we’ll spend unhurried time exploring and expressing the world we’ve created together. You’ll be guided with care so you can stay relaxed, present, and connected to what this day means to you. It’s not about performing — it’s about being.",
		bg: ""
	},
	background: {
		portrait: backgroundPortrait,
		landscape: backgroundLandscape
	}
};

export default data;
