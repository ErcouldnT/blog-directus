<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;

	const { project } = data;
</script>

<div class="flex flex-col items-center justify-center">
	<Header title={project.title} />
	<main class="m-4 flex max-w-5xl flex-col items-center justify-center space-y-4">
		<section class="my-32">
			<slot />
		</section>
		<section>
			<Footer />
		</section>
	</main>
</div>
