<script lang="ts">
	export let data;
</script>

<main class="prose prose-base">
	<h1>{data.page.title}</h1>
	<div>{@html data.page.content}</div>
</main>
