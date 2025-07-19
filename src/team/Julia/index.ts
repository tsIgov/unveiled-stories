import type { MemberData } from "team";
import type { Translator } from "$lib/i18n/translator";

import photo from "./photo.jpg?enhanced";

export default function (t : Translator): MemberData {
	return {
		name: t({en: "Julia", bg:"Юлия"}),
		intro: t({
			en: "She and her three dantians. She and her three dantians.",
			bg:"Тя и трите ѝ дантиена."
		}),
		title: t({
			en: "Assistant / Artist",
			bg: "Асистент / Художник"
		}),
		bio: t({
			en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			bg: ""
		}),
		photo,
	};
};
