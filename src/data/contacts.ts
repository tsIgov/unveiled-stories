import type { MultilingualText } from "$lib/i18n/languages";

export const header : MultilingualText = {
	en: "Book Your Experience",
	bg: "Запази своето преживяване"
};

export const summary: MultilingualText = {
	en: "Take the first step toward capturing your story. Send us a message, and we’ll reach out to begin planning your personal experience.",
	bg: "Поеми първата стъпка към това да превърнеш своята история в реалност. Изпрати ни съобщение и нека създадем твоето лично преживяване!"
};

export const formSubmitUrl = "https://script.google.com/macros/s/AKfycbyg1BSTqdP0V2WvVkV9NcIendh3oL6jVXXVND862jkjPztBrtEUc66J_YoqnjAQl4if/exec";

export const socials = {
	email: "tsvetan@unveiledstories.art",
	phone: "+359 876 543 593",
	instagram: "",
	bluesky: ""
}

export const formData : {
	emailPlaceholder : MultilingualText,
	namePlaceholder : MultilingualText,
	messagePlaceholder : MultilingualText,
	buttonText : MultilingualText
} = {
	emailPlaceholder:  {
		en: "Email",
		bg: "Имейл"
	},
	namePlaceholder:  {
		en: "Name",
		bg: "Име"
	},
	messagePlaceholder:  {
		en: "What would you want us to help you express?",
		bg: "Какво искаш да изразиш?"
	},
	buttonText:  {
		en: "Let’s Do This",
		bg: "Изпрати "
	},
}

export const responseData : {
	successHeader : MultilingualText,
	successContent : MultilingualText,
	errorHeader : MultilingualText,
	errorContent : MultilingualText
} = {
	successHeader:  {
		en: "Thank You!",
		bg: "Благодарим!"
	},
	successContent:  {
		en: "Thank you for trusting us. We'll get back to you in 48 hours to confirm your session and next steps. We can’t wait to create this experience with you!",
		bg: "Благодарим за доверието. Ще се свържем с теб до 48 часа, за да обсъдим следващите стъпки. Нямаме търпение да работим заедно!"
	},
	errorHeader:  {
		en: "Something Went Wrong...",
		bg: "Нещо се обърка..."
	},
	errorContent:  {
		en: "We are terribly sorry but something went wrong! Please give us a call or just write us a plain old email..",
		bg: "Ужасно съжаляваме, но нещо се обърка! Моля, обади ни се или просто ни напиши обикновен имейл."
	},
}
