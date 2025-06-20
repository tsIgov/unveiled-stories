<script lang="ts">
	import { TextCard } from '$lib/components/cards';
	import { Break } from '$lib/components/common';
	import { fit } from '$lib/utils/text-fit';


	interface Props {
		class? : string;
	}

	 let { ...others } : Props = $props();

</script>

{#snippet step({title, text} : {title: string, text: string})}
	<TextCard class="h-full" {title} {text}/>
{/snippet}


<div class="w-full min-h-full py-4 flex flex-col justify-around items-center mx-auto gap-8{others.class}">
	<div class="text-center max-w-3xl px-4">
		<h2 class="font-serif text-xl text-light uppercase mb-2">Frequently Asked Questions</h2>
	</div>

	<div class="test flex flex-col gap-1">
		<h3><span>Do I have to get undressed?</span></h3>
		<Break class="w-full -top-2"  centerOrnament={false} orientation="horizontal" />
		<h3><span>How many people can participate?</span></h3>
		<Break class="w-full -top-2"  centerOrnament={false} orientation="horizontal" />
		<h3><span>How much does it cost?</span></h3>
		<Break class="w-full -top-2"  centerOrnament={false} orientation="horizontal" />
		<h3><span>Can I bring a friend?</span></h3>
		<Break class="w-full -top-2"  centerOrnament={false} orientation="horizontal" />
		<h3><span>I don't know how to pose?</span></h3>
		<Break class="w-full -top-2"  centerOrnament={false} orientation="horizontal" />
		<h3><span>I'm not fit.</span></h3>
		<Break class="w-full -top-2"  centerOrnament={false} orientation="horizontal" />
		<h3><span>I don't have beautiful lingerie/clothes.</span></h3>
		<Break class="w-full -top-2"  centerOrnament={false} orientation="horizontal" />
		<h3><span>What if I don't live in Sofia?</span></h3>
		<Break class="w-full -top-2"  centerOrnament={false} orientation="horizontal" />
	</div>
</div>


<style>
	@reference "style";

	.test {
		--glow-color:oklch(0.9201 0.0502 76.88);
		& > h3 {
			@apply w-full p-[2px]  text-nowrap;

			& > span {
				@apply block px-10 py-1 bg-neutral-100 ;
				@apply text-center font-bold select-none;
			}
		}
	}
</style>
