import type { MultilingualText } from "$lib/i18n/languages";

export const header : MultilingualText = {
	en: "Book Your Experience",
	bg: ""
};

export const summary: MultilingualText = {
	en: "Step into a space where your story comes alive — raw, real, and entirely yours. This is a chance to be present with everything you carry: the moments that shaped you, the emotions that move you, the parts",
	bg:""
};

export const formSubmitUrl = "https://script.google.com/macros/s/AKfycbx9XtTnkOu3Q0bni0QE_yS1SAndeYqmhRF1odCgEh9qgy53ih5q9kSA8mZCbSdtgt0c/exec";

export const socials = {
	email: "example@example.example",
	phone: "+359 876 543 593",
	instagram: "https://www.instagram.com/example"
}

export const formData : {
	emailPlaceholder : MultilingualText,
	namePlaceholder : MultilingualText,
	messagePlaceholder : MultilingualText,
	buttonText : MultilingualText
} = {
	emailPlaceholder:  {
		en: "Enter your email",
		bg: ""
	},
	namePlaceholder:  {
		en: "Enter your name",
		bg: ""
	},
	messagePlaceholder:  {
		en: "Tell us what is on your mind...",
		bg: ""
	},
	buttonText:  {
		en: "Submit",
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
		en: "Thank you for trusting us. We'll come back to you in two business days. Also some more text goes in here.",
		bg: ""
	},
	errorHeader:  {
		en: "Something Went Wrong...",
		bg: ""
	},
	errorContent:  {
		en: "Thank you for trusting us. We'll come back to you in two business days. Also some more text goes in here.",
		bg: ""
	},
}
