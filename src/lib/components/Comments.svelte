<script lang="ts">
	import type { Comment as CommentType } from '$lib/directus-types';
	import Comment from './Comment.svelte';

	export let comments: CommentType[];
</script>

<hr />
<section>
	<h3>Comments</h3>

	{#each comments as comment}
		<Comment {comment} />
	{/each}
</section>
