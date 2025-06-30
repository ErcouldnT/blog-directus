<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import SEO from '$lib/components/SEO.svelte';

	export let data;

	const { post } = data;
</script>

<SEO title={post.title} description={post.content.slice(0, 160)} />

<main
	class="prose lg:prose-xl prose-img:rounded-2xl prose-neutral prose-headings:font-serif prose-h1:text-emerald-700 prose-p:text-gray-300 prose-a:text-emerald-600 hover:prose-a:text-emerald-800 prose-li:text-gray-700 prose-ul:list-inside prose-ol:list-inside prose-li:marker:text-emerald-600 prose-img:w-full prose-img:p-0 prose-p:text-justify mx-auto"
>
	<h1>{post.title}</h1>

	{#if post.image}
		<img
			src="{PUBLIC_API_URL}/assets/{post.image.filename_disk}?width=600"
			alt={post.image.description}
		/>
	{/if}

	<div>{@html post.content}</div>
</main>
