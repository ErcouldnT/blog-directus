<script lang="ts">
	export let data;

	const { page } = data;
</script>

<main class="prose prose-base">
	<h1>{page.title}</h1>
	<div>{@html page.content}</div>
</main>
