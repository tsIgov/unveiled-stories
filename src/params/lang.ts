import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param: string): param is "en" | "bg" => {
	return param === "en" || param === "bg";
}) satisfies ParamMatcher;
