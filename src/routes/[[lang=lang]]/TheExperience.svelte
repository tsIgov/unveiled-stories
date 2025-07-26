<script lang="ts">
	import { TextCard } from 'components/cards';
	import { Carousel, Rule } from 'components/common';

	interface Props {
		data: {
			header: string,
			paragraph: string,
			steps: { title : string; text: string }[];
		}
	}

	let { data } : Props = $props();

</script>

{#snippet step({title, text} : {title: string, text: string})}
	<TextCard class="max-w-xs" {title} {text}/>
{/snippet}

<section>
	<div class="text-center max-w-3xl px-4">
		<h2 class="font-serif text-xl text-light uppercase mb-2">{data.header}</h2>
		<p class="text-neutral-900">{data.paragraph}</p>
		<Rule class="w-full mt-4 snap-start" centerOrnament={true} />
	</div>

	<Carousel class="w-full" itemSnippet={step} data={data.steps} loop={false} />
</section>


<style>
	@rerefence "style";
</style>
