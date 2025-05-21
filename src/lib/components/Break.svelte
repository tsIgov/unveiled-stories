<script lang="ts">
	interface Props {
		class? : string,
		orientation : "horizontal" | "vertical",
	}

	let { orientation, ...others} : Props = $props();

</script>


<div class="flex {orientation == "vertical" ? "flex-col" : ""} gap-3 content-center justify-center items-center {others.class}">
	<div class="{orientation == "vertical" ? "bg-gradient-to-b" : "bg-gradient-to-r" } from-brand-2/0 to-brand/50 h-[1px] w-[1px] grow"> </div>
	<div class="w-1.5 h-1.5 bg-brand/80 rounded-full"></div>
	<div class="{orientation == "vertical" ? "bg-gradient-to-t" : "bg-gradient-to-l" } from-brand-2/0 to-brand/50 h-[1px] w-[1px] grow"> </div>
</div>
