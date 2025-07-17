<script lang="ts">
	// import { Moon, Search, Settings2, Sun } from '@lucide/svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let scrollY = $state(0);
	let scrollPercent = $state(0);
	let fixed = $derived(scrollY > 50);

	$effect(() => {
		const doc = document.documentElement;
		const totalHeight = doc.scrollHeight - doc.clientHeight;
		scrollPercent = totalHeight > 0 ? Math.min((scrollY / totalHeight) * 100, 100) : 0;
	});

	let { title } = $props();
</script>

<svelte:window bind:scrollY />

<header class="fixed top-0 right-0 left-0 z-50 m-2 flex flex-col items-center justify-center">
	<main
		class={`flex w-full max-w-5xl items-center justify-between rounded-tl-md rounded-tr-md p-5 transition-all duration-300 
  ${fixed ? 'bg-black/50 text-white shadow-2xl backdrop-blur-xs' : ''}`}
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

			<ThemeToggle />
		</section>
	</main>

	<progress class="progress progress-warning max-w-5xl" value={scrollPercent} max="100"></progress>
</header>
