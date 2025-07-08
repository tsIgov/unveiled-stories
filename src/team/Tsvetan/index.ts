import type { MemberData } from "team";
import type { Translator } from "$lib/i18n/translator";

import photo from "./photo.jpg?enhanced";

export default function (t : Translator): MemberData {
	return {
		name: t({en: "Tsvetan", bg:"Цветан"}),
		intro: t({
			en: "Me and my three dantians.",
			bg:"Аз и трите ми дантиена."
		}),
		title: t({
			en: "Photographer",
			bg: "Фотограф"
		}),
		bio: t({
			en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			bg: ""
		}),
		photo,
	};
};
