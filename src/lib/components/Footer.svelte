<script lang="ts">
	import { Github, Instagram, Youtube } from '@lucide/svelte';
</script>

<footer class="footer footer-horizontal footer-center text-base-content rounded p-10">
	<nav class="grid grid-flow-col gap-4">
		<a href="/" class="link link-hover">Posts</a>
		<a href="/categories" class="link link-hover">Categories</a>
		<a href="/tags" class="link link-hover">Tags</a>
		<!-- <a href="/about" class="link link-hover">About</a> -->
		<a href="mailto:me@erkut.dev" class="link link-hover">Contact</a>
	</nav>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<a href="https://youtube.com/@ErcouldnT" target="_blank">
				<Youtube strokeWidth="1.5" />
			</a>
			<a href="https://instagram.com/ErcouldnT" target="_blank">
				<Instagram strokeWidth="1.5" />
			</a>
			<a href="https://github.com/ErcouldnT" target="_blank">
				<Github strokeWidth="1.5" />
			</a>
		</div>
	</nav>
	<aside>
		<p>© {new Date().getFullYear()}</p>
		<p>Coded with ♥️ <span class="underline underline-offset-4">in Moscow</span></p>
	</aside>
</footer>
