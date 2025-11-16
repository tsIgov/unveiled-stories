<script lang="ts">
	import { Rule, Slideshow, Frame, SectionBackground, LightboxGallery } from 'components/common';
	import { PhotoCardSpread } from 'components/cards';

	import { type Photoshoot, photoshoots, galleryEnabled } from 'data/photoshoots';
	import { getTranslator } from '$lib/i18n/translator';

	let t = $derived(getTranslator());

	let currentIndex = $state(0);

	let slideshow : Slideshow<Photoshoot>;
	let gallery : LightboxGallery;

	function openGallery() {
		slideshow.pause();
		gallery.open();
	}

	function onGalleryClosed() {
		slideshow.unpause();
	}

	function onSlideChanged(item : Photoshoot, index : number) {
		currentIndex = index;
	}

</script>

<section class="portfolio-preview">
	<Slideshow bind:this={slideshow}
		slideSnippet={photoshoot}
		data={photoshoots}
		timeout={8000}
		onchanged={onSlideChanged}
	/>
	<LightboxGallery bind:this={gallery}
		images={photoshoots[currentIndex].photos.gallery}
		borderColor={photoshoots[currentIndex].color}
		onclosed={onGalleryClosed}
	/>
</section>

{#snippet photoshoot(item : Photoshoot, index : number)}
	<div>
		<SectionBackground
			landscape={item.photos.backgrounds.landscape}
			portrait={item.photos.backgrounds.portrait} alt={t(item.name)} />

		<div class="preview">

			<PhotoCardSpread
				imageLeft={item.photos.preview.left}
				imageCenter={item.photos.preview.center}
				imageRight={item.photos.preview.right}
				color={item.color}
				onclick={ !item.photos.gallery || !galleryEnabled ? undefined : () => openGallery()}
			/>

			<div class="side">
				<Rule orientation="vertical" centerOrnament={true}/>
				<Rule orientation="horizontal" centerOrnament={true}/>

				<div class="details">
					{#if item.photos.gallery != undefined && galleryEnabled}
					<button onclick={() => openGallery()}>
						<Frame color={item.color}>
							<span>{t(item.name)}</span>
						</Frame>
					</button>
					{:else}
					<h3>
						<Frame color={item.color}>
							<span>{t(item.name)}</span>
						</Frame>
					</h3>
					{/if}
					<p>{t(item.description)}</p>
				</div>
			</div>

		</div>
	</div>
{/snippet}


<style>
	@reference "style";

	.portfolio-preview > :global(.slideshow) {
		@apply w-full h-svh;
	}

	.details {
		@apply max-w-sm px-4 flex flex-col gap-3 items-center;

		& > h3,
		& > button {
			@apply w-full max-w-2xs;
			@apply bg-neutral-900;
			@apply text-center font-bold uppercase select-none;

			& span {
				@apply block w-full px-8 py-1;
			}
		}

		& > button {
			@apply hover-glow cursor-pointer;
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


			& :global(.rule.vertical) {
				display: none;
			}

			& :global(.rule.horizontal) {
				@apply absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-sm ;
			}

			& > :global(.photo-card-spread) {
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

			& :global(.rule.horizontal) {
				display: none;
			}

			& :global(.rule.vertical) {
				@apply absolute top-1/2 -translate-y-1/2 h-full;
				max-height: var(--preview-max-content-height);
			}

			& > :global(.photo-card-spread) {
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
