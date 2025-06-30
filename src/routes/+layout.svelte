<script lang="ts">
	import '../app.css';
	import SEO from '$lib/components/SEO.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	export let data;

	const { project } = data;
</script>

<SEO title={project.title} description={project.description} />

<main class="">
	<!-- <Navbar /> -->
	<div
		class="bg-base-300 text-base-content m-4 mx-auto flex min-h-screen max-w-5xl flex-col rounded-lg p-8 shadow sm:shadow-lg lg:shadow-xl"
	>
		<slot />
	</div>
</main>
