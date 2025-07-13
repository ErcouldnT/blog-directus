<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';

	export let data;

	const { posts, project } = data;
</script>

<SEO title={project.title} description={project.description} />

<main class="prose prose-base">
	<ul>
		{#each posts as post (post.slug)}
			<li>
				<h2>
					<a href="/{post.slug}">
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
