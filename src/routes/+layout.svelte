<script lang="ts">
	import '../app.css';
	import SEO from '$lib/components/SEO.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;

	const { project } = data;
</script>

<SEO title={project.title} description={project.description} />

<main class="mx-auto flex min-h-screen max-w-5xl flex-col space-y-4">
	<Header title={project.title} />
	<div class="mt-32">
		<slot />
	</div>
	<Footer />
</main>
