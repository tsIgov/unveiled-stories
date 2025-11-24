<script lang="ts">

	import { onMount } from "svelte";
	import { getTranslator } from '$lib/i18n/translator';

	import { MenuIcon, XIcon } from '@lucide/svelte';

	import { type Language, defaultLanguage } from '$lib/i18n/languages';

	import { Ruler } from 'components/basic';
	import { LanguageMenu } from 'components/navigation';

	import { type NavLink, navLinks } from "data/navigation"

	let t = $derived(getTranslator());

	interface Props {
		currentLang : Language,
		currentRoute : string,
		opacity : number,
		reserveSpace: boolean,
	}

	let { currentLang, currentRoute, opacity, reserveSpace } : Props = $props();

	let opened = $state(false);

	$effect(() => {
		if (opened) {
			document.body.classList.add("overflow-hidden");
			window.addEventListener("keydown", handleKeyDown);
		} else {
			document.body.classList.remove("overflow-hidden");
			window.removeEventListener("keydown", handleKeyDown);
		}
	});

	onMount(() => {
		return () => {
			document.body.classList.remove("overflow-hidden");
			window.removeEventListener("keydown", handleKeyDown);
		};
	});

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key == "Escape")
			opened = false;
	}

	function navigate(e : MouseEvent, link : NavLink) {
		opened = false;

		if (currentRoute != "/[[lang=lang]]")
			return;

		e.preventDefault();

		document.body.classList.remove("overflow-hidden");
		requestAnimationFrame(() => {
			document.getElementById(link.sectionId)?.scrollIntoView({
				block: "start",
				inline: "nearest",
				behavior: "smooth"
			});
		});
	}
</script>


<nav class="nav-menu"
	class:reserved-space={reserveSpace}
	class:opened={opened}>
	<div class="background" style="opacity: {opacity};">
		<Ruler />
		<div class="glow"></div>
	</div>

	<div class="content">
		<div class="menu">
			<button onclick={() => {opened = !opened}}>
				<MenuIcon class="hamburger-icon" />
				<XIcon class="x-icon" />
			</button>
			{#if opened}
				<div class="links">
					<div class="content">
						{#each navLinks as link }
							<a
								href={`/${currentLang == defaultLanguage ? "" : currentLang}#${link.sectionId}`}
								onclick={(e) => navigate(e, link)}
							>
								{t(link.text)}
							</a>
						{/each}
					</div>
				</div>
			{/if}
		</div>

		<a class="logo" href={`/${currentLang == defaultLanguage ? "" : currentLang}`}><img src="/logo.svg" alt="logo" /></a>
		<LanguageMenu {currentRoute} {currentLang} />
	</div>
</nav>


<style>
	@reference "style";

	:global(:root) {
		@apply navbar-h-lg h-sm:navbar-h-sm;
	}

	nav {
		@apply fixed w-full h-(--navbar-height) top-0 p-4 landscape-cards:py-2 overflow-visible;
		@apply flex flex-col justify-center content-center items-center;
		z-index: 1000;

		&.reserved-space + :global(*) {
			margin-top: var(--navbar-height);
		}

		& :global(.ruler) {
			@apply absolute bottom-0 w-full;
		}

		& > .background {
			@apply absolute top-0 left-0 w-full h-full bg-neutral-800;

			& > .glow {
				@apply absolute bottom-0 w-full h-1 -z-10;
				@apply bg-linear-to-r from-moonlight/0 via-moonlight to-moonlight/0;
				@apply blur-md;
			}
		}

		& > .content {
			@apply w-full h-full max-w-7xl;
			@apply flex content-center justify-center;

			& > .menu {
				@apply h-full grow basis-0;
				@apply flex items-center content-center gap-2;

				& > button {
					@apply h-5 w-auto text-moonlight;

					& > :global(.x-icon) {
						@apply absolute top-0 opacity-0;
					}
				}
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

	nav.opened {
		& > .background {
			opacity: 1 !important;
		}

		& :global(.x-icon) { @apply opacity-100!; }
		& :global(.hamburger-icon) { @apply opacity-0; }

		& .links {
			@apply fixed top-(--navbar-height) left-0;
			@apply w-full flex py-4;
			height: calc(100vh - var(--navbar-height));

			@apply bg-neutral-800/90;

			& > .content {
				@apply h-full w-full;
				@apply flex flex-col gap-4;

				& > a {
					@apply p-4 pr-8;
					@apply flex items-center justify-center text-center;
					@apply cursor-pointer;
					@apply hover:text-neutral-100 text-moonlight;
					@apply text-xl;
				}
			}
		}
	}

</style>
