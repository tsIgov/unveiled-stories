<script lang="ts">
    import SvelteMarkdown from '@humanspeak/svelte-markdown'
	import { getTranslator } from '$lib/i18n/translator';
	import { policyMarkdown } from "data/privacy";

	let t = $derived(getTranslator());
</script>

<main class="markdown">
	<SvelteMarkdown source={t(policyMarkdown)} />
</main>


<style>
	@reference "style";

	main {
		@apply w-full max-w-2xl mx-auto p-4;
	}
</style>
