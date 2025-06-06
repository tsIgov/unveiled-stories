<script lang="ts">
	import Break from '$lib/common/Break.svelte';
	import LanguageMenu from '$lib/navigation/LanguageMenu.svelte';
	import type { Language } from '$lib/i18n/languages';

	interface Props {
		currentLang : Language,
		currentRoute : string,
		opacity : number
	}

	let { currentLang, currentRoute, opacity } : Props = $props();
</script>


<div class="fixed w-full h-[var(--navbar-height)] p-4 overflow-visible flex justify-center content-center z-[1000]">

	<div class="absolute top-0 left-0 w-full h-full bg-neutral-100" style="opacity: {opacity};">
		<Break orientation="horizontal" centerOrnament={false} class="absolute bottom-0 w-full" />
		<div class="absolute bottom-0 w-full h-1 blur-md -z-10 from-light/0 via-light to-light/0 bg-gradient-to-r"></div>
	</div>

	<div class="w-full h-full flex content-center justify-center">
		<div class="h-full grow basis-0 flex content-center justify-start">
			<div class="flex items-center gap-2">
				<img class="h-5 w-auto" src="hamburger.svg" alt="logo" />
			</div>
		</div>

		<div class="h-full basis-auto grow-0 shrink-0">
			<img class="h-full w-auto" src="logo.svg" alt="logo" />
		</div>

		<div class="h-full grow basis-0 flex content-center justify-end">
			<LanguageMenu {currentRoute} {currentLang} />
		</div>
	</div>

</div>
