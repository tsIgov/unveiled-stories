<script lang="ts">
	let props:
	{
		class? : string | undefined,
		orientation : "horizontal" | "vertical",
	} = $props();

</script>


<div class="flex {props.orientation == "vertical" ? "flex-col" : ""} gap-3 content-center justify-center items-center {props.class}">
	<div class="{props.orientation == "vertical" ? "bg-gradient-to-b" : "bg-gradient-to-r" } from-brand-2/0 to-brand/50 h-[1px] w-[1px] grow"> </div>
	<div class="w-1.5 h-1.5 bg-radial from-brand-2 to-brand rounded-full"></div>
	<div class="{props.orientation == "vertical" ? "bg-gradient-to-t" : "bg-gradient-to-l" } from-brand-2/0 to-brand/50 h-[1px] w-[1px] grow"> </div>
</div>
