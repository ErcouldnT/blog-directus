<script lang="ts">
	import { onMount } from 'svelte';

	export let title: string;
	export let description: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content="tech, blog, code, news, apps" />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="https://blog.erkut.dev" />

	<meta property="twitter:url" content="https://blog.erkut.dev" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
</svelte:head>
