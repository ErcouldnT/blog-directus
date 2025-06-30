import type { Post } from '$lib/directus-types';
import { error } from '@sveltejs/kit';
import { readItems } from '@directus/sdk';
import getDirectusInstance from '$lib/directus';

export async function load({ fetch, params }) {
	const { slug } = params;
	const directus = getDirectusInstance(fetch);

	try {
		const posts = (await directus.request(
			readItems('posts', {
				filter: { slug: { _eq: slug } },
				fields: ['*', { '*': ['*'] }],
				limit: 1
			})
		)) as Post[];

		const post = posts[0];
		console.log(post);

		// if (!post) throw new Error('Not found');

		return { post };
	} catch {
		error(404, 'Post not found');
	}
}
