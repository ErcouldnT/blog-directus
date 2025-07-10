<script lang="ts">
	import { Moon, Search, Settings2, Sun } from '@lucide/svelte';

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
  ${fixed ? 'bg-black/50 shadow-2xl backdrop-blur-xs' : ''}`}
>
	<a class="flex items-center space-x-2" href="/">
		<img class="w-8" src="https://fav.farm/🦊" alt="Fox" />
		<p>{title}</p>
	</a>

	<!-- <button class="flex cursor-pointer items-center space-x-2">
		<Search />
		<p>Search</p>
	</button> -->

	<section class="flex items-center space-x-2">
		<!-- <button class="flex cursor-pointer items-center space-x-2">
			<Settings2 />
			<p>Options</p>
		</button> -->

		<!-- <div class="divider divider-horizontal"></div> -->

		<div class="cursor-pointer">
			<Sun />
			<!-- <Moon /> -->
		</div>
	</section>
</main>
