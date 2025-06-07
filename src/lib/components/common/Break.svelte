<script lang="ts">
	interface Props {
		class? : string,
		orientation : "horizontal" | "vertical",
		centerOrnament: boolean,
	}

	let { orientation, centerOrnament, ...others} : Props = $props();

</script>


<div class="flex {orientation == "vertical" ? "flex-col" : ""} {centerOrnament ? "gap-3" : ""} content-center justify-center items-center {others.class}">

	<div class="from-gold to-light h-[1px] w-[1px] grow
			{orientation == "vertical" ? "bg-gradient-to-b" : "bg-gradient-to-r" } "
		style="mask: linear-gradient(to {orientation == "vertical" ? "top" : "left"}, #ffffffa0,#0000)">
	</div>

	{#if centerOrnament}
		<div class="w-1.5 h-1.5 bg-light/80 rounded-full"></div>
	{/if}

	<div class="from-gold to-light h-[1px] w-[1px] grow
			{orientation == "vertical" ? "bg-gradient-to-t" : "bg-gradient-to-l" }"
		style="mask: linear-gradient(to {orientation == "vertical" ? "bottom" : "right"}, #ffffffa0,#0000)">
	</div>
</div>
