<script lang="ts">
	import '../app.css';
	import SEO from '$lib/components/SEO.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;

	const { project } = data;
</script>

<SEO title={project.title} description={project.description} />

<main class="m-2 mx-auto flex min-h-screen max-w-5xl flex-col space-y-4 px-2">
	<section class="flex justify-center">
		<Header title={project.title} />
	</section>
	<section class="mt-32">
		<slot />
	</section>
	<section>
		<!-- <Footer /> -->
	</section>
</main>
