import type { MultilingualText } from "$lib/i18n/languages";

export interface Question
{
	question: MultilingualText,
	answer: MultilingualText
}

export const questions : Question[] = [
	{
		question: {
			en: "Do I have to get undressed?",
			bg: "Трябва ли да се събличам?"
		},
		answer: {
			en: "Absolutely not. This is your story and you are in full control of what happens. We'll never push you to do anything you are not comfortable with.",
			bg: "Не, това e твоята история и ти имаш пълен контрол над нея. Никога няма да те накараме да направиш нещо, некомфортно за теб."
		}
	},
	{
		question: {
			en: "Who will see the photos?",
			bg: "Кой ще види снимките?"
		},
		answer: {
			en: "It's up to you who sees the photos. We'll never share anything without your consent. We'll even send them to you via an encrypted channel.",
			bg: "Това зависи изцяло от теб. Никога няма да споделим нищо без твоето съгласие. Дори ще ти изпратим снимките по криптиран канал."
		}
	},
	{
		question: {
			en: "Can I bring a friend?",
			bg: "Може ли да взема приятел със себе си?"
		},
		answer: {
			en: "Of course. We welcome anyone and anything that will make you feel comfortable.",
			bg: "Разбира се. Приветстваме всеки и всичко, което ще те накара да се чувстваш комфортно."
		}
	},
	{
		question: {
			en: "Who will be present during the shoot?",
			bg: "Кой ще присъства по време на снимките?"
		},
		answer: {
			en: "You, the photographer, the photographer's assistant and whoever else you want.",
			bg: "Ти, фотографът, асистентът и който друг пожелаеш да вземеш със себе си."
		}
	},
	{
		question: {
			en: "How many people can participate?",
			bg: "Колко души могат да участват?"
		},
		answer: {
			en: "Boudoir doesn't need to be an individual experience. Your story may include spouses, friends, lovers or even some of our models. We welcome anything that will make the experience feel true to you.",
			bg: "Будоарните снимки не е необходимо да бъдат само индивидуални. Твоята история може да включва съпруг/а, приятели, партньори или дори някой от моделите ни - каквото е нужно, за да изразим твоята идея."
		}
	},
	{
		question: {
			en: "How much does it cost?",
			bg: "Колко струва?"
		},
		answer: {
			en: "Our prices start at €270 and depend on the complexity of the story and the amount of preparation needed. We'll always be transparent and will give you a concrete offer before you commit to anything.",
			bg: "Цените ни започват от 270 евро и зависят от сложността на историята и необходимата подготовка. Винаги ще бъдем прозрачни и ще ти дадем конкретна оферта, преди да се ангажираш с каквото и да било."
		}
	},
	{
		question: {
			en: "Do you offer any discounts?",
			bg: "Предлагате ли отстъпки?"
		},
		answer: {
			en: "Yes, we offer up to 50% discount if you allow us to use some of the photos for our portfolio. Of course, you'll always have the final say in which photos we can use.",
			bg: "Да, предлагаме до 50% отстъпка, ако ни позволиш да използваме някои от снимките за нашето портфолио. Разбира се, винаги ще имаш последната дума за това кои снимки можем да използваме."
		}
	},
	{
		question: {
			en: "What will I get at the end?",
			bg: "Какво ще получа накрая?"
		},
		answer: {
			en: "Except for the experience, you'll receive 20 to 100 (depending on the photoshoot) retouched photos carefully curated to tell your story. Additionally, you'll be able to order a leather album, a deck of cards or even an oil painting by our incredible artist.",
			bg: "Освен преживяването, ще получиш между 20 и 100 (в зависимост от фотосесията) ретуширани снимки, внимателно подбрани да разкажат твоята история. Освен това, ще имаш възможност да поръчаш кожен албум, тесте карти или дори маслена картина от нашия невероятен художник."
		}
	},
	{
		question: {
			en: "I don't know how to pose.",
			bg: "Не знам как да позирам."
		},
		answer: {
			en: "Don't worry, we'll guide you through the process but don't get too preoccupied by that. You don't need to perform, your job is to just have fun.",
			bg: "Не се притеснявай, ще те напътстваме където е нужно, но най-важното е просто да се опуснеш и забавляваш."
		}
	},
	{
		question: {
			en: "I'm not confident in my body.",
			bg: "Не се чувствам уверен/а в тялото си."
		},
		answer: {
			en: "I started doing boudoir photography because my wife didn't find herself attractive. It turned out all she needed was to look at herself through the lens of someone admiring her beauty. We're here to be the lens that helps you see yourself in a new light.",
			bg: "Започнах да се занимавам с будоарна фотография, защото съпругата ми не се намираше за привлекателна. Оказа се, че всичко, от което се нуждаеше, беше да погледне на себе си през обектива на някой, който се възхищава на красотата ѝ. Ние сме тук, за да бъдем обективът, който ще ти помогне да видиш себе си в нова светлина."
		}
	},
	{
		question: {
			en: "I don't have beautiful lingerie/clothes.",
			bg: "Нямам красиви дрехи и/или бельо."
		},
		answer: {
			en: "You don't have to. We'll find what best fits the story you want to tell and we'll go hunting. You can even book a session or go shopping with our amazing stylist.",
			bg: "Няма нужда. Ние ще ти помогнем да откриеш какво пасва на твоята история като дори може да работиш и пазаруваш с нашия изключителен стилист."
		}
	},
	{
		question: {
			en: "Do you offer professional hair and makeup?",
			bg: "Предлагате ли професионален грим и прическа?"
		},
		answer: {
			en: "Yes, we can set up an appointment with one of our hair dressers and makeup artists for the day of the shoot.",
			bg: "Да, можем да уредим час за професионален грим и прическа за деня на снимките."
		}
	},
	{
		question: {
			en: "Where will the shoot take place?",
			bg: "Къде ще се проведе фотосесията?"
		},
		answer: {
			en: "We'll scout for a private location at or near Sofia that fits the mood and style of your story.",
			bg: "Ще потърсим усамотено място в района на София, което да пасва на усещането за твоята история."
		}
	},
	{
		question: {
			en: "What if I don't live in Sofia?",
			bg: "Ами ако не живея в София?"
		},
		answer: {
			en: "We're open to travelling to most of Europe but we'll have to discuss the details on a case by case basis.",
			bg: "Отворени сме за пътувания до по-голямата част от Европа, но ще трябва да обсъдим подробностите за конкретния случай."
		}
	},
	{
		question: {
			en: "How far in advance should I book my session?",
			bg: "Колко време предварително трябва да резервирам сесията си?"
		},
		answer: {
			en: "Preparation may require creating storyboards, scouting for a location, buying or renting clothes and props, making appointments and so on. Be prepared that all of this might take anything from a week up to a month but we'll discuss that in advance.",
			bg: "Подготовката може да изисква създаването на сценарий, търсене на място, закупуване или наемане на реквизит, запазване на часове за грим и прическа и др. Всичко това може да отнеме от седмица до месец. Разбира се, ще обсъдим всичко това още в първоначалният ни разговор."
		}
	},
	{
		question: {
			en: "How long does the photoshoot take?",
			bg: "Колко време продължава снимането?"
		},
		answer: {
			en: "We don't want to rush anything so it might take anything from a couple of hours to a whole day.",
			bg: "Искаме всично да протече спокойно. За целта сесията може да отнеме от няколко часа до цял ден."
		}
	},
]
