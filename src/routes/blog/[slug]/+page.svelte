<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';

	export let data;

	const { post } = data;
</script>

<main class="prose prose-base">
	<img
		src="{PUBLIC_API_URL}/assets/{post.image.filename_disk}?width=600"
		alt={post.image.description}
	/>
	<h1>{post.title}</h1>
	<div>{@html post.content}</div>
</main>
