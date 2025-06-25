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
				<span>{post.publish_date} &bull; {post.author.name}</span>
			</li>
		{/each}
	</ul>
</main>
