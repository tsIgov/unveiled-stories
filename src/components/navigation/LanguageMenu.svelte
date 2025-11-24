<script lang="ts">
	import { resolve } from "$app/paths";
	import { languages, type Language } from "$lib/i18n/languages";

	interface Props {
		currentLang : Language,
		currentRoute : string
	}

	let { currentLang, currentRoute} : Props = $props();
</script>

<div class="language-menu">
	{#each languages as language}
		<a
			data-sveltekit-noscroll
			class:active={currentLang == language}
			href={resolve(currentRoute, { lang: language })}>
			{language}
		</a>
	{/each}
</div>

<style>
	@reference "style";

	.language-menu {
		@apply flex items-center justify-center gap-2;
		@apply text-sm;

		& > a {
			@apply uppercase text-moonlight-dim;
			@apply transition-colors duration-300;
		}

		& > a.active {
			@apply text-neutral-100;
		}
		& > a:not(.active):hover {
			@apply text-moonlight;
		}
	}

</style>
