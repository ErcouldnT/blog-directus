<script lang="ts">
	import type { Comment as CommentType } from '$lib/directus-types';
	import { createItem } from '@directus/sdk';
	import getDirectusInstance from '$lib/directus';
	import Comment from './Comment.svelte';

	export let comments: CommentType[];
	export let postId: number;

	let username = '';
	let text = '';

	async function sendComment() {
		if (!text.trim() || !username.trim()) return;

		const comment = {
			username,
			comment: text,
			post: postId
		};

		const directus = getDirectusInstance();
		const newComment = await directus.request(createItem('comments', comment));

		text = '';
		(document.getElementById('commentModal') as HTMLDialogElement)?.close();

		// for testing
		comments = [...comments, newComment];
	}
</script>

<hr />
<section>
	<div class="flex items-center justify-center">
		<button
			on:click={() => (document.getElementById('commentModal') as HTMLDialogElement)?.showModal()}
			class="btn btn-warning">Do you wanna write a comment?</button
		>
		<dialog id="commentModal" class="modal">
			<div class="modal-box prose bg-black/50 text-white shadow-2xl backdrop-blur-xs">
				<!-- <h4 class="text-lg font-bold">Hello!</h4> -->
				<!-- <p class="py-4 border">Share your opinion about this post:</p> -->
				<fieldset class="fieldset text-base-content">
					<legend class="fieldset-legend text-white">Username</legend>
					<input
						bind:value={username}
						class="input input-warning bg-base-100 w-full"
						placeholder="Your name"
					/>

					<legend class="fieldset-legend text-white">Share your opinion about this post</legend>
					<textarea
						bind:value={text}
						class="textarea bg-base-100 textarea-warning w-full"
						placeholder="Your comment"
					></textarea>
					<!-- <p class="label">Your comment will be visible on page after admin check.</p> -->
				</fieldset>

				<p class="label text-xs break-words whitespace-normal">
					It will be published after it is reviewed by an author.
				</p>
				<button on:click={sendComment} class="btn btn-warning w-full">Share</button>
			</div>
			<form method="dialog" class="modal-backdrop">
				<button>Close</button>
			</form>
		</dialog>
	</div>

	{#if comments.length}
		<h3>Comments</h3>

		{#each comments as comment}
			<Comment {comment} />
		{/each}
	{/if}
</section>
