<script lang="ts">
	import { MenuIcon } from '@lucide/svelte';
	import type { Language } from '$lib/i18n/languages';

	import { Rule } from 'components/common';
	import { LanguageMenu } from 'components/navigation';

	interface Props {
		currentLang : Language,
		currentRoute : string,
		opacity : number,
		reserveSpace: boolean,
	}

	let { currentLang, currentRoute, opacity, reserveSpace } : Props = $props();
</script>


<nav class="nav-menu"
	class:reserved-space={reserveSpace}>
	<div class="background" style="opacity: {opacity};">
		<Rule />
		<div class="glow"></div>
	</div>

	<div class="content">
		<div class="menu">
			<!-- <MenuIcon class="h-5 w-auto text-moonlight" /> -->
		</div>

		<a class="logo" href="/"><img src="/logo.svg" alt="logo" /></a>
		<LanguageMenu {currentRoute} {currentLang} />
	</div>

</nav>

<style>
	@reference "style";

	:global(:root) {
		@apply navbar-h-lg landscape-cards:navbar-h-sm;
	}

	nav {
		@apply fixed w-full top-0 p-4 landscape-cards:py-2 overflow-visible;
		@apply flex justify-center content-center;
		height: var(--navbar-height);
		z-index: 1000;

		&.reserved-space + :global(*) {
			margin-top: var(--navbar-height);
		}

		& :global(.rule) {
			@apply absolute bottom-0 w-full;
		}

		& > .background {
			@apply absolute top-0 left-0 w-full h-full bg-neutral-800;

			& > .glow {
				@apply absolute bottom-0 w-full h-1 -z-10;
				@apply bg-gradient-to-r from-moonlight/0 via-moonlight to-moonlight/0;
				@apply blur-md;
			}
		}

		& > .content {
			@apply w-full h-full max-w-7xl;
			@apply flex content-center justify-center;

			& > .menu {
				@apply h-full grow basis-0;
				@apply flex items-center content-center gap-2;
			}

			& > .logo {
				@apply h-full basis-auto grow-0 shrink-0;

				& > img {
					@apply h-full select-none;
				}
			}

			& > :global(.language-menu) {
				@apply h-full grow basis-0 flex content-center justify-end;
			}
		}
	}

</style>
