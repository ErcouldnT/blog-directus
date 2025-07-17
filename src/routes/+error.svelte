<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Error {page.status}</title>
</svelte:head>

<div class="flex flex-col items-center justify-center space-y-4 p-24 text-center">
	<h1 class="text-9xl">\(^Д^)/</h1>
	<p class="mb-6 text-sm">{page.error?.message || "You're lost, my friend."}</p>
	<a href="/" class="btn btn-warning">Go back</a>
</div>
