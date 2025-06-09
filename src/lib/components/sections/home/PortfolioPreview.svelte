<script lang="ts">
	import { Break, Slideshow } from '$lib/components/common/index';
	import { PhotoCardSpread } from '$lib/components/cards/index';
	import type { PhotoshootData } from 'photoshoots/photoshoot-data';

	interface Props {
		class? : string;
		photoshoots : PhotoshootData[]
	}

	let { photoshoots, ...others } : Props = $props();
</script>

{#snippet photoshoot(data : PhotoshootData)}


	<div>
		<enhanced:img class="background landscape:hidden" src={data.backgroundPortrait} alt={data.name} />
		<enhanced:img class="background portrait:hidden" src={data.backgroundLandscape} alt={data.name} />

		<div class="preview">

			<PhotoCardSpread
				class="spread"
				imageLeft={data.cardLeft}
				imageCenter={data.cardCenter}
				imageRight={data.cardRight}
				name={data.name}
				color={data.color}
			/>

			<div class="side">
				<Break orientation="vertical" centerOrnament={true} class="break-v"/>
				<Break orientation="horizontal" centerOrnament={true} class="break-h"/>

				<div class="details">

					<h3 style="--glow-color:{data.color}">
						<span>{data.name}</span>
					</h3>
					<p>{data.description}</p>
				</div>
			</div>

		</div>
	</div>
{/snippet}



<Slideshow class={others.class} slideSnippet={photoshoot} data={photoshoots} timeout={5000} />


<style>
	@reference "style";

	.background {
		@apply w-full h-full absolute left-0 top-0 object-cover brightness-75 opacity-20;
	}

	.details {
		@apply max-w-sm px-4 flex flex-col gap-3 items-center overflow-hidden;
		& > h3 {
			@apply w-full max-w-2xs p-[2px] glow inverse-corners;

			& > span {
				@apply block px-5 py-1 bg-neutral-100 inverse-corners;
				@apply text-center font-bold uppercase select-none;
			}
		}

		& > p {
			@apply italic text-center;
		}
	}

	/* portrait */
	@media (max-aspect-ratio: 4/3) {
		.preview {
			@apply w-full h-full px-4 grid gap-4 content-evenly justify-items-center overflow-hidden;
			padding-top: calc(var(--navbar-height) + 1rem);
			padding-bottom: var(--slideshow-navigation-height);
			grid-template-rows: minmax(0, auto) minmax(0, auto);
			grid-template-columns: 100%;


			& :global(.break-v) {
				display: none;
			}

			& :global(.break-h) {
				@apply absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-sm ;
			}

			& > :global(.spread) {
				@apply self-center;
				height: 115.08svw;
				max-height: 100%;
			}

			& > .side {
				@apply w-full flex flex-col items-center gap-6 h-fit;

				& .details {
					@apply pt-6;
				}
			}
		}
	}

	/* landscape */
	@media not (max-aspect-ratio: 4/3) {
		.preview {
			@apply w-full h-full px-4 grid gap-4 justify-evenly items-center overflow-hidden max-w-7xl left-1/2 -translate-x-1/2;
			padding-top: calc(var(--navbar-height) + 1rem);
			padding-bottom: var(--slideshow-navigation-height);
			grid-template-columns: minmax(0, auto) minmax(0,auto);
			grid-template-rows: 100%;
			--preview-max-content-height: calc(100svh - var(--navbar-height) - var(--slideshow-navigation-height) - 1rem);

			& :global(.break-h) {
				display: none;
			}

			& :global(.break-v) {
				@apply absolute top-1/2 -translate-y-1/2 h-full;
				max-height: var(--preview-max-content-height);
			}

			& > :global(.spread) {
				width: calc(var(--preview-max-content-height) * var(--aspect-spread));
				max-width: 100%;
			}

			& > .side {
				@apply flex items-center gap-6 py-8;

				& .details {
					max-height: var(--preview-max-content-height);
				}
			}
		}
  	}

</style>
