<script lang="ts">
	import { resolveRoute } from '$app/paths';

	let { children, data } = $props();

</script>

<div class="fixed w-full h-16 p-2 overflow-hidden flex justify-center z-[100]">
	<img class="h-12 m-2" src="logo.svg" alt="logo" />
	<div>
		<a href="{resolveRoute(data.route, { lang:"en" })}">EN</a>
		<a href="{resolveRoute(data.route, { lang:"bg" })}">BG</a>
	</div>
</div>

{@render children()}
