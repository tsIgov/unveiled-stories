import { type Chapter } from "data/experinece";
import backgroundPortrait from "./background-portrait.jpg?enhanced";
import backgroundLandscape from "./background-landscape.jpg?enhanced";

const data : Chapter = {
	title: {
		en: "Chapter 4: The Reveal",
		bg: "Глава 4: Разкриване"
	},
	text: {
		en: "Once your story is captured, we’ll experience it together — not just as images, but as moments remembered and felt. You’ll choose how to honour it: with a handcrafted leather album, a custom deck of cards, or even an oil painting by our incredible artist. This final step is about creating something lasting — a way to hold your story in your hands and return to it again and again.",
		bg: "След като уловим вашата история, ще я преживеем заедно – не просто като снимки, а като съхранени и почувствани мигове. Вие ще решите как да ѝ отдадете почит: чрез ръчно изработен кожен албум, персонализирано тесте карти или пък чрез маслена картина, нарисувана от нашия невероятен художник. Тази последна стъпка е посветена на създаването на нещо вечно – начин да задържите тази история си в ръцете и да се връщате към нея отново и отново."
	},
	background: {
		portrait: backgroundPortrait,
		landscape: backgroundLandscape
	}
};

export default data;
