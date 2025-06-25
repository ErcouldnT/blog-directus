<script lang="ts">
	export let data;

	const { project } = data;
</script>

<main class="prose prose-base">
	<h1>{project.title}</h1>
	<p>{project.description}</p>
</main>
