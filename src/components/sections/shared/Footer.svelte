<script lang="ts">
	import { Rule } from "components/common";

	import { page } from '$app/state';
	import { getTranslator } from '$lib/i18n/translator';
	import { footerLink } from "data/privacy";

	let t = $derived(getTranslator());
</script>

<footer class="footer">
	<Rule />
	<p>
		©{new Date().getFullYear()} Unveiled Stories |
		<a href="{page.data.lang}/privacy" target="_blank">{t(footerLink)}</a>
	</p>
</footer>

<style>
	@reference "style";

	:global(:root) {
		--footer-height: 2.375rem;
	}

	footer {
		& > :global(.rule) {
			@apply w-full absolute top-0 left-0;
		}

		& > p {
			@apply text-center;
			@apply text-moonlight-dim text-sm;
			line-height: var(--footer-height);

			& > a {
				@apply underline;
				@apply hover:text-neutral-100;
				@apply transition-colors duration-300;
			}
		}
	}
</style>
