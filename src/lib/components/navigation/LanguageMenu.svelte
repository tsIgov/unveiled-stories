<script lang="ts">
	import { resolveRoute } from "$app/paths";
	import { languages, type Language } from "$lib/i18n/languages";

	interface Props {
		class? : string,
		currentLang : Language,
		currentRoute : string
	}

	let { currentLang, currentRoute, ...others} : Props = $props();
</script>

<div class="flex items-center justify-center gap-2 text-sm {others.class}">
	{#each languages as language}
		<a
			data-sveltekit-noscroll
			class="uppercase {currentLang == language ? "text-neutral-900" : "text-light/70"}"
			href="{resolveRoute(currentRoute, { lang: language })}">
			{language}
		</a>
	{/each}
</div>
