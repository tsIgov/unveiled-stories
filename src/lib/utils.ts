import { state } from "$lib/state.svelte";

function t({ en, bg }: { en: string; bg: string }): string {
	switch (state.lang) {
		case "bg":
			return bg;
		default:
			return en;
	}
}

export { t };
