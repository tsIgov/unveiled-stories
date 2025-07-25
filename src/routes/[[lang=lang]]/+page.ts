import { TheHunt, NocturnalGlow } from 'photoshoots';
import { Tsvetan, Julia } from 'team';
import type { PageLoad } from './$types';

export const load: PageLoad = (async ({ parent }) => {
	const { translator } = await parent();

	return {
		transparentNavigation: true,

		portfolio: [
			TheHunt(translator),
			NocturnalGlow(translator)
		],

		theExperinece: {
			header: translator({
				en: "The Boudoir Photoshoot Experience",
				bg:"Преживяването"
			}),
			paragraph: translator({
				en: "Step into a space where your story comes alive  — raw, real, and entirely yours. This is a chance to be present with everything you carry: the moments that shaped you, the emotions that move you, the parts of yourself that are ready to be unveiled. Whether you are honoring a turning point, embracing a quiet truth, or simply allowing yourself to feel, this is where it all unfolds.",
				bg:""
			}),
			steps: [
				{
					title: translator({
						en: "Chapter 1: Planning",
						bg: "Стъпка 1: Планиране"
					}),
					text: translator({
						en: "This is where it all begins. In a relaxed, judgment-free conversation, we’ll explore what you want to express and how you want to feel throughout the experience. Together, we’ll uncover the story you want to tell — whether it's bold, tender, playful, or powerful — and begin shaping the narrative. We’ll talk through ideas, visual direction, styling, and mood to craft a clear concept that feels true to you. Think of it as storyboarding for the soul — intentional, collaborative, and entirely personal.",
						bg: ""
					})
				},
				{
					title: translator({
						en: "Chapter 2: Preparation",
						bg: "Стъпка 2: Подготовка"
					}),
					text: translator({
						en: "With your story gently taking shape, we begin gathering the pieces that will bring it into the real world. This is where intention meets action — choosing a private, meaningful location, selecting clothing and props that reflect your mood and message, booking your makeup artist, and setting the date when it all comes together. Every detail is chosen to reflect the tone and truth of your story, curating a world where your experience can unfold fully and authentically.",
						bg: ""
					})
				},
				{
					title: translator({
						en: "Chapter 3: The Shoot",
						bg: "Стъпка 3: Сесията"
					}),
					text: translator({
						en: "This is the day we bring it all to life. In a private, supportive space, we’ll spend unhurried time exploring and expressing the story we’ve shaped together. You’ll be guided through the experience with care, so you can stay present, relaxed, and connected to what the day means to you. This isn’t about performing — it’s about being in the moment and letting the story unfold naturally, at your own pace.",
						bg: ""
					})
				},
				{
					title: translator({
						en: "Chapter 4: The Reveal",
						bg: "Стъпка 4: ???"
					}),
					text: translator({
						en: "Once your story has been captured, we’ll come together to experience it — not just as images, but as moments remembered and felt. You’ll have the chance to choose how you want to commemorate it: perhaps with a handcrafted leather album, a custom deck of cards, or even an oil painting by our incredible artist. This final step is about creating something lasting — a way to hold your story in your hands and return to it, again and again.",
						bg: ""
					})
				}
			],
		},

		faq: {
			header: translator({
				en: "FAQ",
				bg:""
			}),
			questions: [
				{
					question: translator({
						en: "Do I have to get undressed?",
						bg: ""
					}),
					answer: translator({
						en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						bg: ""
					})
				},
				{
					question: translator({
						en: "How many people can participate?",
						bg: ""
					}),
					answer: translator({
						en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						bg: ""
					})
				},
				{
					question: translator({
						en: "How much does it cost?",
						bg: ""
					}),
					answer: translator({
						en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						bg: ""
					})
				},
				{
					question: translator({
						en: "Can I bring a friend?",
						bg: ""
					}),
					answer: translator({
						en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						bg: ""
					})
				},
				{
					question: translator({
						en: "I don't know how to pose?",
						bg: ""
					}),
					answer: translator({
						en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						bg: ""
					})
				},
				{
					question: translator({
						en: "I'm not fit.",
						bg: ""
					}),
					answer: translator({
						en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						bg: ""
					})
				},
				{
					question: translator({
						en: "I don't have beautiful lingerie/clothes.",
						bg: ""
					}),
					answer: translator({
						en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						bg: ""
					})
				},
				{
					question: translator({
						en: "What if I don't live in Sofia?",
						bg: ""
					}),
					answer: translator({
						en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						bg: ""
					})
				},
				{
					question: translator({
						en: "Who will see the photos?",
						bg: ""
					}),
					answer: translator({
						en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						bg: ""
					})
				},
			]
		},

		team: {
			header: translator({
				en: "The Team",
				bg:""
			}),
			members: [
				Tsvetan(translator),
				Julia(translator),
				Julia(translator),
				Tsvetan(translator)
			]
		},

		testimonials : {
			header: translator({
				en: "Testimonials",
				bg: "Testimonials"
			}),
			quotes: [
				{
					author: translator({
						en: "Pamela",
						bg: ""
					}),
					quote: translator({
						en: "Bri is an absolute joy to work with! From the first contact with her she was warm, friendly and knowledgeable. She was the exact same in person on shoot day. So kind and the best hype friend. Absolutely recommend her a million times.",
						bg: ""
					})
				},
				{
					author: translator({
						en: "Krys Harr",
						bg: ""
					}),
					quote: translator({
						en: "I love everything about Matt Mathews Boudoir!! I’ve shot with both Matt and Brianna multiple times and can wholeheartedly say that first, you cannot tell a difference between who’s taking the pictures— the talent is unbelievable. Second, the experience is so uplifting and positive. And last, you’ll walk away feeling like a million bucks! My last shoot was a maternity session with Brianna and she took the most beautiful and CREATIVE pictures of me, my pregnant belly, and even my husband even jumped in on a few! Their makeup artist, Lauren, is freaking amazing and nails the look every. time. I can’t recommend shooting with the MM team. It’s worth the investment in yourself",
						bg: ""
					})
				},
				{
					author: translator({
						en: "Lacy Herbert",
						bg: ""
					}),
					quote: translator({
						en: "Bri and Lauren made this a beautiful experience for me. The photos are absolutely stunning. Makes me emotional every time I look at them. Thank You, so much ladies. This has done so much for me.",
						bg: ""
					})
				}
			]
		}
	};
});
