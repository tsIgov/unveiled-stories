<script lang="ts">
	let { children } = $props();
</script>

<div class="sticky top-0 h-0 overflow-visible flex justify-center">
	<img class="h-12 m-2" src="logo.svg" alt="logo" />

</div>

{@render children()}
