<script lang="ts">
	import type { Comment } from '$lib/directus-types.js';
	import Comments from '$lib/components/Comments.svelte';
	import SEO from '$lib/components/SEO.svelte';

	export let data;

	const { post, directusUrl } = data;

	const comments = post.comments as Comment[];
	const postId = post.id;
</script>

<SEO title={post.title} description={post.description} />

<main
	class="prose lg:prose-2xl prose-img:rounded-lg prose-img:w-full prose-img:shadow-2xl prose-img:p-0 mx-auto transition-all duration-300"
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

	<Comments {comments} {postId} />
</main>
