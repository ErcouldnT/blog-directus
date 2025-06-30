<script lang="ts">
	export let data;

	const { posts } = data;
</script>

<main class="prose prose-base">
	<h1>Blog</h1>

	<ul>
		{#each posts as post (post.slug)}
			<li>
				<h2>
					<a href="/blog/{post.slug}">
						{post.title}
					</a>
				</h2>
				<span
					>{new Date(post.date_created).toLocaleDateString('tr')} &bull; {post.author.first_name +
						' ' +
						post.author.last_name}</span
				>
			</li>
		{/each}
	</ul>
</main>
