<script lang="ts">
	let scrollY = $state(0);
	let fixed = $derived(scrollY > 50);

	let { title } = $props();

	$effect(() => {
		// console.log(fixed);
	});
</script>

<svelte:window bind:scrollY />

<main
	class={`fixed z-50 m-2 mx-auto flex w-full max-w-5xl items-center justify-between rounded-lg p-5 transition-all duration-300 
  ${fixed ? 'shadow-info bg-black/70 shadow-lg backdrop-blur-xl' : ''}`}
>
	<a href="/">{title}</a>
	<p>Search</p>
	<p>Options</p>
</main>
