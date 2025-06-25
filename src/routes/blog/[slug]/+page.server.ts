import { error } from '@sveltejs/kit';
import getDirectusInstance from '$lib/directus';
import { readItem } from '@directus/sdk';

export async function load({ fetch, params }) {
	const directus = getDirectusInstance(fetch);

	try {
		return {
			post: await directus.request(
				readItem('posts', params.slug, {
					fields: ['*', { '*': ['*'] }]
				})
			)
		};
	} catch (err) {
		error(404, 'Post not found');
	}
}
