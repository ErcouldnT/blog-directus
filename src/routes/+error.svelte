<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Hata {page.status}</title>
</svelte:head>

<div class="flex flex-col items-center justify-center space-y-4 p-24 text-center">
	<a href="/" class="btn btn-error rounded px-6 py-3 transition-all duration-300">Go back</a>
	<p class="mb-6 text-lg">{page.error?.message || 'Beklenmeyen bir hata oluştu.'}</p>
</div>
