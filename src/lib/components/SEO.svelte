<script lang="ts">
	import { onMount } from 'svelte';
	import { seo } from '$lib/stores/seo';

	export let title: string;
	export let description: string;
	export let image = `https://social-share-images.vercel.app/${encodeURIComponent(title)}.png`;

	const loadSeo = () => {
		seo.set({
			title,
			description,
			image
		});
	};

	onMount(() => {
		loadSeo();
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content="tech, blog, code, news, apps" />

	<meta property="og:title" content={title} />
	<meta property="og:image" content={image} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://blog.erkut.dev" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@ercouldnt" />
	<meta name="twitter:url" content="https://blog.erkut.dev" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
