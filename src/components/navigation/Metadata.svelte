<script lang="ts">
	import { getTranslator } from '$lib/i18n/translator';

	import { type Metadata, ogLocale } from 'data/metadata';

	interface Props {
		data: Metadata,
	}

	let { data } : Props = $props();
	let t = $derived(getTranslator());
</script>

<svelte:head>
    <meta property="og:locale" content="{t(ogLocale)}">

	<title>{t(data.title)}</title>
	<meta property="og:title" content={t(data.title)}>

	<meta property="og:description" content={t(data.description)}>
	<meta name="description" content={t(data.description)}>

	<meta name="keywords" content={t(data.keywords)}>

    <meta property="og:image" content={data.image}>
	<meta property="og:image:width" content="1200">
  	<meta property="og:image:height" content="630">
    <meta property="og:type" content="website">
</svelte:head>
