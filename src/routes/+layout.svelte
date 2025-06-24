<script lang="ts">
	import '../app.css';

	export let data;

	const { global } = data;
</script>

<svelte:head>
	<title>{global.title}</title>
</svelte:head>

<main
	class="bg-base-300 text-base-content m-8 mx-auto flex min-h-screen max-w-5xl flex-col rounded-lg p-8 shadow sm:shadow-lg lg:shadow-xl"
>
	<slot />
</main>
