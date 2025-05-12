<script lang="ts">
	let { children } = $props();
</script>

<div class="sticky top-0 h-0 overflow-visible flex">
	<img class="h-16 m-4" src="logo.svg" alt="logo" />

</div>

{@render children()}
