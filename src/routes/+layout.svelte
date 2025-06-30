<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	export let data;

	const { project } = data;
</script>

<svelte:head>
	<title>{project.title}</title>
	<meta name="description" content={project.description} />
</svelte:head>

<main class="">
	<Navbar />
	<div
		class="bg-base-300 text-base-content m-4 mx-auto flex min-h-screen max-w-5xl flex-col rounded-lg p-8 shadow sm:shadow-lg lg:shadow-xl"
	>
		<slot />
	</div>
</main>
