<script lang="ts">
	import { TextCard } from 'components/cards';
	import { Carousel, Heading } from 'components/common';

	interface Props {
		data: {
			header: string,
			paragraph: string,
			steps: { title : string; text: string }[];
		}
	}

	let { data } : Props = $props();

</script>

{#snippet step({title, text} : {title: string, text: string}, active : boolean )}
	<TextCard class="max-w-xs" {title} {text} glow={false} />
{/snippet}

<section>
	<Heading title={data.header} summary={data.paragraph}/>
	<Carousel class="w-full" itemSnippet={step} data={data.steps} loop={false} />
</section>


<style>
	@rerefence "style";
</style>
