<script lang="ts">
	export let data;

	const { global } = data;
</script>

<main class="prose prose-base">
	<h1>{global.title}</h1>
	<p>{global.description}</p>
</main>
