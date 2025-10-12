<script lang="ts">
	import { getTranslator } from '$lib/i18n/translator';
	import { type Metadata } from 'data/metadata';

	interface Props {
		data: Metadata,
	}

	let { data } : Props = $props();
	let t = $derived(getTranslator());
</script>

<svelte:head>
    <meta property="og:locale" content="{t({en: "en_US", bg: "bg_BG" })}">

	<title>{t(data.title)}</title>
	<meta property="og:title" content={t(data.title)}>

	<meta property="og:description" content={t(data.description)}>
	<meta name="description" content={t(data.description)}>

	<meta name="keywords" content={t(data.keywords)}>

    <meta property="og:image" content={data.image ?? "http://localhost:5173/og-image.jpg"}>
    <meta property="og:type" content="website">
</svelte:head>
