import type { MultilingualText } from "$lib/i18n/languages";
import backgroundLandscape from "./backgrounds/landscape.jpg?enhanced";
import backgroundPortrait from "./backgrounds/portrait.jpg?enhanced";

export interface Quote
{
	author: MultilingualText,
	quote: MultilingualText
}

export const title : MultilingualText = {
	en: "Testimonials",
	bg: "Testimonials"
}

export const background = {
	landscape: backgroundLandscape,
	portrait: backgroundPortrait
};

export const quotes: Quote[] = [
	{
		author: {
			en: "Pamela",
			bg: ""
		},
		quote: {
			en: "Bri is an absolute joy to work with! From the first contact with her she was warm, friendly and knowledgeable. She was the exact same in person on shoot day. So kind and the best hype friend. Absolutely recommend her a million times.",
			bg: ""
		}
	},
	{
		author: {
			en: "Krys Harr",
			bg: ""
		},
		quote: {
			en: "I love everything about Matt Mathews Boudoir!! I’ve shot with both Matt and Brianna multiple times and can wholeheartedly say that first, you cannot tell a difference between who’s taking the pictures— the talent is unbelievable. Second, the experience is so uplifting and positive. And last, you’ll walk away feeling like a million bucks! My last shoot was a maternity session with Brianna and she took the most beautiful and CREATIVE pictures of me, my pregnant belly, and even my husband even jumped in on a few! Their makeup artist, Lauren, is freaking amazing and nails the look every. time. I can’t recommend shooting with the MM team. It’s worth the investment in yourself",
			bg: ""
		}
	},
	{
		author: {
			en: "Lacy Herbert",
			bg: ""
		},
		quote: {
			en: "Bri and Lauren made this a beautiful experience for me. The photos are absolutely stunning. Makes me emotional every time I look at them. Thank You, so much ladies. This has done so much for me.",
			bg: ""
		}
	}
]

