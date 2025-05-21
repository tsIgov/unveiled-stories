<script lang="ts">
	import { onMount } from "svelte";

	import { theHunt, nocturnalGlow } from "$lib/photoshoots/PhotoshootData";
	import HeroPreview from "$lib/components/HeroPreview.svelte";

	let slidesCount = 2;

	let i = $state(0);

	let interval = -1;
	onMount(() => {
		interval = setInterval(() => {
			i = (i + 1) % slidesCount;
		}, 5000);

		return () => clearInterval(interval);
	});

	$effect(() => {
		const progress = document.getElementById("progress-" + i);
		if (progress) {
			progress.classList.remove("progress-anim");
			void progress.offsetWidth;
			progress.classList.add("progress-anim");
		}
	});

</script>


<div class="w-full h-svh overflow-hidden">
	<HeroPreview data={nocturnalGlow} class="absolute top-0 left-0 w-full h-full transition-all transition-discrete duration-[2s] {i == 0 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}"/>
	<HeroPreview data={theHunt} class="absolute top-0 left-0 w-full h-full transition-all transition-discrete duration-[2s] {i == 1 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}"/>

	<div class="absolute p-4 w-full bottom-0 left-0 flex justify-center items-center gap-4">

		{#each { length: slidesCount }, slideIndex}
			<button class= "group flex justify-center items-center rounded-full transition-all w-[24px] h-[24px] cursor-pointer"
				onclick="{() => {
						clearInterval(interval);
						i=-1;
						i = slideIndex;
						interval = setInterval(() => {
							i = (i + 1) % slidesCount;
						}, 5000);
				}}"
				tabindex="-1">
				<span class="transition-all duration-1000 text-xs {i % slidesCount == slideIndex ? "text-base" : "text-base/60" } group-hover:text-base">
					{String(slideIndex + 1).padStart(2, '0')}
				</span>

				<div id="progress-{slideIndex}" class="transition-all duration-1000 absolute top-[-2px] left-[-2px] w-[28px] h-[28px] rounded-full bg-conic from-base to-base/20 from-100% to-100% progress-anim -z-10
					{i % 2 == slideIndex ? "opacity-100" : "opacity-0"}"
					style="mask: radial-gradient(14px at center, transparent 12px, black 13px);">
				</div>

			</button>
		{/each}







	</div>
</div>


<style>
	.progress-anim {
		animation: progress 5s linear 1;
	}

	@keyframes progress {
		from {
			--tw-gradient-to-position: 0%;
			--tw-gradient-from-position: 0%;
		}
		to {
			--tw-gradient-to-position: 100%;
			--tw-gradient-from-position: 100%;
		}
	}


</style>
