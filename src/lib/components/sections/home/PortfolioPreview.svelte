<script lang="ts">
	import { Break, Slideshow } from '$lib/components/common/index';
	import { PhotoCardSpread } from '$lib/components/cards/index';
	import { fit } from '$lib/utils/text-fit'
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
				<div class="details">
					<Break orientation="horizontal" centerOrnament={true} class="break-h absolute top-0 left-0 w-full"/>
					<Break orientation="vertical" centerOrnament={true} class="break-v absolute top-0 left-0 h-full"/>

					<h3 style="--glow-color:{data.color}">
						<span>{data.name}</span>
					</h3>
					<p use:fit>{data.description}</p>
				</div>
			</div>

		</div>
	</div>
{/snippet}



<Slideshow class={others.class} slideSnippet={photoshoot} data={photoshoots} timeout={500000} />


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
			@apply w-full h-full grid gap-4 justify-items-center overflow-hidden;
			padding-top: var(--navbar-height);
			grid-template-rows: minmax(10rem, 1fr) minmax(0, auto);

			& :global(.break-v) {
				display: none;
			}

			& > :global(.spread) {
				@apply self-center;
				height: 100%;
				max-width: 145svw;
				max-height: 115.08svw;
			}

			& > .side {
				@apply w-full flex flex-col items-center gap-6 bg-neutral-100/50;
				padding-bottom: var(--slideshow-navigation-height);

				& .details {
					@apply pt-6;
				}
			}
		}
	}

	/* landscape */
	@media not (max-aspect-ratio: 4/3) {
		.preview {
			@apply w-full h-full grid gap-4 justify-evenly items-center overflow-hidden;
			padding-top: var(--navbar-height);
			padding-bottom: var(--slideshow-navigation-height);
			grid-template-columns: auto minmax(0,auto);
			grid-template-rows: 100%;

			& :global(.break-h) {
				display: none;
			}

			& > :global(.spread) {
				width: calc((100svh - var(--navbar-height) - var(--slideshow-navigation-height)) * 1.26);
			}

			& > .side {
				@apply flex items-center gap-6;

				& .details {
					@apply py-8;
					max-height: calc(100svh - var(--navbar-height) - var(--slideshow-navigation-height));
				}
			}
		}
  	}

</style>
