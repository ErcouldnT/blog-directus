<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';

	export let data;

	const { posts, project } = data;
</script>

<SEO title={project.title} description={project.description} />

<main class="prose prose-base">
	<div class="space-y-6">
		{#each posts as post (post.slug)}
			<div
				class="hover:border-warning rounded-2xl border border-transparent p-4 text-center shadow-xl transition-all duration-300"
			>
				<h2>
					<a class="no-underline" href="/{post.slug}">
						{post.title}
					</a>
				</h2>
				<p>{post.description}</p>
				<h4>{post.author.first_name}</h4>
				<p>{new Date(post.date_created).toLocaleDateString('tr')}</p>
			</div>
		{/each}
	</div>
</main>
