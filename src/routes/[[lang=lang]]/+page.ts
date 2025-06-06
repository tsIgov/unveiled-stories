import { nocturnalGlow, theHunt } from '$lib/photoshoots/PhotoshootData';
import type { PageLoad } from './$types';

export const load: PageLoad = (async ({ parent }) => {
	const { translator } = await parent();

	return {
		photoshoots: [
			theHunt(translator),
			nocturnalGlow(translator),
		],
		steps: [
			{
				title: translator({
					en: "Step 1: Planning",
					bg: "Стъпка 1: Планиране"
				}),
				text: translator({
					en: "This is where it all begins. In a relaxed, judgment-free conversation, we’ll explore what you want to express and how you want to feel throughout the experience. Together, we’ll uncover the story you want to tell — whether it's bold, tender, playful, or powerful — and begin shaping the narrative. We’ll talk through ideas, visual direction, styling, and mood to craft a clear concept that feels true to you. Think of it as storyboarding for the soul — intentional, collaborative, and entirely personal.",
					bg: ""
				})
			},
			{
				title: translator({
					en: "Step 2: Preparation",
					bg: "Стъпка 2: Подготовка"
				}),
				text: translator({
					en: "With your story gently taking shape, we begin gathering the pieces that will bring it into the real world. This is where intention meets action — choosing a private, meaningful location, selecting clothing and props that reflect your mood and message, booking your makeup artist, and setting the date when it all comes together. Every detail is chosen to reflect the tone and truth of your story, curating a world where your experience can unfold fully and authentically.",
					bg: ""
				})
			},
			{
				title: translator({
					en: "Step 3: The Shoot",
					bg: "Стъпка 3: Сесията"
				}),
				text: translator({
					en: "This is the day we bring it all to life. In a private, supportive space, we’ll spend unhurried time exploring and expressing the story we’ve shaped together. You’ll be guided through the experience with care, so you can stay present, relaxed, and connected to what the day means to you. This isn’t about performing — it’s about being in the moment and letting the story unfold naturally, at your own pace.",
					bg: ""
				})
			},
			{
				title: translator({
					en: "Step 4: The Reveal",
					bg: "Стъпка 4: ???"
				}),
				text: translator({
					en: "Once your story has been captured, we’ll come together to experience it — not just as images, but as moments remembered and felt. You’ll have the chance to choose how you want to commemorate it: perhaps with a handcrafted leather album, a custom deck of cards, or even an oil painting by our incredible artist. This final step is about creating something lasting — a way to hold your story in your hands and return to it, again and again.",
					bg: ""
				})
			}
		],

		texts: {
			theExperienceHeader: translator({
				en: "The Boudoir Photoshoot Experience",
				bg:"Преживяването"
			}),
			theExperienceParagraph: translator({
				en: "Step into a space where your story comes alive  — raw, real, and entirely yours. This is a chance to be present with everything you carry: the moments that shaped you, the emotions that move you, the parts of yourself that are ready to be unveiled. Whether you are honoring a turning point, embracing a quiet truth, or simply allowing yourself to feel, this is where it all unfolds.",
				bg:""
			})
		}
	};
});
