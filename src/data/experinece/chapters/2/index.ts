import { type Chapter } from "data/experinece";
import backgroundPortrait from "./background-portrait.jpg?enhanced";
import backgroundLandscape from "./background-landscape.jpg?enhanced";

const data : Chapter = {
	title: {
		en: "Chapter 2: Preparation",
		bg: "Глава 2: Подготовка"
	},
	text: {
		en: "With your story gently taking shape, we gather what brings it to life — a private location, meaningful locations and props, booking your makeup artist, and setting the date when it all comes together. Every detail is chosen to reflect the tone and truth of your story, curating a world where your experience can unfold fully and authentically.",
		bg: "След като идеята е придобила форма, е време да съберем елементите, които ще ѝ вдъхнат живот. Това означава да открием уединено, спокойно място, да подберем дрехи и реквизит и да определим датата, на която всичко ще се случи. Всеки детайл е съобразен с тона и истината на твоята история. Така изграждаме онази среда, в която преживяването ти може да се разгърне в пълния си блясък."
	},
	background: {
		portrait: backgroundPortrait,
		landscape: backgroundLandscape
	}
};

export default data;
