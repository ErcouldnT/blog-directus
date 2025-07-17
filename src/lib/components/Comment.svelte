<script lang="ts">
	import type { Comment } from '$lib/directus-types';

	export let comment: Comment;
</script>

<div>
	<h4>{comment.username}</h4>
	<p>{comment.comment}</p>
</div>
