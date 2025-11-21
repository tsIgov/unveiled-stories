import type { MultilingualText } from "$lib/i18n/languages";
import { getPhoto } from 'data/images';


export interface Quote
{
	author: MultilingualText,
	quote: MultilingualText
}

export const title : MultilingualText = {
	en: "Testimonials",
	bg: "Отзиви"
}

export const background = {
	landscape: getPhoto("backgrounds/testimonials-landscape.jpg"),
	portrait: getPhoto("backgrounds/testimonials-portrait.jpg")
};

const july : Quote = {
	author: {
		en: "July",
		bg: "Юлка"
	},
	quote: {
		en: "Tsvetan and I have worked together on a few different ideas I've wanted to create and he has always been very enthusiastic about bringing my vision to life and surprising me with his ingenuity. He senses the vibe I'm going for and helps me pull it off. He's incredibly easy to work with. If you can, book a session and get an album after! My friends love to browse through my collection when they visit.",
		bg: "С Цветан сме работили по няколко различни идеи, които съм искала да създам и той винаги откликва с голямо желание и винаги ме изненадва с неговия собствен принос към тях. Той усеща настроението, което искам да създам и ми помага да го постигна по време на снимките. С него се работи изключително лесно. Силно препоръчвам да си запазите сесия и да си вземете албумче след това. Приятелите ми обожават да разглеждат колекцията ми като са ми на гости. "
	}
};

const bibi : Quote = {
	author: {
		en: "Bibi",
		bg: "Биби"
	},
	quote: {
		en: "Comfortable, mischievous and so much fun!",
		bg: "Комфортно, пакостливо и страшно забавно!"
	}
};

const ven : Quote = {
	author: {
		en: "Ven",
		bg: "Вен"
	},
	quote: {
		en: "Tsvetan is an inspiring photographer! He has unique ideas, each one of them carefully crafted into a scenario that uncovers a whole story not just a single beautiful shot! ... Every idea is carefully designed long before he goes on the field with his models. ... [He] is not afraid of experiments or provocation and always figures out how to make something amazing out of every situation! ... Can't wait to see more of his art!",
		bg: "Цветан е вдъхновяващ фотограф! Той има уникални идеи, всяка една от които е внимателно изработена в сценарий, който разкрива цяла история, а не просто един красив кадър! ... Всяка идея е внимателно проектирана много преди той да излезе на терена с моделите си. ... [Той] не се страхува от експерименти или провокации и винаги намира как да направи нещо невероятно от всяка ситуация! ... Нямам търпение да видя още от неговото изкуство!"
	}
};

const poli : Quote = {
	author: {
		en: "Poli",
		bg: "Поли"
	},
	quote: {
		en: "I'm a mother who struggled to get back in shape right away after giving birth and I believe boudoir is exactly for us - the women who need a reminder how graceful, feminine and strong we are. This is a moment we not only celebrate our bodies, but we embody our confidence, pride and love for ourselves anew. Boudoir is not only a photoshoot, it's an experience that shows us who we actually are: powerful, capable and immensely beautiful.",
		bg: "Като майка, която не успя веднага да си върне старата форма след раждането, вярвам, че будоарът е създаден точно за нас, жените — за да си напомним колко сме красиви, женствени и силни. Това е момент, в който не само празнуваме тялото си, но и си връщаме увереността, гордостта и любовта към себе си. Будоарът не е просто фотосесия — той е преживяване, което ни показва коя всъщност сме: смели, истински и невероятно красиви."
	}
};

const mimi : Quote = {
	author: {
		en: "Mimi",
		bg: "mimi"
	},
	quote: {
		en: "The whole experience from start to finish was such a blast. It was fun and empowering and I have never felt better.",
		bg: "Цялото преживяване от началото до края беше страхотно, забавно и окрилящо. Никога не съм се чувствала по-добре."
	}
};

export const quotes: Quote[] = [
	poli,
	bibi,
	july,
	mimi,
	ven
]

