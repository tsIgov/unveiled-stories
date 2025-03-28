<script lang="ts">
	import { t } from "$lib/utils";
	import PhotoCard from "$lib/components/PhotoCard.svelte";

	import image from "$lib/assets/the-hunt.jpg?enhanced"
</script>

<PhotoCard name={t({en: 'The Hunt', bg: "Ловът"})} number="XVII" image={image} />
