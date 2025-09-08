import type { MultilingualText } from "$lib/i18n/languages";
import type { Picture } from 'vite-imagetools';

import TsvetanPortrait from "./portraits/tsvetan.jpg?enhanced";
import JuliaPortrait from "./portraits/julia.jpg?enhanced";

export interface TeamMember
{
	name: MultilingualText,
	title: MultilingualText,
	bio: MultilingualText,
	photo: Picture
}

export const header : MultilingualText ={
	en: "The Team",
	bg: "Екипът"
};

export const members : TeamMember[] = [
	{
		name: {en: "Tsvetan", bg:"Цветан"},
		title: {
			en: "Photographer",
			bg: "Фотограф"
		},
		bio: {
			en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			bg: ""
		},
		photo: TsvetanPortrait,
	},
	{
		name: {en: "Julia", bg:"Юлия"},
		title: {
			en: "Assistant / Artist",
			bg: "Асистент / Художник"
		},
		bio: {
			en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			bg: ""
		},
		photo : JuliaPortrait
	}
]
