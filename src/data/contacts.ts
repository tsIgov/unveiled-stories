import type { MultilingualText } from "$lib/i18n/languages";

export const header : MultilingualText = {
	en: "Book Your Experience",
	bg: ""
};

export const summary: MultilingualText = {
	en: "Take the first step toward capturing your story. Send us a message, and we’ll reach out to begin planning your personal experience.",
	bg: ""
};

export const formSubmitUrl = "https://script.google.com/macros/s/AKfycbx9XtTnkOu3Q0bni0QE_yS1SAndeYqmhRF1odCgEh9qgy53ih5q9kSA8mZCbSdtgt0c/exec";

export const socials = {
	email: "example@example.example",
	phone: "+359 876 543 593",
	instagram: "https://www.instagram.com/example",
	bluesky: "https://bsky.app/profile/unveiled-stories.bsky.social"
}

export const formData : {
	emailPlaceholder : MultilingualText,
	namePlaceholder : MultilingualText,
	messagePlaceholder : MultilingualText,
	buttonText : MultilingualText
} = {
	emailPlaceholder:  {
		en: "Email",
		bg: ""
	},
	namePlaceholder:  {
		en: "Name",
		bg: ""
	},
	messagePlaceholder:  {
		en: "What would you want us to help you express?",
		bg: ""
	},
	buttonText:  {
		en: "Let’s Do This",
		bg: ""
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
		bg: ""
	},
	successContent:  {
		en: "Thank you for trusting us. We'll get back to you in 48 hours to confirm your session and next steps. We can’t wait to create this experience with you!",
		bg: ""
	},
	errorHeader:  {
		en: "Something Went Wrong...",
		bg: ""
	},
	errorContent:  {
		en: "We are terribly sorry but something went wrong! Please give us a call or just write us a plain old email..",
		bg: ""
	},
}
