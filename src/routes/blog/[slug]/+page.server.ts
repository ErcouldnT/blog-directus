import type { Post } from '$lib/directus-types';
import { error } from '@sveltejs/kit';
import { readItem } from '@directus/sdk';
import getDirectusInstance from '$lib/directus';

export async function load({ fetch, params }) {
	const directus = getDirectusInstance(fetch);

	try {
		const post = (await directus.request(
			readItem('posts', params.slug, {
				fields: ['*', { '*': ['*'] }]
			})
		)) as Post;

		return {
			post
		};
	} catch {
		error(404, 'Post not found');
	}
}
