<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';

	export let data;

	const { post, directusUrl } = data;
</script>

<SEO title={post.title} description={post.content.slice(0, 160)} />

<main
	class="prose lg:prose-xl prose-img:rounded-lg prose-neutral prose-headings:font-serif prose-p:text-gray-300 prose-a:text-emerald-600 hover:prose-a:text-emerald-800 prose-li:text-gray-700 prose-ul:list-inside prose-ol:list-inside prose-li:marker:text-emerald-600 prose-img:w-full prose-img:p-0 mx-auto"
>
	<h1>{post.title}</h1>

	{#if post.image}
		<img
			src={directusUrl +
				'/assets/' +
				(typeof post.image === 'string' ? post.image : post.image.filename_disk) +
				'?width=1024'}
			alt={typeof post.image === 'string' ? post.title : post.image.description}
		/>
	{/if}

	<div>{@html post.content}</div>
</main>
